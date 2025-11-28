# FreeCodeCamp - Dokumentasi Proyek

Repository ini berisi kumpulan proyek dan latihan dari FreeCodeCamp yang mencakup pembelajaran Back-End Development dan Daily Coding Challenges.

## 📁 Struktur Direktori

```
freecodecamp/
├── Back-End-Development-and-APIs-V8-courses/
│   ├── Back-End-Development-and-APIs Projects/
│   └── MongoDB-and-Mongoose/
└── daily-coding-challage/
    ├── javascript/
    └── python/
```

---

## 🔧 Back-End Development and APIs V8 Courses

Direktori ini berisi proyek-proyek dari kursus Back-End Development and APIs dari FreeCodeCamp.

### Proyek-Proyek (Back-End Development and APIs Projects)

Berisi 5 microservices yang dibangun menggunakan **Node.js** dan **Express.js**:

#### 1. **Timestamp Microservice**
- **Tujuan**: Membuat API untuk mengkonversi timestamp
- **Tech Stack**: Node.js, Express.js, CORS
- **Struktur**:
  - `index.js` - Entry point aplikasi
  - `package.json` - Dependencies management
  - `public/` - Static files
  - `views/` - Template files
  - `sample.env` - Environment variables template

#### 2. **Request Header Parser Microservice**
- **Tujuan**: Parsing informasi dari request headers (IP address, language, software)
- **Tech Stack**: Node.js, Express.js, CORS
- **Struktur**: Sama dengan Timestamp Microservice

#### 3. **URL Shortener Microservice**
- **Tujuan**: Membuat layanan URL shortening
- **Tech Stack**: Node.js, Express.js, CORS
- **Struktur**: Sama dengan proyek microservice lainnya

#### 4. **Exercise Tracker**
- **Tujuan**: API untuk tracking exercise/latihan
- **Tech Stack**: Node.js, Express.js, CORS
- **Struktur**: Sama dengan proyek microservice lainnya

#### 5. **File Metadata Microservice**
- **Tujuan**: Upload file dan mendapatkan metadata (name, type, size)
- **Tech Stack**: Node.js, Express.js, CORS
- **Struktur**: Sama dengan proyek microservice lainnya

### MongoDB and Mongoose

Direktori untuk pembelajaran MongoDB dan Mongoose (saat ini kosong, sedang dalam pengembangan).

---

## 💻 Daily Coding Challenge

Direktori ini berisi solusi dari tantangan coding harian FreeCodeCamp dalam dua bahasa pemrograman.

### Struktur:
```
daily-coding-challage/
├── javascript/
│   ├── November-2025/
│   │   ├── 12-Email-Signature-Generator.js
│   │   └── 27-what's-my-age-again.js
│   └── Desember-2025/
└── python/
    ├── November-2025/
    │   ├── 12-Email-Signature-Generator.py
    │   └── 27-what's-my-age-again.py
    └── Desember-2025/
```

### Contoh Challenge:

#### **Email Signature Generator** (12 November 2025)
- **Link**: [FreeCodeCamp Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-12)
- **Deskripsi**: Membuat function untuk generate signature email berdasarkan nama, title, dan company
- **Implementasi**: JavaScript & Python
- **Logika**: 
  - Karakter pertama 'a-i' → prefix `>>`
  - Karakter pertama 'j-r' → prefix `--`
  - Karakter pertama 's-z' → prefix `::`

#### **What's My Age Again** (27 November 2025)
- **Deskripsi**: Challenge untuk menghitung umur
- **Implementasi**: JavaScript & Python

---

## 🚀 Cara Menjalankan Proyek

### Microservices (Node.js Projects)

1. Masuk ke direktori proyek yang diinginkan:
   ```bash
   cd Back-End-Development-and-APIs-V8-courses/Back-End-Development-and-APIs\ Projects/[nama-proyek]
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Jalankan aplikasi:
   ```bash
   npm start
   ```

4. Aplikasi akan berjalan di `http://localhost:3000` (atau port yang ditentukan)

### Daily Coding Challenges

#### JavaScript:
```bash
node daily-coding-challage/javascript/[bulan-tahun]/[nama-file].js
```

#### Python:
```bash
python daily-coding-challage/python/[bulan-tahun]/[nama-file].py
```

---

## 📚 Teknologi yang Digunakan

- **Backend Framework**: Express.js
- **Runtime**: Node.js
- **Package Manager**: npm
- **Languages**: JavaScript, Python
- **Libraries**: CORS

---

## 📝 Catatan

- File `.env` tidak disertakan dalam repository untuk keamanan (gunakan `sample.env` sebagai template)
- `node_modules/` tidak di-track oleh git
- Setiap proyek microservice memiliki struktur yang konsisten untuk mempermudah maintenance

---

## 🎯 Tujuan Pembelajaran

Repository ini dibuat untuk:
- ✅ Mempelajari Back-End Development menggunakan Node.js dan Express.js
- ✅ Memahami konsep REST API dan Microservices
- ✅ Meningkatkan kemampuan problem solving melalui daily coding challenges
- ✅ Praktek menggunakan berbagai bahasa pemrograman (JavaScript & Python)
- ✅ Memahami MongoDB dan Mongoose (dalam progress)

---

## 📖 Referensi

- [FreeCodeCamp - Back End Development and APIs](https://www.freecodecamp.org/learn/back-end-development-and-apis/)
- [FreeCodeCamp - Daily Coding Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/)