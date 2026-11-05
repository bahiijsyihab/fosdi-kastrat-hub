import React, { useState } from 'react';
import { X, Upload, CheckCircle2, FileText, Send, Sparkles } from 'lucide-react';

export default function SubmitDraftModal({ isOpen, onClose, onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    institution: '',
    email: '',
    category: 'Kebijakan Nasional & Regulasi',
    summary: '',
    fileAttached: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.author || !formData.summary) {
      alert('Mohon isi judul kajian, nama pengusul, dan ringkasan usulan kebijakan.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSubmitSuccess(formData);
      onClose();
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div 
        className="bg-white max-w-xl w-full rounded-2xl shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-emerald-800 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-6 h-6 text-secondary-fixed" />
            <div>
              <h4 className="text-base font-bold">Ajukan Draf Riset / Isu Daerah</h4>
              <p className="text-[11px] text-emerald-200">Meja Advokasi Kebijakan & Kajian Strategis FOSDI</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 block">
              Judul Gagasan / Draf Kebijakan *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Contoh: Advokasi Perda Dana Abadi Pesantren di Kabupaten X"
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2 text-xs text-slate-800 focus:outline-none focus:border-secondary-fixed focus:bg-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-800 block">
                Nama Pengusul / Koordinator *
              </label>
              <input
                type="text"
                required
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                placeholder="Nama Lengkap"
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2 text-xs text-slate-800 focus:outline-none focus:border-secondary-fixed focus:bg-white"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-800 block">
                Afiliasi Pondok / Kampus / BEM
              </label>
              <input
                type="text"
                value={formData.institution}
                onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                placeholder="Contoh: PP Sidogiri / IPNU Jatim"
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2 text-xs text-slate-800 focus:outline-none focus:border-secondary-fixed focus:bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-800 block">
                Email Kontak Aktif
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="peneliti@santri.or.id"
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2 text-xs text-slate-800 focus:outline-none focus:border-secondary-fixed focus:bg-white"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-800 block">
                Kategori Isu
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-secondary-fixed focus:bg-white"
              >
                <option value="Kebijakan Nasional & Regulasi">Kebijakan Nasional & Regulasi</option>
                <option value="Advokasi Daerah & Cabang">Advokasi Daerah & Cabang</option>
                <option value="Ekonomi & Kemandirian Pesantren">Ekonomi & Kemandirian Pesantren</option>
                <option value="Turats & Fiqh Siyasah">Turats & Fiqh Siyasah</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 block">
              Ringkasan Isu & Pokok Argumentasi *
            </label>
            <textarea
              rows={4}
              required
              value={formData.summary}
              onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
              placeholder="Uraikan problem yuridis, data empiris di lapangan, dan rekomendasi awal yang diajukan..."
              className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs text-slate-800 focus:outline-none focus:border-secondary-fixed focus:bg-white"
            />
          </div>

          {/* Fake File Upload Dropzone */}
          <div 
            onClick={() => setFormData({ ...formData, fileAttached: !formData.fileAttached })}
            className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-colors ${
              formData.fileAttached 
                ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                : 'border-slate-300 hover:border-emerald-400 bg-slate-50 text-slate-600'
            }`}
          >
            <Upload className="w-6 h-6 mx-auto mb-1 text-emerald-700" />
            <p className="text-xs font-semibold">
              {formData.fileAttached 
                ? 'Dokumen draft-kebijakan-santri.docx berhasil dilampirkan (Klik untuk lepas)'
                : 'Unggah Berkas Naskah (PDF, Word max 15MB) - Opsional'}
            </p>
            <span className="text-[10px] text-slate-400">Dapat disusulkan pada tahapan mentoring</span>
          </div>

          <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2.5 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold shadow-md transition-colors flex items-center gap-2 active:scale-95 disabled:opacity-50"
            >
              <Send className="w-4 h-4 text-secondary-fixed" />
              <span>{isSubmitting ? 'Mengirimkan...' : 'Kirim ke Meja Pakar'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
