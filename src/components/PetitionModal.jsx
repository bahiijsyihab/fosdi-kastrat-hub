import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, CheckCheck } from 'lucide-react';

export default function PetitionModal({ isOpen, onClose, onSignSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    email: '',
    category: 'Santri Aktif',
    agree: false,
  });
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.institution || !formData.email || !formData.agree) {
      alert('Mohon lengkapi seluruh formulir dan centang persetujuan mosi.');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      onSignSuccess({
        name: formData.name.trim(),
        institution: formData.institution.trim(),
        email: formData.email.trim(),
        category: formData.category,
      });
      setSubmitting(false);
      onClose();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div 
        className="bg-white max-w-lg w-full rounded-2xl shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-primary text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-6 h-6 text-secondary-fixed" />
            <div>
              <h4 className="text-base font-bold leading-tight">
                Tanda Tangani Mosi Sikap FOSDI
              </h4>
              <p className="text-[11px] text-emerald-200">
                Dok. No: KASTRAT-FOSDI/SKP-09/2025
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <p className="text-xs text-slate-600 font-serif leading-relaxed">
            Dukungan Anda akan digabungkan dalam lampiran resmi petisi kepada Badan Anggaran DPR RI & Menteri Agama RI.
          </p>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 block">
              Nama Lengkap & Gelar *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Contoh: Gus Hilman Wajdi, M.H."
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2 text-xs text-slate-800 focus:outline-none focus:border-secondary-fixed focus:bg-white focus:ring-1 focus:ring-emerald-500"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 block">
              Afiliasi Pesantren / Kampus / Ormas *
            </label>
            <input
              type="text"
              required
              value={formData.institution}
              onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
              placeholder="Contoh: PP Tebuireng Jombang / UIN Syarif Hidayatullah"
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2 text-xs text-slate-800 focus:outline-none focus:border-secondary-fixed focus:bg-white focus:ring-1 focus:ring-emerald-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-800 block">
                Email Aktif (Verifikasi) *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="nama@domain.id"
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2 text-xs text-slate-800 focus:outline-none focus:border-secondary-fixed focus:bg-white focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-800 block">
                Kategori Identitas
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-secondary-fixed focus:bg-white"
              >
                <option value="Santri Aktif">Santri Aktif (Salaf / Modern)</option>
                <option value="Asatidz / Pengasuh">Asatidz / Pengasuh Pondok</option>
                <option value="Mahasiswa / BEM">Mahasiswa / BEM Pesantren</option>
                <option value="Akademisi / Peneliti">Akademisi / Peneliti Fiqh Siyasah</option>
                <option value="Alumni Pesantren">Alumni Pesantren & Simpatisan</option>
              </select>
            </div>
          </div>

          <div className="flex items-start gap-2.5 pt-2">
            <input
              type="checkbox"
              id="signer-agree"
              required
              checked={formData.agree}
              onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
              className="mt-0.5 rounded text-primary focus:ring-emerald-500 w-4 h-4"
            />
            <label htmlFor="signer-agree" className="text-[11px] text-slate-600 font-serif leading-tight">
              Saya menyetujui nama dan afiliasi saya dicantumkan dalam daftar pendukung Naskah Sikap Resmi Dana Abadi Pesantren FOSDI 2025 yang diajukan ke Parlemen.
            </label>
          </div>

          <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="px-5 py-2.5 rounded-lg bg-[#804300] text-white text-xs font-bold shadow-md hover:bg-[#5e3000] transition-colors flex items-center gap-1.5 active:scale-95 disabled:opacity-50"
            >
              <CheckCheck className="w-4 h-4" />
              <span>{submitting ? 'Memproses...' : 'Kirimkan Pengesahan'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
