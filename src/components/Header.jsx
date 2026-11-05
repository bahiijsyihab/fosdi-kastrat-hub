import React, { useState } from 'react';
import { 
  Search, 
  ShieldCheck, 
  User, 
  ArrowRight, 
  Menu, 
  X, 
  FileText, 
  Gavel, 
  Radio,
  BookOpen,
  Scale
} from 'lucide-react';

export default function Header({ 
  activeNav, 
  setActiveNav, 
  onSearch, 
  searchQuery, 
  onOpenAdminPortal,
  onOpenDataCenter,
  isAdminLoggedIn = false
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const navLinks = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'kajian-strategis', label: 'Kajian Strategis' },
    { id: 'pernyataan-sikap-&-petisi', label: 'Pernyataan Sikap & Petisi' },
    { id: 'tentang-fosdi', label: 'Tentang FOSDI' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-primary-container text-on-primary shadow-[0_4px_20px_rgba(6,95,70,0.15)]">
      {/* Top Notification / Legislative Status Bar */}
      <div className="bg-primary px-4 lg:px-8 py-1.5 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-primary-fixed">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
              <span className="text-xs font-semibold text-on-primary tracking-wide">
                Sistem Monitor Kebijakan Publik & Fiqh Siyasah Pesantren
              </span>
            </div>
            <span className="text-white/30">|</span>
            <span className="text-primary-fixed-dim text-[11px]">
              Terakhir Diperbarui: Sidang Baleg DPR RI & Advokasi RUU Pesantren
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="inline-flex items-center gap-1.5 bg-tertiary-container/80 text-tertiary-fixed px-2.5 py-0.5 rounded-full text-[11px] font-bold border border-tertiary-fixed-dim/30">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim animate-ping"></span>
              Advokasi Aktif: 4 Isu Nasional Dikawal
            </div>

            <button 
              onClick={onOpenDataCenter}
              className="hover:text-white transition-colors flex items-center gap-1 text-[11px] font-semibold text-primary-fixed-dim hover:underline"
            >
              Pusat Data Dokumen
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="h-20 max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-6">
          <div 
            onClick={() => setActiveNav('beranda')}
            className="flex items-center gap-3 cursor-pointer group focus:outline-none select-none"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-800/90 border border-secondary-fixed/30 flex items-center justify-center text-secondary-fixed shadow-inner group-hover:scale-105 transition-transform">
              <Scale className="w-5 h-5 text-secondary-fixed" />
            </div>

            <div className="flex flex-col text-left">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-on-primary">
                  FOSDI
                </span>
                <span className="bg-secondary-fixed text-on-secondary-fixed text-[10px] uppercase px-1.5 py-0.5 rounded font-extrabold tracking-wider">
                  Kastrat
                </span>
              </div>
              <span className="text-xs text-primary-fixed-dim font-medium tracking-normal">
                Kastrat Hub · Advokasi & Kebijakan
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-6 h-20">
            {navLinks.map((link) => {
              const isActive = activeNav === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => setActiveNav(link.id)}
                  className={`h-full flex items-center text-xs uppercase tracking-wider font-semibold transition-all px-1 border-b-2 ${
                    isActive
                      ? 'text-secondary-fixed border-secondary-fixed font-bold'
                      : 'text-primary-fixed border-transparent hover:text-secondary-fixed hover:border-secondary-fixed/40'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Global Controls: Search & Portal Admin */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Quick Search */}
          <div className="hidden lg:flex items-center relative w-64 xl:w-72">
            <Search className="w-4 h-4 absolute left-3 text-primary-fixed-dim/80 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Cari isu kebijakan, UU, fatwa..."
              className="w-full bg-primary/70 text-on-primary placeholder:text-primary-fixed-dim/60 text-xs pl-9 pr-3 py-2 rounded-md border border-primary-fixed-dim/30 focus:outline-none focus:border-secondary-fixed focus:bg-primary transition-all"
            />
          </div>

          {/* Admin Portal Action */}
          <button
            onClick={onOpenAdminPortal}
            className={`hidden sm:inline-flex items-center gap-2 text-xs px-3.5 py-2 rounded-md font-bold transition-all shadow-sm active:scale-95 ${
              isAdminLoggedIn
                ? 'bg-emerald-300 text-emerald-950 ring-2 ring-emerald-400'
                : 'bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-fixed-dim'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{isAdminLoggedIn ? 'Meja Internal (Login)' : 'Portal Admin Kastrat'}</span>
            {isAdminLoggedIn && (
              <span className="w-2 h-2 rounded-full bg-emerald-700 animate-pulse"></span>
            )}
          </button>

          {/* User Profile Avatar with dropdown */}
          <div className="relative">
            <button 
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              className="w-9 h-9 rounded-full bg-primary flex items-center justify-center ring-2 ring-primary-fixed-dim/40 hover:ring-secondary-fixed transition-all text-on-primary"
              aria-label="Profil Akun"
            >
              <User className="w-4 h-4" />
            </button>

            {userDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-md bg-white text-slate-800 shadow-xl border border-slate-200 py-2 z-50 text-xs">
                <div className="px-4 py-2 border-b border-slate-100">
                  <p className="font-bold text-slate-900">Gus Peneliti Siyasah</p>
                  <p className="text-[11px] text-slate-500">Biro Kastrat FOSDI Pusat</p>
                </div>
                <button 
                  onClick={() => { setUserDropdownOpen(false); setActiveNav('pernyataan-sikap-&-petisi'); }}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 flex items-center gap-2"
                >
                  <FileText className="w-3.5 h-3.5 text-primary" />
                  Mosi yang Saya Dukung
                </button>
                <button 
                  onClick={() => { setUserDropdownOpen(false); onOpenAdminPortal(); }}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 flex items-center gap-2"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Panel Verifikator Sidang
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-md hover:bg-white/10 text-white"
            aria-label="Buka Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-primary-container border-t border-white/10 px-4 py-4 space-y-3">
          <div className="relative w-full mb-3">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-primary-fixed-dim" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Cari isu kebijakan, UU, fatwa..."
              className="w-full bg-primary text-on-primary placeholder:text-primary-fixed-dim/70 text-xs pl-9 pr-3 py-2 rounded border border-primary-fixed-dim/30"
            />
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveNav(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2.5 rounded text-xs uppercase tracking-wider font-semibold ${
                  activeNav === link.id
                    ? 'bg-primary text-secondary-fixed font-bold'
                    : 'text-primary-fixed hover:bg-primary/50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenAdminPortal();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 bg-secondary-fixed text-on-secondary-fixed text-xs py-2.5 rounded font-bold"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Portal Admin Kastrat</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
