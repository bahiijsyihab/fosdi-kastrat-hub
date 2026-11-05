import React, { useState } from 'react';
import { 
  Scale, 
  CheckCircle2, 
  RotateCw, 
  Hourglass, 
  ShieldCheck, 
  FileText, 
  Vote, 
  Lock, 
  Radio, 
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react';

export default function HeroAdvocacy({
  advocacyData,
  signatureCount,
  onOpenPetition,
  onOpenDocument,
  latestSigner
}) {
  const [showHashInfo, setShowHashInfo] = useState(false);
  const targetCount = advocacyData.targetSignatures || 2000;
  const progressPct = Math.min(100, Math.round((signatureCount / targetCount) * 100));
  const remainingCount = Math.max(0, targetCount - signatureCount);

  return (
    <section id="beranda" className="relative w-full overflow-hidden bg-surface-container-low px-4 lg:px-8 py-8 sm:py-12 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div id="petisi-section" className="relative rounded-2xl bg-surface-container-lowest p-6 sm:p-8 lg:p-10 shadow-md border border-slate-200/80 overflow-hidden scroll-mt-24">
          {/* Ambient Lighting Gradients */}
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-emerald-400/10 blur-2xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left 8 Cols: Main Position Statement */}
            <div className="lg:col-span-8 flex flex-col space-y-6">
              {/* Badges Bar */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#804300] text-[#ffb87e] text-xs font-bold tracking-wider uppercase shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#ffb77d] animate-ping"></span>
                  {advocacyData.categoryBadge}
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-surface-container text-primary text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  {advocacyData.forumBadge}
                </span>

                <span className="text-xs text-on-surface-variant flex items-center gap-1 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  {advocacyData.docNo}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-sans text-2xl sm:text-3xl lg:text-4xl text-slate-900 font-extrabold tracking-tight leading-tight sm:leading-snug">
                {advocacyData.title}
              </h1>

              {/* 3 Executive Pillars Box */}
              <div className="bg-surface-container-low rounded-xl p-5 sm:p-6 space-y-4 border border-slate-200/60">
                <div className="text-xs uppercase tracking-wider text-primary font-bold flex items-center gap-2">
                  <Scale className="w-4 h-4 text-emerald-800" />
                  <span>3 Butir Konsideran Sikap Eksekutif FOSDI:</span>
                </div>

                <ul className="space-y-3 text-sm text-slate-800 font-serif leading-relaxed">
                  {advocacyData.executivePillars.map((pillar) => (
                    <li key={pillar.num} className="flex items-start gap-3">
                      <span className="font-sans text-xs px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-bold mt-0.5 shrink-0">
                        {pillar.num}
                      </span>
                      <span>
                        <strong className="font-sans text-slate-900">{pillar.title}:</strong>{' '}
                        {pillar.content}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons & Verification Indicator */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenPetition}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#804300] hover:bg-[#5e3000] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-95"
                >
                  <Vote className="w-5 h-5 text-amber-200" />
                  <span>Beri Dukungan & Tanda Tangan Sekarang</span>
                </button>

                <button
                  onClick={onOpenDocument}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-surface-container-high hover:bg-surface-variant text-slate-900 text-sm font-semibold transition-colors border border-slate-300/70"
                >
                  <FileText className="w-5 h-5 text-emerald-800" />
                  <span>Baca Naskah Sikap Lengkap (PDF/Web)</span>
                </button>

                <div className="relative">
                  <button
                    onClick={() => setShowHashInfo(!showHashInfo)}
                    className="text-xs text-on-surface-variant flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer py-1"
                  >
                    <Lock className="w-4 h-4 text-emerald-600" />
                    <span>Enkripsi SHA-256 Integritas Petisi</span>
                    <Info className="w-3.5 h-3.5 text-slate-400" />
                  </button>

                  {showHashInfo && (
                    <div className="absolute left-0 mt-2 p-3 bg-white border border-slate-200 rounded-lg shadow-xl text-xs z-30 w-72 text-slate-700 animate-in fade-in">
                      <p className="font-bold text-slate-900 mb-1">Audit Integritas Kriptografis</p>
                      <p className="text-[11px] leading-relaxed mb-2">
                        Setiap tanda tangan di-hash menggunakan SHA-256 dan ditandatangani secara digital untuk menjamin tidak ada manipulasi data kuorum mosi sikap.
                      </p>
                      <div className="bg-slate-100 p-1.5 rounded font-mono text-[10px] break-all select-all text-slate-600">
                        SHA256: 9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Live Support Counter Panel */}
            <div className="lg:col-span-4 flex flex-col h-full bg-surface-container rounded-xl p-5 lg:p-6 shadow-sm border border-slate-200/70">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200/60">
                <span className="text-xs text-on-surface-variant uppercase tracking-wider font-bold">
                  Monitor Advokasi Sipil
                </span>
                <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container text-xs font-extrabold flex items-center gap-1.5 animate-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-700"></span>
                  LIVE
                </span>
              </div>

              {/* Main Metric Counter */}
              <div className="py-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl lg:text-4xl text-primary font-extrabold tracking-tight">
                    {signatureCount.toLocaleString('id-ID')}
                  </span>
                  <span className="text-sm font-semibold text-on-surface-variant">
                    / {targetCount.toLocaleString('id-ID')} Target Kuorum
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Santri, Asatidz & BEM Pesantren telah menandatangani mosi resmi
                </p>
              </div>

              {/* Progress Gauge */}
              <div className="space-y-2 mb-4">
                <div className="w-full bg-surface-container-highest rounded-full h-3 overflow-hidden p-0.5">
                  <div
                    className="bg-[#804300] h-full rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${progressPct}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-[#5e3000]">{progressPct}% Tercapai</span>
                  <span className="text-on-surface-variant">Sisa {remainingCount.toLocaleString('id-ID')} Pengesah</span>
                </div>
              </div>

              {/* Legislative Workflow Stage Tracker */}
              <div className="mt-2 bg-surface-container-lowest rounded-lg p-3.5 space-y-2.5 border border-slate-200/60">
                <span className="text-xs font-bold text-on-surface block tracking-wide">
                  Jalur Legislasi di Senayan:
                </span>
                <div className="space-y-2 text-xs">
                  {advocacyData.legislativeStages.map((stage) => {
                    if (stage.status === 'completed') {
                      return (
                        <div key={stage.id} className="flex items-center gap-2 text-secondary font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{stage.title}</span>
                        </div>
                      );
                    }
                    if (stage.status === 'in-progress') {
                      return (
                        <div key={stage.id} className="flex items-center gap-2 text-[#804300] font-bold bg-[#ffdcc3]/40 px-2 py-1 rounded">
                          <RotateCw className="w-4 h-4 animate-spin text-[#804300] shrink-0" />
                          <span>{stage.title} ({stage.label})</span>
                        </div>
                      );
                    }
                    return (
                      <div key={stage.id} className="flex items-center gap-2 text-slate-400 font-medium">
                        <Hourglass className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>{stage.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Recent Verified Signatory */}
              <div className="mt-4 pt-3 border-t border-slate-200/60">
                <span className="text-[11px] font-semibold text-on-surface-variant block mb-1.5 uppercase tracking-wide">
                  Penandatangan Baru Terverifikasi:
                </span>
                <div className="text-xs text-on-surface bg-surface-container-high/80 rounded-lg px-3 py-2 flex items-center justify-between border border-slate-300/40">
                  <span className="font-semibold truncate pr-2">
                    {latestSigner.name} · {latestSigner.institution}
                  </span>
                  <span className="text-[11px] text-emerald-700 font-bold shrink-0">
                    {latestSigner.timeAgo}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
