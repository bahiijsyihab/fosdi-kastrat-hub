import React, { useState, useMemo } from 'react';
import { 
  Filter, 
  Search, 
  Clock, 
  ArrowRight, 
  Download, 
  ShieldCheck, 
  FileCheck, 
  BookMarked,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export default function ResearchRepository({ 
  papers, 
  onReadPaper, 
  onDownloadPaper,
  externalSearchQuery,
  onResetSearch
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFormat, setSelectedFormat] = useState('Semua Format');
  const [keyword, setKeyword] = useState('');

  const categories = [
    { id: 'all', label: 'Semua Isu', count: 42 },
    { id: 'nasional', label: 'Kebijakan Nasional & Regulasi', count: 28 },
    { id: 'daerah', label: 'Advokasi Daerah & Cabang', count: 14 },
    { id: 'ekonomi', label: 'Ekonomi & Kemandirian Pesantren', count: 9 }
  ];

  const formats = [
    'Semua Format',
    'Policy Brief',
    'Naskah Akademik',
    'Rilis Pers',
    'Infografis & Data'
  ];

  // Combine local search and external header search if any
  const effectiveKeyword = (keyword || externalSearchQuery || '').toLowerCase();

  const filteredPapers = useMemo(() => {
    return papers.filter((paper) => {
      // Category match
      if (selectedCategory !== 'all' && paper.category !== selectedCategory) {
        return false;
      }
      // Format match
      if (selectedFormat !== 'Semua Format' && paper.docType !== selectedFormat) {
        return false;
      }
      // Keyword match
      if (effectiveKeyword) {
        const titleMatch = paper.title.toLowerCase().includes(effectiveKeyword);
        const excerptMatch = paper.excerpt.toLowerCase().includes(effectiveKeyword);
        const codeMatch = paper.code.toLowerCase().includes(effectiveKeyword);
        const groundingMatch = paper.groundings.some(g => g.label.toLowerCase().includes(effectiveKeyword));
        return titleMatch || excerptMatch || codeMatch || groundingMatch;
      }
      return true;
    });
  }, [papers, selectedCategory, selectedFormat, effectiveKeyword]);

  const getCategoryTheme = (label) => {
    switch (label) {
      case 'Pendidikan & Turats':
        return 'bg-primary text-on-primary';
      case 'Ekonomi Syariah':
        return 'bg-secondary text-on-secondary';
      case 'Hukum & Advokasi':
        return 'bg-[#804300] text-[#ffb87e]';
      case 'Advokasi Daerah':
        return 'bg-emerald-800 text-white';
      default:
        return 'bg-slate-700 text-white';
    }
  };

  return (
    <section id="kajian-section" className="w-full bg-surface py-10 sm:py-14 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-slate-200">
          <div>
            <span className="text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
              <BookMarked className="w-4 h-4 text-emerald-800" />
              Repositori Kebijakan & Kajian FOSDI
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Eksplorasi Naskah & Riset Strategis
            </h2>
          </div>

          <div className="text-on-surface-variant text-xs sm:text-sm bg-surface-container px-3 py-1.5 rounded-lg border border-slate-200">
            Menampilkan <strong className="text-on-surface">{filteredPapers.length}</strong> dari{' '}
            <strong className="text-on-surface">42</strong> Naskah Kajian Terakreditasi
          </div>
        </div>

        {/* Filter Controls Wrapper */}
        <div className="bg-surface-container-low rounded-2xl p-5 sm:p-6 space-y-4 shadow-sm border border-slate-200/80">
          {/* Row 1: Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat.label} ({cat.count})
                </button>
              );
            })}
          </div>

          {/* Row 2: Document Type Pills & Search Bar */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center pt-2 border-t border-slate-200/60">
            {/* Format Pills */}
            <div className="md:col-span-8 flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-500 uppercase font-bold mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" />
                Format:
              </span>
              {formats.map((fmt) => {
                const isActive = selectedFormat === fmt;
                return (
                  <button
                    key={fmt}
                    onClick={() => setSelectedFormat(fmt)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                      isActive
                        ? 'bg-primary text-white shadow-xs'
                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {fmt}
                  </button>
                );
              })}
            </div>

            {/* In-Page Keyword Filter */}
            <div className="md:col-span-4 relative">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Saring kata kunci kajian..."
                className="w-full bg-white text-slate-800 text-xs pl-9 pr-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-secondary-fixed focus:ring-1 focus:ring-emerald-500 shadow-xs"
              />
              {effectiveKeyword && (
                <button
                  onClick={() => {
                    setKeyword('');
                    if (onResetSearch) onResetSearch();
                  }}
                  className="absolute right-2.5 top-2 text-[10px] text-slate-400 hover:text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Papers Grid */}
        {filteredPapers.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-dashed border-slate-300">
            <BookMarked className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">Tidak ada naskah yang cocok</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
              Silakan sesuaikan kata kunci pencarian atau ubah filter kategori/format yang dipilih.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedFormat('Semua Format');
                setKeyword('');
                if (onResetSearch) onResetSearch();
              }}
              className="mt-4 px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg hover:bg-emerald-900 transition-colors"
            >
              Reset Semua Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPapers.map((paper) => (
              <article
                key={paper.id}
                className="flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-200/90 overflow-hidden transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Visual Thumbnail */}
                <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                  <img
                    src={paper.image}
                    alt={paper.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider shadow-sm ${getCategoryTheme(paper.categoryLabel)}`}>
                    {paper.categoryLabel}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur px-2 py-0.5 rounded text-[11px] font-semibold text-slate-800 flex items-center gap-1 shadow-xs">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>{paper.readTime}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                      <span>{paper.code}</span>
                      <span>•</span>
                      <span>{paper.date}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors">
                      {paper.title}
                    </h3>

                    <p className="font-serif text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {paper.excerpt}
                    </p>
                  </div>

                  {/* Grounding Badges (Dual Basis: Law & Fiqh) */}
                  <div className="space-y-3 pt-2 border-t border-slate-100">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {paper.groundings.map((g, gIdx) => (
                        <span
                          key={gIdx}
                          className={`px-2 py-0.5 rounded text-[11px] font-medium flex items-center gap-1 ${
                            g.type === 'statute'
                              ? 'bg-slate-100 text-slate-700 border border-slate-200'
                              : 'bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold'
                          }`}
                        >
                          <FileCheck className="w-3 h-3 text-emerald-700" />
                          {g.label}
                        </span>
                      ))}
                    </div>

                    {/* Card Actions */}
                    <div className="flex items-center justify-between pt-2">
                      <button
                        onClick={() => onReadPaper(paper)}
                        className="text-xs text-primary font-bold hover:text-emerald-700 flex items-center gap-1 group/btn"
                      >
                        <span>Baca Naskah</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>

                      <button
                        onClick={() => onDownloadPaper(paper)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-variant text-slate-800 text-xs font-semibold transition-colors border border-slate-200 active:scale-95"
                      >
                        <Download className="w-3.5 h-3.5 text-primary" />
                        <span>Unduh PDF ({paper.fileSize})</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
