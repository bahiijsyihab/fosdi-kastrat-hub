import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import HeroAdvocacy from './components/HeroAdvocacy.jsx';
import ImpactTicker from './components/ImpactTicker.jsx';
import ResearchRepository from './components/ResearchRepository.jsx';
import CitizenFeedAndSubmission from './components/CitizenFeedAndSubmission.jsx';
import AboutFosdi from './components/AboutFosdi.jsx';
import PetitionModal from './components/PetitionModal.jsx';
import DocumentViewerModal from './components/DocumentViewerModal.jsx';
import SubmitDraftModal from './components/SubmitDraftModal.jsx';
import AdminPortalModal from './components/AdminPortalModal.jsx';
import Footer from './components/Footer.jsx';

import {
  INITIAL_ADVOCACY,
  IMPACT_METRICS,
  RESEARCH_PAPERS,
  INITIAL_CITIZEN_FEED,
} from './data/mockData.js';
import { CheckCircle2 } from 'lucide-react';

import { usePublications, useCreatePublication } from './hooks/usePublications';
import { useRecentSignatures, useSubmitSignature } from './hooks/useSignatures';
import { useAuth } from './hooks/useAuth';

export default function App() {
  const [activeNav, setActiveNav] = useState('beranda');
  const [searchQuery, setSearchQuery] = useState('');
  
  // TanStack Query & Better Auth Integration
  const { data: serverPublications } = usePublications();
  const { data: serverSignatures } = useRecentSignatures(INITIAL_ADVOCACY.id);
  const submitSignatureMutation = useSubmitSignature();
  const createPublicationMutation = useCreatePublication();
  const { user, isAuthenticated } = useAuth();

  // Dynamic State for Civic Advocacy Counter & Feed
  const [signatureCount, setSignatureCount] = useState(INITIAL_ADVOCACY.initialSignatures);
  const [feedItems, setFeedItems] = useState(INITIAL_CITIZEN_FEED);
  const [latestSigner, setLatestSigner] = useState(INITIAL_ADVOCACY.latestSignatory);

  // Dynamic State for Research Papers (Supports Self-Publishing from Admin)
  const [papers, setPapers] = useState(RESEARCH_PAPERS);

  // Sync with TanStack Query server data if available
  useEffect(() => {
    if (serverPublications?.data && serverPublications.data.length > 0) {
      setPapers(serverPublications.data);
    }
  }, [serverPublications]);

  useEffect(() => {
    if (serverSignatures?.data && serverSignatures.data.length > 0) {
      setFeedItems(
        serverSignatures.data.map((item) => ({
          id: item.id,
          initials:
            item.fullName
              ?.split(' ')
              .map((n) => n[0])
              .slice(0, 2)
              .join('')
              .toUpperCase() || 'ST',
          name: item.fullName,
          institution: item.institution,
          badge: item.isVerified ? 'Terverifikasi KTA Santri' : `Tervalidasi (${item.category})`,
          timeAgo: 'Baru saja',
          badgeType: item.isVerified ? 'primary' : 'secondary',
        }))
      );
    }
  }, [serverSignatures]);

  // Admin Auth State & Submissions Queue
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [submittedDrafts, setSubmittedDrafts] = useState([
    {
      title: 'Advokasi Perda Alokasi APBD Pesantren di Kab. Pasuruan',
      author: 'Gus Zaimuddin',
      institution: 'Forum Alumni Pondok Salafiyah',
      summary: 'Usulan draft klausul bantuan afirmasi fasilitas sanitasi dan pondok ramah lingkungan dalam ranperda daerah.',
      date: 'Kemarin'
    },
    {
      title: 'Kajian Perlindungan Kekayaan Intelektual Terjemahan Nadhom Turats',
      author: 'Ning Nailis Saadah, M.Pd.',
      institution: 'Ma\'had Aly Cirebon',
      summary: 'Analisis perlindungan komersialisasi penerbit digital terhadap kitab karya kiai sepuh.',
      date: '2 hari lalu'
    }
  ]);

  // Modal States
  const [isPetitionOpen, setIsPetitionOpen] = useState(false);
  const [isSubmitDraftOpen, setIsSubmitDraftOpen] = useState(false);
  const [isAdminPortalOpen, setIsAdminPortalOpen] = useState(false);
  const [isDocumentOpen, setIsDocumentOpen] = useState(false);
  const [selectedPaper, setSelectedPaper] = useState(null);

  // Toast State
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSignPetitionSuccess = async ({ name, institution, email, category }) => {
    // 1. Optimistic UI update
    setSignatureCount((prev) => prev + 1);

    // 2. Generate Initials
    const initials = name
      .split(' ')
      .map((n) => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase() || 'ST';

    // 3. Prepend into Live Feed
    const newFeedItem = {
      id: Date.now(),
      initials,
      name,
      institution,
      badge: `Tervalidasi (${category})`,
      timeAgo: 'Baru saja',
      badgeType: 'secondary',
    };

    setFeedItems((prev) => [newFeedItem, ...prev]);

    // 4. Update Hero Latest Signer
    setLatestSigner({
      name,
      institution,
      timeAgo: 'Baru saja',
    });

    // 5. Asynchronous Mutation via TanStack Query
    try {
      await submitSignatureMutation.mutateAsync({
        publicationId: INITIAL_ADVOCACY.id,
        data: {
          fullName: name,
          email,
          institution,
          category,
        },
      });
    } catch (_) {
      // Offline fallback ensures graceful continuation
    }

    showToast(
      `Alhamdulillah! Mosi dukungan dari ${name} resmi tercatat dalam sistem advokasi kuorum DPR RI.`
    );
  };

  const handleReadPaper = (paper) => {
    setSelectedPaper(paper);
    setIsDocumentOpen(true);
  };

  const handleReadHeroDocument = () => {
    setSelectedPaper({
      id: INITIAL_ADVOCACY.id,
      title: INITIAL_ADVOCACY.title,
      code: INITIAL_ADVOCACY.docNo,
      categoryLabel: 'Isu Nasional · Paripurna DPR',
      docType: 'Naskah Sikap Resmi Eksekutif',
      date: 'September 2025',
      excerpt:
        'Tinjauan komprehensif atas RAPBN mengenai alokasi Dana Abadi Pesantren. Menguraikan telaah hukum Pasal 49 UU No. 18/2019 tentang Pesantren serta justifikasi Maqashid Syariah (Hifzh al-Ilm) dalam menjaga keberlanjutan 39.000 pesantren se-Indonesia.',
      groundings: [
        { type: 'statute', label: 'Pasal 49 UU No. 18/2019' },
        { type: 'fiqh', label: 'Maqashid: Hifzh al-Ilm' },
        { type: 'statute', label: 'UU Keuangan Negara' },
      ],
      fileSize: '3.8 MB',
    });
    setIsDocumentOpen(true);
  };

  const handleDownloadPaper = (paper) => {
    showToast(`Mengunduh berkas resmi "${paper.title}" (${paper.fileSize || 'PDF'})...`);
  };

  // Self-Publish Handler (From Admin Portal)
  const handlePublishPaper = async (newPaper) => {
    setPapers((prev) => [newPaper, ...prev]);

    // Asynchronous Mutation via TanStack Query
    try {
      await createPublicationMutation.mutateAsync({
        title: newPaper.title,
        type: newPaper.docType === 'Pernyataan Sikap' ? 'Pernyataan Sikap' : 'Hasil Kajian',
        categoryId: '00000000-0000-0000-0000-000000000001',
        executiveSummary: newPaper.excerpt,
        coverImageUrl: newPaper.image,
      });
    } catch (_) {
      // Offline fallback
    }

    showToast(`Naskah "${newPaper.title}" berhasil diterbitkan ke repositori publik!`);
    
    // Smooth scroll down to repository
    setTimeout(() => {
      const el = document.getElementById('kajian-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  };

  // Approve Draft into Live Paper
  const handleApproveDraft = (draft) => {
    const newPaper = {
      id: `approved-${Date.now()}`,
      title: draft.title,
      excerpt: draft.summary,
      category: 'daerah',
      categoryLabel: 'Advokasi Daerah & Cabang',
      docType: 'Policy Brief',
      code: `Policy Brief No. ${Math.floor(Math.random() * 40) + 15}`,
      date: new Date().toLocaleDateString('id-ID', { month: 'long', year: 'numeric' }),
      readTime: '6 min baca',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
      groundings: [
        { type: 'statute', label: 'UU No. 18/2019' },
        { type: 'fiqh', label: 'Maslahah Mursalah' }
      ],
      fileSize: '2.1 MB'
    };

    setPapers((prev) => [newPaper, ...prev]);
    setSubmittedDrafts((prev) => prev.filter((d) => d !== draft));
    showToast(`Draf "${draft.title}" disetujui & resmi diterbitkan ke repositori publik!`);
  };

  const handleDraftSubmitSuccess = (draft) => {
    const title = typeof draft === 'object' ? draft.title : draft;
    const author = typeof draft === 'object' ? draft.author : 'Santri Peneliti';
    const institution = typeof draft === 'object' ? draft.institution : 'Pesantren';
    const summary = typeof draft === 'object' ? draft.summary : 'Usulan perumusan kebijakan baru.';

    setSubmittedDrafts((prev) => [
      {
        title,
        author,
        institution,
        summary,
        date: 'Baru saja'
      },
      ...prev
    ]);

    showToast(`Draf "${title}" berhasil dikirimkan ke Meja Dewan Pakar FOSDI untuk proses penelaahan.`);
  };

  const handleDownloadGuideline = () => {
    showToast('Mengunduh Buku Panduan Penulisan Policy Brief & Legal Anotasi Santri (PDF)...');
  };

  const handleNavClick = (navId) => {
    setActiveNav(navId);
    if (navId === 'beranda') {
      const el = document.getElementById('beranda');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (navId === 'kajian-strategis') {
      const el = document.getElementById('kajian-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (navId === 'pernyataan-sikap-&-petisi') {
      const el = document.getElementById('petisi-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (navId === 'tentang-fosdi') {
      const el = document.getElementById('tentang-fosdi');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Auto update active nav on scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;
      const tentangEl = document.getElementById('tentang-fosdi');
      const kajianEl = document.getElementById('kajian-section');
      const petisiEl = document.getElementById('petisi-section');

      if (tentangEl && scrollPos >= tentangEl.offsetTop) {
        setActiveNav('tentang-fosdi');
      } else if (kajianEl && scrollPos >= kajianEl.offsetTop) {
        setActiveNav('kajian-strategis');
      } else if (petisiEl && scrollPos >= petisiEl.offsetTop) {
        setActiveNav('pernyataan-sikap-&-petisi');
      } else {
        setActiveNav('beranda');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-surface flex flex-col font-sans selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* Toast Notification Alert */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-xl shadow-2xl border border-emerald-500/50 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5 duration-300 max-w-md">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <p className="text-xs font-medium leading-relaxed">{toast.message}</p>
        </div>
      )}

      {/* Global Navigation Header */}
      <Header
        activeNav={activeNav}
        setActiveNav={handleNavClick}
        searchQuery={searchQuery}
        onSearch={setSearchQuery}
        onOpenAdminPortal={() => setIsAdminPortalOpen(true)}
        onOpenDataCenter={() => handleNavClick('kajian-strategis')}
        isAdminLoggedIn={isAdminLoggedIn}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20 bg-surface flex-1">
        {/* 1. Breaking Issue Hero & Live Advocacy Meter */}
        <HeroAdvocacy
          advocacyData={INITIAL_ADVOCACY}
          signatureCount={signatureCount}
          onOpenPetition={() => setIsPetitionOpen(true)}
          onOpenDocument={handleReadHeroDocument}
          latestSigner={latestSigner}
        />

        {/* 2. Advocacy Impact Ticker (Statistik Dinamis FOSDI) */}
        <ImpactTicker metrics={IMPACT_METRICS} />

        {/* 3. Research Repository & Interactive Filters */}
        <ResearchRepository
          papers={papers}
          onReadPaper={handleReadPaper}
          onDownloadPaper={handleDownloadPaper}
          externalSearchQuery={searchQuery}
          onResetSearch={() => setSearchQuery('')}
        />

        {/* 4. Live Citizen Action Feed & Think-Tank Submission Callout */}
        <CitizenFeedAndSubmission
          feedItems={feedItems}
          onOpenPetition={() => setIsPetitionOpen(true)}
          onOpenSubmitDraft={() => setIsSubmitDraftOpen(true)}
          onDownloadGuideline={handleDownloadGuideline}
        />

        {/* 5. Comprehensive About FOSDI Section */}
        <AboutFosdi
          onOpenAdminPortal={() => setIsAdminPortalOpen(true)}
          onExploreKajian={() => handleNavClick('kajian-strategis')}
        />
      </main>

      {/* Institutional Footer */}
      <Footer onNavigate={handleNavClick} />

      {/* Interactive Modals */}
      <PetitionModal
        isOpen={isPetitionOpen}
        onClose={() => setIsPetitionOpen(false)}
        onSignSuccess={handleSignPetitionSuccess}
      />

      <DocumentViewerModal
        paper={selectedPaper}
        isOpen={isDocumentOpen}
        onClose={() => setIsDocumentOpen(false)}
        onDownload={handleDownloadPaper}
      />

      <SubmitDraftModal
        isOpen={isSubmitDraftOpen}
        onClose={() => setIsSubmitDraftOpen(false)}
        onSubmitSuccess={handleDraftSubmitSuccess}
      />

      {/* Internal Admin & Self-Publishing Portal */}
      <AdminPortalModal
        isOpen={isAdminPortalOpen}
        onClose={() => setIsAdminPortalOpen(false)}
        signatureCount={signatureCount}
        onPublishPaper={handlePublishPaper}
        submittedDrafts={submittedDrafts}
        onApproveDraft={handleApproveDraft}
        isLoggedIn={isAdminLoggedIn}
        setIsLoggedIn={setIsAdminLoggedIn}
      />
    </div>
  );
}
