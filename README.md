# FOSDI KASTRAT Hub Portal

Portal web organisasi modern-akademik responsive untuk **Biro Kajian Strategis & Advokasi Kebijakan Publik (DPP FOSDI)** — Forum Santri Edukatif Indonesia.

Aplikasi ini dibangun menggunakan **React (Vite)**, **Tailwind CSS**, dan **Lucide React Icons**, dengan mengimplementasikan filosofi desain **"Intelektual Santri Progresif"** sesuai spesifikasi `DESIGN.md` dan `code.html`.

---

## 🏛️ Filosofi Desain & Karakter Visual

- **Otoritas Keilmuan Pesantren (*Turats*):** Tipografi ganda seimbang antara ketegasan institusional (*Plus Jakarta Sans*) dan kehormatan naskah hukum/fiqh (*Source Serif 4*).
- **Rigor Think-Tank & Advokasi Sipil:** Palet *Emerald Forest* (`#004532` & `#065f46`), aksen interaktif *Mint Leaf* (`#6ffbbe`), dan *Urgent Amber* (`#804300`) khusus untuk momentum petisi publik dan peringatan legislasi Senayan.
- **Transparansi & Open-Access:** Repositori naskah akademik, policy brief, dan infografis kebijakan publik yang dapat diakses, dibaca langsung di browser, disitasi, dan diunduh secara gratis.

---

## ✨ Fitur & Komponen Utama

1. **Institutional Header & Ticker Bar:**
   - Status monitor real-time sidang Baleg DPR RI & RUU Pesantren.
   - Indikator advokasi aktif (4 Isu Nasional Dikawal).
   - Pencarian isu kebijakan, UU, dan fatwa.
   - Pintasan langsung ke Portal Admin Kastrat & Profil Peneliti.

2. **Breaking Issue Hero & Live Civic Advocacy Meter:**
   - Naskah Sikap Prioritas: *Tolak Pembatasan Alokasi Anggaran Dana Abadi Pesantren dalam RAPBN*.
   - 3 Butir Konsideran Sikap Eksekutif (Mandat Yuridis UU No. 18/2019, Maqashid Syariah *Hifzh al-Ilm*, dan Ketimpangan Struktural).
   - Pengukur kuorum petisi interaktif (counter tanda tangan, persentase ketercapaian target kuorum DPR RI).
   - Pelacak 4 tahapan legislasi di Senayan (Harmonisasi -> Penyerahan Baleg -> RDPU Komisi VIII -> Paripurna).
   - Ticker penandatangan baru terverifikasi.

3. **Advokasi Impact Ticker:**
   - 18 Naskah Sikap Resmi (Siklus Legislasi 2024).
   - 14.850+ Tanda Tangan Publik.
   - 32 Rekomendasi Kebijakan dalam RDP DPR RI.
   - 100% Akses Terbuka (Open Access).

4. **Repositori Kebijakan & Kajian Strategis:**
   - Filter multikategori: Semua Isu, Kebijakan Nasional & Regulasi, Advokasi Daerah, Ekonomi Syariah.
   - Filter format dokumen: Policy Brief, Naskah Akademik, Rilis Pers, Infografis & Data.
   - Kartu kajian dilengkapi *Dual-Grounding Badges* (basis hukum positif seperti UU Hak Cipta, UU Wakaf, UU PDP vs rujukan Maqashid Syariah).
   - Penampil dokumen naskah lengkap (Whitepaper Reader) dengan generator sitasi ilmiah dan tombol cetak/unduh.

5. **Arus Dukungan Tanda Tangan & Meja Pengajuan Draf:**
   - Feed realtime dukungan santri, asatidz, dan akademisi se-Indonesia.
   - Formulir penandatanganan petisi (Petition Modal) dengan validasi KTA/NIK dan enkripsi integritas SHA-256.
   - Formulir pengajuan draf advokasi daerah ke meja Dewan Pakar FOSDI.

6. **Portal Admin & Verifikator Sidang:**
   - Panel khusus verifikasi KTA santri pendukung petisi.
   - Ekspor rekapitulasi mosi pendukung ke format spreadsheet (CSV/Excel).
   - Kalender jadwal RDPU dan audiensi ke Baleg & Banggar DPR RI.

---

## 🚀 Panduan Menjalankan

Masuk ke direktori proyek:
```bash
cd "C:\Users\user\.gemini\antigravity\scratch\fosdi-kastrat-hub"
```

### 1. Menjalankan Server Pengembangan (Dev)
```bash
npm run dev
```
Akses di browser pada: `http://localhost:5173`

### 2. Membangun Versi Produksi (Build)
```bash
npm run build
```
Hasil build siap rilis akan berada di folder `dist/`.

### 3. Meninjau Hasil Build (Preview)
```bash
npm run preview
```

---

## 📂 Struktur Proyek

```
fosdi-kastrat-hub/
├── index.html                    # Entri HTML utama dengan Google Fonts
├── package.json                  # Konfigurasi dependensi React, Tailwind, Lucide
├── postcss.config.js             # PostCSS plugin Tailwind & Autoprefixer
├── tailwind.config.js            # Token warna & tipografi desain sistem FOSDI
├── vite.config.js                # Konfigurasi bundler Vite
├── src/
│   ├── App.jsx                   # Komponen utama & state management terpadu
│   ├── index.css                 # Layer Tailwind CSS & scrollbar kustom
│   ├── main.jsx                  # Entri render React 18
│   ├── data/
│   │   └── mockData.js           # Data naskah, advokasi, metrik, & feed publik
│   └── components/
│       ├── Header.jsx            # Top ticker, logo FOSDI, nav, & pencarian
│       ├── HeroAdvocacy.jsx      # Banner isu prioritas & meter kuorum Senayan
│       ├── ImpactTicker.jsx      # 4 Kartu KPI capaian advokasi publik
│       ├── ResearchRepository.jsx # Repositori kajian dengan filter kategori & format
│       ├── CitizenFeedAndSubmission.jsx # Feed petisi realtime & callout meja pakar
│       ├── PetitionModal.jsx     # Dialog tanda tangan mosi sikap
│       ├── DocumentViewerModal.jsx # Penampil naskah akademik (whitepaper view)
│       ├── SubmitDraftModal.jsx  # Dialog pengajuan draf kajian daerah
│       ├── AdminPortalModal.jsx  # Portal verifikasi admin kuorum parlemen
│       └── Footer.jsx            # Informasi sekretariat, kanal, & open-access
```
