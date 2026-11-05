import React from 'react';
import { 
  CheckCircle2, 
  FileEdit, 
  Upload, 
  ArrowRight, 
  CheckCheck, 
  Radio, 
  BookMarked, 
  Users, 
  Sparkles,
  Share2,
  FileCheck
} from 'lucide-react';

export default function CitizenFeedAndSubmission({ 
  feedItems, 
  onOpenPetition, 
  onOpenSubmitDraft,
  onDownloadGuideline 
}) {
  const getAvatarBg = (badgeType) => {
    switch (badgeType) {
      case 'secondary':
        return 'bg-secondary-fixed text-on-secondary-fixed';
      case 'tertiary':
        return 'bg-tertiary-fixed text-on-tertiary-fixed';
      case 'surface':
        return 'bg-slate-200 text-slate-800';
      case 'primary':
      default:
        return 'bg-primary-fixed text-on-primary-fixed';
    }
  };

  return (
    <section className="w-full bg-surface-container-low py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 5 Cols: Live Citizen Action Feed */}
          <div className="lg:col-span-5 flex flex-col bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200/80">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Arus Dukungan Tanda Tangan
                </h3>
              </div>
              <span className="text-xs px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
                Realtime Sync
              </span>
            </div>

            <p className="text-xs text-slate-600 mt-3 mb-4 leading-relaxed font-serif">
              Suara santri, asatidz, dan akademisi se-Indonesia yang masuk mengawal penolakan pemangkasan alokasi Dana Abadi Pesantren:
            </p>

            {/* Scrollable Feed List */}
            <div className="space-y-3 flex-1 overflow-y-auto max-h-[380px] pr-1.5 custom-scrollbar">
              {feedItems.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl bg-slate-50 hover:bg-emerald-50/50 border border-slate-200/60 flex items-start gap-3 transition-all duration-200 hover:scale-[1.01]"
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shrink-0 shadow-xs ${getAvatarBg(
                      item.badgeType
                    )}`}
                  >
                    {item.initials}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-xs font-bold text-slate-900 truncate">
                        {item.name}
                      </span>
                      <span className="text-[11px] text-slate-500 shrink-0">
                        {item.timeAgo}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 truncate mt-0.5">
                      {item.institution}
                    </p>

                    <div className="mt-1.5 text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{item.badge}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Action Button */}
            <div className="pt-5 mt-auto">
              <button
                onClick={onOpenPetition}
                className="w-full py-3 rounded-xl bg-surface-container text-primary hover:bg-primary hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-2 border border-slate-200 shadow-xs active:scale-95"
              >
                <FileEdit className="w-4 h-4" />
                <span>Tambahkan Tanda Tangan Anda</span>
              </button>
            </div>
          </div>

          {/* Right 7 Cols: Callout Banner - Ajukan Draf Advokasi */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-gradient-to-br from-[#004532] via-[#065f46] to-[#002e21] text-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden border border-emerald-700/50">
            {/* Background Decorative Motif */}
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-8 translate-y-8">
              <svg fill="currentColor" height="340" viewBox="0 0 200 200" width="340">
                <polygon points="100,10 120,70 185,70 135,110 155,170 100,135 45,170 65,110 15,70 80,70" />
              </svg>
            </div>

            <div className="relative z-10 space-y-5 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-extrabold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                Kanal Terbuka Santri Think-Tank
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-snug">
                Punya Draf Kajian atau Isu Kebijakan Daerah? Ajukan ke Meja Kastrat FOSDI.
              </h3>

              <p className="font-serif text-sm sm:text-base text-emerald-100/90 leading-relaxed">
                Biro Kajian Strategis & Advokasi FOSDI menyediakan pendampingan metodologis, anotasi fiqh siyasah, serta jalur advokasi resmi ke kementerian dan parlemen bagi naskah kebijakan santri dari seluruh penjuru nusantara.
              </p>

              {/* 4 Pillars of Assistance */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-emerald-100 font-medium bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-700/30">
                  <CheckCheck className="w-4 h-4 text-secondary-fixed shrink-0" />
                  <span>Peer-Review Dewan Pakar</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-emerald-100 font-medium bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-700/30">
                  <Radio className="w-4 h-4 text-secondary-fixed shrink-0" />
                  <span>Amplifikasi Rilis Media Nasional</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-emerald-100 font-medium bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-700/30">
                  <BookMarked className="w-4 h-4 text-secondary-fixed shrink-0" />
                  <span>Registrasi ISBN / DOAJ Publikasi</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-emerald-100 font-medium bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-700/30">
                  <Users className="w-4 h-4 text-secondary-fixed shrink-0" />
                  <span>Kawal Audiensi Baleg & Pemda</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="relative z-10 pt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenSubmitDraft}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-fixed-dim text-xs sm:text-sm font-extrabold transition-all shadow-md active:scale-95"
              >
                <Upload className="w-4 h-4" />
                <span>Kirimkan Draf Kebijakan</span>
              </button>

              <button
                onClick={onDownloadGuideline}
                className="inline-flex items-center gap-1.5 text-primary-fixed hover:text-white text-xs font-semibold transition-colors hover:underline"
              >
                <span>Unduh Panduan Penulisan Policy Brief</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
