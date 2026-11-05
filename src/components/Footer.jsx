import React from 'react';
import { 
  Scale, 
  LockKeyholeOpen, 
  FileText, 
  Gavel, 
  UserCheck, 
  BookOpen, 
  MessageSquare, 
  Share2, 
  Camera, 
  Megaphone,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="w-full bg-surface-container-low border-t border-slate-200 mt-12 sm:mt-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-secondary-fixed shadow-xs">
                <Scale className="w-5 h-5 text-secondary-fixed" />
              </div>
              <span className="text-xl font-extrabold text-primary tracking-tight">
                FOSDI Kastrat Hub
              </span>
            </div>

            <p className="font-serif text-xs sm:text-sm text-on-surface-variant max-w-sm leading-relaxed">
              Lembaga Kajian Strategis & Advokasi Kebijakan Forum Santri Edukatif Indonesia. Mengintegrasikan otoritas turats pesantren dengan metodologi think-tank modern untuk mengawal kebijakan publik nasional yang adil dan bermaslahat.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-container rounded-lg text-xs font-semibold text-secondary border border-slate-200/80">
              <LockKeyholeOpen className="w-4 h-4 text-emerald-700" />
              <span>Publikasi Terverifikasi & Terbuka (Open Access)</span>
            </div>
          </div>

          {/* Col 2: Sekretariat Pusat (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
              Sekretariat Pusat
            </h3>
            <address className="not-italic text-xs text-on-surface-variant space-y-2 font-serif">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  Gedung Riset & Advokasi Santri FOSDI<br />
                  Kawasan Percetakan Negara No. 42, Cempaka Putih<br />
                  Jakarta Pusat, DKI Jakarta 10570
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1 font-sans text-xs text-primary font-medium">
                <Mail className="w-3.5 h-3.5" />
                <span>surel: kastrat@santrifosdi.or.id</span>
              </div>
              <div className="flex items-center gap-2 font-sans text-xs text-slate-600">
                <Phone className="w-3.5 h-3.5" />
                <span>telepon: (021) 4288-7109</span>
              </div>
            </address>
          </div>

          {/* Col 3: Kanal Advokasi (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
              Kanal Advokasi
            </h3>
            <ul className="text-xs text-on-surface-variant space-y-2.5 font-medium">
              <li>
                <button 
                  onClick={() => onNavigate('kajian-strategis')}
                  className="hover:text-primary transition-colors flex items-center gap-1.5 hover:underline"
                >
                  <FileText className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Naskah Terbitan</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('kajian-strategis')}
                  className="hover:text-primary transition-colors flex items-center gap-1.5 hover:underline"
                >
                  <Gavel className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Tracker Legislasi</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('pernyataan-sikap-&-petisi')}
                  className="hover:text-primary transition-colors flex items-center gap-1.5 hover:underline"
                >
                  <UserCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Kawal Petisi Publik</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('tentang-fosdi')}
                  className="hover:text-primary transition-colors flex items-center gap-1.5 hover:underline"
                >
                  <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Indeks Fiqh Kebijakan</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Jejaring Media & Komunikasi (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
              Jejaring & Media Komunikasi
            </h3>
            <p className="text-xs text-on-surface-variant font-serif leading-relaxed">
              Dapatkan rilis kilat pernyataan sikap, policy brief berkala, serta agenda rapat dengar pendapat langsung melalui kanal resmi kami.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href="#wa-channel"
                aria-label="WhatsApp Channel FOSDI"
                className="w-9 h-9 rounded-lg bg-surface-container-high hover:bg-primary hover:text-white flex items-center justify-center text-slate-700 transition-colors border border-slate-200"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="#x-channel"
                aria-label="Kanal Informasi X"
                className="w-9 h-9 rounded-lg bg-surface-container-high hover:bg-primary hover:text-white flex items-center justify-center text-slate-700 transition-colors border border-slate-200"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="#instagram"
                aria-label="Media Dokumentasi Instagram"
                className="w-9 h-9 rounded-lg bg-surface-container-high hover:bg-primary hover:text-white flex items-center justify-center text-slate-700 transition-colors border border-slate-200"
              >
                <Camera className="w-4 h-4" />
              </a>
              <a
                href="#broadcast"
                aria-label="Kanal Notifikasi Siaran"
                className="w-9 h-9 rounded-lg bg-surface-container-high hover:bg-primary hover:text-white flex items-center justify-center text-slate-700 transition-colors border border-slate-200"
              >
                <Megaphone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Principles */}
        <div className="pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-3 text-on-surface-variant text-xs">
          <div className="text-center md:text-left">
            © 2025 Dewan Pimpinan Pusat FOSDI — Biro Kajian Strategis & Advokasi Kebijakan Publik. Seluruh materi bersertifikasi Open-Access demi kemaslahatan umum.
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <a href="#etika" className="hover:text-primary transition-colors">Etika & Metodologi Riset</a>
            <span className="text-slate-300">•</span>
            <a href="#transparansi" className="hover:text-primary transition-colors">Transparansi Publik</a>
            <span className="text-slate-300">•</span>
            <a href="#pedoman" className="hover:text-primary transition-colors">Pedoman Turats & Siyasah</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
