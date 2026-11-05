import React, { useState } from 'react';
import { 
  Scale, 
  BookOpen, 
  ShieldCheck, 
  Users, 
  Award, 
  Landmark, 
  FileText, 
  Target, 
  Compass, 
  Sparkles,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export default function AboutFosdi({ onOpenAdminPortal, onExploreKajian }) {
  const [activeTab, setActiveTab] = useState('profil');

  const dewanPakar = [
    {
      name: "K.H. Dr. Ahmad Nawawi, M.A.",
      role: "Ketua Dewan Pakar Fiqh Siyasah",
      institution: "Pengasuh Ma'had Aly & Dosen Pascasarjana",
      focus: "Ushul Fiqh & Maqashid Syariah Kebijakan",
      initials: "AN"
    },
    {
      name: "Dr. Hilman Wajdi, S.H., M.H.",
      role: "Direktur Advokasi Regulasi & Perundang-undangan",
      institution: "Pakar Hukum Tata Negara & Alumni Pesantren",
      focus: "Legislative Drafting & Pengujian UU di MK",
      initials: "HW"
    },
    {
      name: "Ning Dr. Afifah Zahra, M.E.I.",
      role: "Kepala Pusat Kajian Fiskal & Ekonomi Pesantren",
      institution: "Akademisi Ekonomi Syariah & Nazhir Wakaf",
      focus: "Dana Abadi, APBN Pendidikan & BMT Pesantren",
      initials: "AZ"
    },
    {
      name: "Gus M. Faruq Ridwan, S.Sos.",
      role: "Koordinator Hubungan Antar-Lembaga & Parlemen",
      institution: "Aktivis Presidium FOSDI Nasional",
      focus: "Audiensi Baleg, Banggar DPR RI & Komisi VIII",
      initials: "FR"
    }
  ];

  return (
    <section id="tentang-fosdi" className="w-full bg-surface-container-low py-12 sm:py-20 scroll-mt-24 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider border border-emerald-300">
            <Scale className="w-3.5 h-3.5 text-emerald-800" />
            <span>Tentang FOSDI · Kastrat Hub</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Sintesis Otoritas Turats Pesantren & Ketajaman Think-Tank Kebijakan Publik
          </h2>

          <p className="font-serif text-sm sm:text-base text-slate-600 leading-relaxed">
            Forum Santri Edukatif Indonesia (FOSDI) melalui <strong>Biro Kajian Strategis & Advokasi Kebijakan (Kastrat)</strong> hadir sebagai lembaga think-tank independen santri nusantara untuk mengawal arah legislasi negara yang adil, proporsional, dan bermaslahat.
          </p>
        </div>

        {/* 3 Core Philosophical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center border border-emerald-200">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Otoritas Turats & Fiqh Siyasah
            </h3>
            <p className="font-serif text-xs sm:text-sm text-slate-600 leading-relaxed">
              Setiap catatan kritis dan rekomendasi kebijakan berpijak kokoh pada kaidah ushul fiqh dan <em>Maqashid Syariah</em> (*Hifzh al-Ilm, Hifzh al-Mal, Hifzh al-Nafs*), menjaga khazanah keilmuan Islam nusantara dari marjinalisasi regulasi.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center border border-teal-200">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Riset Empiris & Legal Rigor
            </h3>
            <p className="font-serif text-xs sm:text-sm text-slate-600 leading-relaxed">
              Membedah draf RUU, alokasi APBN/APBD, dan sistem data kementerian melalui metodologi riset komparatif kuantitatif-kualitatif yang kredibel di meja perumus perundang-undangan.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center border border-amber-200">
              <Landmark className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Advokasi Parlemen & Suara Sipil
            </h3>
            <p className="font-serif text-xs sm:text-sm text-slate-600 leading-relaxed">
              Menghubungkan aspirasi 39.000 pesantren tradisional dengan para pembuat keputusan di Senayan melalui audiensi Baleg DPR RI, rapat dengar pendapat umum (RDPU), dan petisi publik terenkripsi.
            </p>
          </div>
        </div>

        {/* Interactive Tabbed Content: Visi Misi, Dewan Pakar, Status Hukum */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b border-slate-200 bg-slate-50/70 overflow-x-auto text-xs font-bold">
            <button
              onClick={() => setActiveTab('profil')}
              className={`px-6 py-4 flex items-center gap-2 border-b-2 whitespace-nowrap transition-colors ${
                activeTab === 'profil'
                  ? 'border-primary text-primary bg-white font-extrabold'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Target className="w-4 h-4" />
              <span>Visi, Misi & Garis Perjuangan</span>
            </button>

            <button
              onClick={() => setActiveTab('dewan-pakar')}
              className={`px-6 py-4 flex items-center gap-2 border-b-2 whitespace-nowrap transition-colors ${
                activeTab === 'dewan-pakar'
                  ? 'border-primary text-primary bg-white font-extrabold'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Dewan Pakar & Tim Perumus</span>
            </button>

            <button
              onClick={() => setActiveTab('legalitas')}
              className={`px-6 py-4 flex items-center gap-2 border-b-2 whitespace-nowrap transition-colors ${
                activeTab === 'legalitas'
                  ? 'border-primary text-primary bg-white font-extrabold'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Legalitas & Rekam Jejak</span>
            </button>
          </div>

          {/* Tab Panels */}
          <div className="p-6 sm:p-10">
            {activeTab === 'profil' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                    <Target className="w-4 h-4" />
                    <span>Visi Kebijakan FOSDI 2025-2030</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 leading-snug">
                    "Terwujudnya tata kelola kebijakan publik nasional yang berkeadilan, menjamin kedaulatan pendidikan pesantren, serta berorientasi maslahat ammah."
                  </h4>
                  <p className="font-serif text-sm text-slate-600 leading-relaxed">
                    FOSDI memandang santri bukan semata objek pasif penerima kebijakan, melainkan subjek intelektual yang berhak menafsirkan, mengkritisi, dan mengawal arah pembangunan hukum nasional.
                  </p>
                </div>

                <div className="space-y-4 bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                    3 Agenda Pokok Advokasi
                  </span>
                  <ul className="space-y-3 text-xs sm:text-sm font-serif text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Pengawalan Dana Abadi:</strong> Menolak segala bentuk diskriminasi atau pembatasan pos APBN bagi pesantren tradisional.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Perlindungan Hak Cipta Turats:</strong> Menjamin manuskrip ulama nusantara terlindungi dan bebas diakses santri secara terbuka (Open-Access).</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Kedaulatan Data Santri:</strong> Memastikan implementasi UU PDP pada sistem data kementerian tidak mengekspos privasi kiai & santri.</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'dewan-pakar' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      Dewan Pakar & Asistensi Kebijakan
                    </h4>
                    <p className="text-xs text-slate-500 font-serif">
                      Kombinasi ulama pengasuh pesantren, akademisi hukum tata negara, dan ekonom syariah.
                    </p>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold self-start">
                    Dewan Formatur 2024–2027
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {dewanPakar.map((p, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition-all space-y-2 flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-10 h-10 rounded-full bg-emerald-800 text-white font-bold text-xs flex items-center justify-center mb-3 shadow-xs">
                          {p.initials}
                        </div>
                        <h5 className="text-xs font-bold text-slate-900 leading-tight">
                          {p.name}
                        </h5>
                        <p className="text-[11px] text-emerald-700 font-semibold mt-0.5">
                          {p.role}
                        </p>
                        <p className="text-[11px] text-slate-500 font-serif mt-1">
                          {p.institution}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-200/60 text-[10px] text-slate-600 bg-white p-2 rounded">
                        <strong>Fokus:</strong> {p.focus}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'legalitas' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-primary font-bold text-xs">
                    <Award className="w-4 h-4 text-emerald-700" />
                    <span>Legalitas Organisasi</span>
                  </div>
                  <p className="font-bold text-slate-900 text-sm">
                    SK Kemenkumham RI
                  </p>
                  <p className="text-xs font-mono text-slate-600">
                    AHU-0019482.AH.01.07.Tahun 2021
                  </p>
                  <p className="text-[11px] text-slate-500 font-serif pt-1">
                    Terdaftar resmi sebagai badan hukum perkumpulan pemuda dan santri tingkat nasional.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-primary font-bold text-xs">
                    <Landmark className="w-4 h-4 text-emerald-700" />
                    <span>Mitra Parlemen</span>
                  </div>
                  <p className="font-bold text-slate-900 text-sm">
                    Registrasi Baleg DPR RI
                  </p>
                  <p className="text-xs font-mono text-slate-600">
                    No. 042/MITRA-BALEG/IX/2024
                  </p>
                  <p className="text-[11px] text-slate-500 font-serif pt-1">
                    Mitra terdaftar penyedia naskah pertimbangan dan anotasi akademik untuk Komisi VIII & Baleg.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-primary font-bold text-xs">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    <span>Integritas Terbuka</span>
                  </div>
                  <p className="font-bold text-slate-900 text-sm">
                    100% Open Access & Non-Partisan
                  </p>
                  <p className="text-xs text-emerald-800 font-semibold">
                    Lisensi Creative Commons (CC BY-NC 4.0)
                  </p>
                  <p className="text-[11px] text-slate-500 font-serif pt-1">
                    Seluruh naskah sikap dan kajian bebas diunduh tanpa paywall demi kepentingan dakwah dan advokasi.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer Callout */}
          <div className="bg-emerald-900 text-white px-6 sm:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-secondary-fixed shrink-0" />
              <p className="text-xs sm:text-sm text-emerald-100 font-serif">
                Tertarik berkolaborasi dalam riset kebijakan atau advokasi perda pesantren di daerah Anda?
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onExploreKajian}
                className="px-4 py-2 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
              >
                Lihat Semua Naskah
              </button>
              <button
                onClick={onOpenAdminPortal}
                className="px-4 py-2 rounded-lg bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-fixed-dim text-xs font-bold transition-colors shadow-xs"
              >
                Portal Advokasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
