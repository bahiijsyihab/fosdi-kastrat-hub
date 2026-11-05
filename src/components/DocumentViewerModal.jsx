import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Share2, 
  Copy, 
  Check, 
  BookOpen, 
  Scale, 
  ShieldCheck, 
  FileCheck2,
  Bookmark
} from 'lucide-react';

export default function DocumentViewerModal({ paper, isOpen, onClose, onDownload }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !paper) return null;

  const copyCitation = () => {
    const citation = `FOSDI KASTRAT Hub. (2025). ${paper.title}. ${paper.code || 'Dokumen Resmi FOSDI'}. Jakarta: Dewan Pimpinan Pusat Forum Santri Edukatif Indonesia.`;
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div 
        className="bg-white max-w-4xl w-full rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="bg-primary text-white px-6 py-4 flex items-center justify-between border-b border-emerald-900/40">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-800/80">
              <BookOpen className="w-5 h-5 text-secondary-fixed" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-primary-fixed-dim font-bold block">
                Repositori Naskah Terakreditasi · Open Access
              </span>
              <h3 className="text-sm sm:text-base font-bold truncate max-w-md sm:max-w-xl">
                {paper.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyCitation}
              title="Salin Sitasi Ilmiah"
              className="p-2 rounded-lg bg-emerald-800/60 hover:bg-emerald-800 text-white text-xs flex items-center gap-1 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-secondary-fixed" /> : <Copy className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? 'Tersalin' : 'Sitasi'}</span>
            </button>

            <button
              onClick={handlePrint}
              title="Cetak Dokumen"
              className="p-2 rounded-lg bg-emerald-800/60 hover:bg-emerald-800 text-white transition-colors"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={() => onDownload(paper)}
              title="Unduh PDF Resmi"
              className="px-3 py-1.5 rounded-lg bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-fixed-dim text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Unduh PDF</span>
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-white transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Paper Document Content (Academic Whitepaper View) */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-slate-50/50 space-y-8 custom-scrollbar">
          {/* Header Metadata Sheet */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>DEWAN PAKAR BIRO KASTRAT FOSDI PUSAT</span>
              </div>
              <span className="text-xs text-slate-500 font-mono">
                {paper.code || 'DOC-FOSDI-2025'}
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
              {paper.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
              <div>
                <strong>Klasifikasi:</strong> {paper.categoryLabel || 'Kajian Kebijakan'}
              </div>
              <div>
                <strong>Format:</strong> {paper.docType || 'Policy Brief'}
              </div>
              <div>
                <strong>Waktu Terbit:</strong> {paper.date || '2024/2025'}
              </div>
              <div>
                <strong>Lisensi:</strong> CC-BY-NC 4.0 Open Access
              </div>
            </div>

            {/* Groundings pill badges */}
            {paper.groundings && (
              <div className="flex flex-wrap gap-2 pt-2">
                {paper.groundings.map((g, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-900 text-xs font-semibold border border-emerald-200 flex items-center gap-1.5"
                  >
                    <Scale className="w-3.5 h-3.5 text-emerald-700" />
                    {g.label}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Abstract / Executive Summary */}
          <div className="bg-emerald-50/60 p-6 rounded-xl border-l-4 border-emerald-800 space-y-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-950">
              Ringkasan Eksekutif (Executive Abstract)
            </h4>
            <p className="font-serif text-sm sm:text-base text-slate-800 leading-relaxed italic">
              "{paper.excerpt}"
            </p>
          </div>

          {/* Core Body Sections */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs space-y-6 text-slate-800 font-serif">
            <section className="space-y-3">
              <h3 className="font-sans text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-700"></span>
                I. Latar Belakang & Urgensi Kebijakan
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Lembaga pendidikan pesantren memegang peran ganda sebagai entitas transmisi keilmuan Islam (*tafaqquh fiddin*) sekaligus agen pemberdayaan sosial kemasyarakatan. Dalam dinamika legislasi terkini, pengawalan terhadap kebijakan negara—baik berupa alokasi anggaran belanja nasional, standardisasi regulasi perlindungan data, maupun kepemilikan aset wakaf—membutuhkan rujukan yuridis positif yang dikonfirmasi oleh prinsip maslahah ammah (*Maqashid Syariah*).
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="font-sans text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-700"></span>
                II. Analisis Yuridis Normatif & Fiqh Siyasah
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Klausul pembatasan atau ketimpangan alokasi bertolak belakang dengan asas keadilan distributif (*al-'adalah al-ijtima'iyyah*). Berdasarkan kaidah fiqhiyah:
              </p>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs font-mono text-slate-800 my-2">
                "Tasharruf al-imam 'ala al-ra'iyyah manutun bi al-maslahah" (Kebijakan pemerintah terhadap rakyat wajib berorientasi pada kemaslahatan umum).
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                Oleh karenanya, FOSDI mendesak agar Badan Anggaran DPR RI dan kementerian sektoral tidak menerapkan formula pemotongan yang mengorbankan pesantren salafiyah tradisional berkategori afirmatif.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="font-sans text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-700"></span>
                III. Rekomendasi Konkret untuk Parlemen & Pemerintah
              </h3>
              <ul className="list-disc pl-5 text-sm space-y-2 text-slate-700 font-sans">
                <li>
                  <strong>Revisi Matriks Alokasi:</strong> Mengembalikan persentase minimum Dana Abadi Pesantren sekurang-kurangnya 20% dari total pos dana abadi pendidikan nasional.
                </li>
                <li>
                  <strong>Transparansi Penyaluran:</strong> Melibatkan perwakilan ormas pesantren dalam komite pengarah LPDP/Kemenag.
                </li>
                <li>
                  <strong>Penguatan Afirmasi Kitab Kuning:</strong> Mengalokasikan dana riset dan digitalisasi turats bagi ma'had aly dan pesantren non-formal.
                </li>
              </ul>
            </section>
          </div>
        </div>

        {/* Footer info */}
        <div className="bg-slate-100 px-6 py-3 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Bookmark className="w-3.5 h-3.5 text-emerald-800" />
            <span>DPP FOSDI · Terdaftar di Baleg DPR RI & Kemenkumham RI</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-200 hover:bg-slate-300 rounded font-semibold text-slate-800 transition-colors"
          >
            Tutup Naskah
          </button>
        </div>
      </div>
    </div>
  );
}
