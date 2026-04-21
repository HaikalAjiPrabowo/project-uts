import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books = [
  // === MATERI HTML (ID 100-an) ===
  {
    id: 101,
    category: 'HTML',
    title: 'Pengenalan HTML',
    subtitle: 'Langkah awal belajar web',
    content: 'HTML (HyperText Markup Language) adalah bahasa standar untuk membuat struktur halaman web. Tanpa HTML, website tidak akan memiliki pondasi.',
    examples: [{ label: 'Struktur Dasar', code: `<!DOCTYPE html>\n<html>\n<body>\n  <h1>Halo Dunia</h1>\n</body>\n</html>` }],
    questions: [{ question: 'Singkatan HTML?', options: ['HyperText Markup Language', 'HighTech...'], answer: 0 }]
  },
  {
    id: 102,
    category: 'HTML',
    title: 'Tag Paragraf',
    subtitle: 'Menulis teks di web',
    content: 'Tag <p> digunakan untuk mendefinisikan sebuah paragraf. Browser secara otomatis menambahkan ruang kosong (margin) sebelum dan sesudah elemen <p>.',
    examples: [{ label: 'Contoh Paragraf', code: `<p>Ini adalah paragraf pertama.</p>\n<p>Ini adalah paragraf kedua.</p>` }],
    questions: [{ question: 'Tag untuk paragraf?', options: ['<p>', '<b>', '<i>'], answer: 0 }]
  },
  {
    id: 103,
    category: 'HTML',
    title: 'Heading (Judul)',
    subtitle: 'Membuat judul artikel',
    content: 'Heading didefinisikan dengan tag <h1> sampai <h6>. <h1> mendefinisikan heading paling penting, <h6> yang paling tidak penting.',
    examples: [{ label: 'Jenis Heading', code: `<h1>Judul Besar</h1>\n<h2>Judul Sedang</h2>` }],
    questions: [{ question: 'Tag judul terbesar?', options: ['<h6>', '<h1>'], answer: 1 }]
  },
  {
    id: 104,
    category: 'HTML',
    title: 'List (Daftar)',
    subtitle: 'Membuat daftar',
    content: 'Tag <ul> mendefinisikan daftar yang tidak terurut, sedangkan tag <ol> mendefinisikan daftar yang terurut.',
    examples: [{ label: 'Daftar Bulan', code: `<ul>\n  <li>Januari</li>\n  <li>Februari</li>\n  <li>Maret</li>\n</ul>` }],
    questions: [{ question: 'Tag daftar terurut?', options: ['<ul>', '<ol>'], answer: 1 }]
  },
  {
    id: 105,
    category: 'HTML',
    title: 'Link (Tautan)',
    subtitle: 'Membuat tautan',
    content: 'Tag <a> mendefinisikan tautan. Tautan digunakan untuk menghubungkan halaman web ke halaman lain.',
    examples: [{ label: 'Tautan ke Google', code: `<a href="https://www.google.com">Google</a>` }],
    questions: [{ question: 'Tag tautan?', options: ['<a>', '<link>'], answer: 0 }]
  },
  {
    id: 106,
    category: 'HTML',
    title: 'Image (Gambar)',
    subtitle: 'Membuat gambar',
    content: 'Tag <img> mendefinisikan gambar. Gambar digunakan untuk menampilkan gambar di halaman web.',
    examples: [{ label: 'Gambar', code: `<img src="https://via.placeholder.com/150" alt="Placeholder Gambar">` }],
    questions: [{ question: 'Tag gambar?', options: ['<img>', '<image>'], answer: 0 }]
  },
  {
    id: 107,
    category: 'HTML',
    title: 'Form (Formulir)',
    subtitle: 'Membuat formulir',
    content: 'Tag <form> mendefinisikan formulir. Formulir digunakan untuk mengumpulkan data dari pengguna.',
    examples: [{ label: 'Formulir', code: `<form>\n  <label for="name">Nama:</label>\n  <input type="text" id="name" name="name">\n</form>` }],
    questions: [{ question: 'Tag formulir?', options: ['<form>', '<formulir>'], answer: 0 }]
  },
  

  // === MATERI CSS (ID 200-an) ===
  {
    id: 201,
    category: 'CSS',
    title: 'Pengenalan CSS',
    subtitle: 'Menghias website kamu',
    content: 'CSS adalah bahasa yang kita gunakan untuk menata halaman web. Dengan CSS, kita bisa mengatur warna, font, hingga layout.',
    examples: [{ label: 'Selector Warna', code: `h1 {\n  color: blue;\n}` }],
    questions: [{ question: 'Fungsi CSS?', options: ['Struktur', 'Tampilan/Gaya'], answer: 1 }]
  },
  {
    id: 202,
    category: 'CSS',
    title: 'Warna (Colors)',
    subtitle: 'Bermain dengan warna',
    content: 'Warna di CSS bisa menggunakan nama (red), Hex (#ff0000), atau RGB (rgb(255,0,0)).',
    examples: [{ label: 'Background Color', code: `body {\n  background-color: lightblue;\n}` }],
    questions: [{ question: 'Properti warna teks?', options: ['color', 'text-style'], answer: 0 }]
  },
  {
    id: 203,
    category: 'CSS',
    title: 'Font (Typography)',
    subtitle: 'Mengatur font',
    content: 'Font di CSS bisa menggunakan nama (Arial), Hex (#ff0000), atau RGB (rgb(255,0,0)).',
    examples: [{ label: 'Font Family', code: `body {\n  font-family: "Arial", sans-serif;\n}` }],
    questions: [{ question: 'Properti font teks?', options: ['font-family', 'font-style'], answer: 0 }]
  },
  {
    id: 204,
    category: 'CSS',
    title: 'Layout (Layout)',
    subtitle: 'Mengatur layout',
    content: 'Layout di CSS bisa menggunakan properti seperti margin, padding, dan display.',
    examples: [{ label: 'Margin', code: `body {\n  margin: 0;\n}` }],
    questions: [{ question: 'Properti layout?', options: ['margin', 'padding'], answer: 0 }]
  },


  // === MATERI JS (ID 300-an) ===
  {
    id: 301,
    category: 'JS',
    title: 'Pengenalan JS',
    subtitle: 'Membuat web interaktif',
    content: 'JavaScript adalah bahasa pemrograman yang digunakan untuk memberikan logika pada website, seperti klik tombol atau popup.',
    examples: [{ label: 'Alert Box', code: `alert("Halo dari JS!");` }],
    questions: [{ question: 'Fungsi alert()?', options: ['Popup pesan', 'Cetak kertas'], answer: 0 }]
  },
  {
    id: 302,
    category: 'JS',
    title: 'Variabel (Variables)',
    subtitle: 'Mengatur variabel',
    content: 'Variabel di JavaScript digunakan untuk menyimpan nilai yang dapat digunakan dalam program.',
    examples: [{ label: 'Variabel', code: `let name = "John";` }],
    questions: [{ question: 'Fungsi let?', options: ['Variabel', 'Fungsi'], answer: 0 }]
  },
  {
    id: 303,
    category: 'JS',
    title: 'Fungsi (Functions)',
    subtitle: 'Membuat fungsi',
    content: 'Fungsi di JavaScript digunakan untuk membuat blok kode yang dapat digunakan berulang kali.',
    examples: [{ label: 'Fungsi', code: `function greet(name) {\n  console.log("Hello, " + name);\n}` }],
    questions: [{ question: 'Fungsi function()?', options: ['Variabel', 'Fungsi'], answer: 1 }]
  },
  {
    id: 304,
    category: 'JS',
    title: 'Perulangan (Loops)',
    subtitle: 'Mengatur perulangan',
    content: 'Perulangan di JavaScript digunakan untuk melakukan operasi berulang kali.',
    examples: [{ label: 'Perulangan', code: `for (let i = 0; i < 5; i++) {\n  console.log(i);\n}` }],
    questions: [{ question: 'Fungsi for()?', options: ['Variabel', 'Fungsi'], answer: 1 }]
  },
  {
    id: 305,
    category: 'JS',
    title: 'Array (Arrays)',
    subtitle: 'Mengatur array',
    content: 'Array di JavaScript digunakan untuk menyimpan koleksi data.',
    examples: [{ label: 'Array', code: `let fruits = ["apple", "banana", "cherry"];` }],
    questions: [{ question: 'Fungsi let?', options: ['Variabel', 'Fungsi'], answer: 0 }]
  }
];

  constructor() {}

  getBooks() { return this.books; }

  // Fungsi baru: Ambil materi berdasarkan kategori (HTML/CSS/JS)
  getBooksByCategory(cat: string) {
    return this.books.filter(b => b.category === cat);
  }

  getBook(id: number) {
    return this.books.find((book) => book.id === id);
  }
}