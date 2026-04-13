import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books = [
    {
      id: 1,
      title: 'JavaScript Dasar',
      description: 'Belajar JavaScript dari nol',
      content: 'JavaScript adalah bahasa pemrograman untuk web.',
      code: `console.log("Hello World");`,
      questions: [
        {
          question: 'Apa fungsi console.log()?',
          options: ['Output Console', 'Styling', 'Database'],
          answer: 0,
        },
      ],
    },
    {
      id: 2,
      title: 'Python Dasar',
      description: 'Belajar Python dari nol',
      content: 'Python adalah bahasa yang mudah dipelajari.',
      code: `print("Hello World")`,
      questions: [
        {
          question: 'Perintah cetak di Python adalah?',
          options: ['echo', 'print()', 'system.out'],
          answer: 1,
        },
      ],
    },
    {
      id: 3,
      title: 'Java Dasar',
      description: 'Belajar Java dari nol',
      content: 'Java adalah bahasa pemrograman untuk desktop.',
      code: `System.out.println("Hello World");`,
      questions: [
        {
          question: 'Apa perintah output di Java?',
          options: ['System.out.println', 'cout', 'print'],
          answer: 0,
        },
      ],
    },
    {
      id: 4,
      title: 'C# Dasar',
      description: 'Belajar C# dari nol',
      content: 'C# adalah bahasa pemrograman modern dari Microsoft.',
      code: `Console.WriteLine("Hello World");`,
      questions: [
        {
          question: 'C# menggunakan perintah apa untuk output?',
          options: ['Console.WriteLine', 'print', 'echo'],
          answer: 0,
        },
      ],
    },
    {
      id: 5,
      title: 'C++ Dasar',
      description: 'Belajar C++ dari nol',
      content: 'C++ adalah bahasa pemrograman tingkat tinggi.',
      code: `cout << "Hello World";`,
      questions: [
        {
          question: 'Simbol output di C++ adalah?',
          options: ['<<', '>>', '=='],
          answer: 0,
        },
      ],
    },
    {
      id: 6,
      title: 'PHP Dasar',
      description: 'Belajar PHP dari nol',
      content: 'PHP adalah bahasa pemrograman server-side.',
      code: `echo "Hello World";`,
      questions: [
        {
          question: 'Keyword output di PHP adalah?',
          options: ['echo', 'print', 'cout'],
          answer: 0,
        },
      ],
    },
    {
      id: 7,
      title: 'HTML Dasar',
      description: 'Belajar HTML dari nol',
      content: 'HTML adalah bahasa markup untuk web.',
      code: `<h1>Hello World</h1>`,
      questions: [
        {
          question: 'Tag h1 digunakan untuk?',
          options: ['Judul Utama', 'Paragraf', 'List'],
          answer: 0,
        },
      ],
    },
    {
      id: 8,
      title: 'CSS Dasar',
      description: 'Belajar CSS dari nol',
      content: 'CSS digunakan untuk styling halaman web.',
      code: `h1 { color: red; }`,
      questions: [
        {
          question: 'Properti CSS untuk warna teks adalah?',
          options: ['color', 'text-color', 'font-style'],
          answer: 0,
        },
      ],
    },
    {
      id: 9,
      title: 'SQL Dasar',
      description: 'Belajar SQL dari nol',
      content: 'SQL digunakan untuk mengelola database.',
      code: `SELECT * FROM users;`,
      questions: [
        {
          question: 'SELECT digunakan untuk?',
          options: ['Ambil data', 'Hapus data', 'Update'],
          answer: 0,
        },
      ],
    },
    {
      id: 10,
      title: 'Rust Dasar',
      description: 'Belajar Rust dari nol',
      content: 'Rust fokus pada keamanan memori.',
      code: `println!("Hello World");`,
      questions: [
        {
          question: 'Ciri khas makro di Rust menggunakan tanda?',
          options: ['!', '?', '@'],
          answer: 0,
        },
      ],
    },
  ];

  constructor() {}

  getBooks() {
    return this.books;
  }

  getBook(id: number) {
    return this.books.find((book) => book.id === id);
  }
}
