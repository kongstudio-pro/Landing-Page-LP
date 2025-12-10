# 🔧 Development Tasks & Setup Guide

[![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?logo=postgresql&logoColor=white)](https://www.postgresql.org/)

Dokumen ini berisi daftar tugas pengembangan serta instruksi singkat untuk menjalankan proyek dan integrasi Prisma ORM dengan PostgreSQL.

---

## **Task 1 — Perapihan Struktur & Tampilan Landing Page**
- Menata kembali seluruh komponen di `src/sections/`.
- Melengkapi dengan aset ( gambar ) yang sesuai.
- Memastikan layout pada seluruh section tampil dengan benar.

---

## **Task 2 — Integrasi Prisma ORM & Implementasi Login Dasar**
- Instalasi dan konfigurasi Prisma ORM.
- Penyambungan ke database PostgreSQL melalui `.env`.
- Pembuatan schema dasar (`User`) untuk kebutuhan login sederhana.
- Isi dengan menggunakan 2 user saja
- Implementasi halaman login yang melakukan validasi dasar menggunakan Prisma Client.

- **Tidak perlu membuat halaman dashbord akun cukup form login sederhana saja**

---

# ⚙️ Setup & Installation

## **1. Install Dependencies**
```bash
npm install
```

## **2. Install & Inisialisasi Prisma**
```bash
npm install prisma --save-dev
npm install @prisma/client
npx prisma init
```

## **3. Generate & Push Schema ke Database**
```bash
npx prisma generate
npx prisma db push
```

## **4. (Opsional) Cek Database dengan Prisma Studio**
```bash
npx prisma studio
```

## **5. Jalankan Development Server**
```bash
npm run dev
```

Akses melalui browser:
```
http://localhost:3000
```
