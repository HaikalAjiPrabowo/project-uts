import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  books: any[] = [];
  totalQuiz: string = '0';
  highScore: string = '0';
  progress: string = '0';

  constructor(
    private bookService: BookService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

  ionViewWillEnter() {
    this.totalQuiz = localStorage.getItem('quizCount') || '0';
    this.highScore = localStorage.getItem('highScore') || '0';
    this.progress = localStorage.getItem('userProgress') || '0';
    this.books = this.bookService.getBooks();
  }

  goToDetail(id: number) {
    this.router.navigate(['/book-detail', id]);
  }

  // ✅ Fungsi Quiz Campuran (Khusus materi Web)
  goToGeneralQuiz() {
    const allBooks = this.bookService.getBooks();
    let allQuestions: any[] = [];

    allBooks.forEach((book: any) => {
      if (book.questions && book.questions.length > 0) {
        // Menggabungkan soal-soal HTML, CSS, dan JS jadi satu
        allQuestions = [...allQuestions, ...book.questions];
      }
    });

    if (allQuestions.length > 0) {
      // Mengacak urutan soal supaya tidak bosan
      allQuestions.sort(() => Math.random() - 0.5);

      this.router.navigate(['/quiz'], {
        state: { questions: allQuestions }
      });
    } else {
      alert("Belum ada soal tersedia!");
    }
  }

  goToPlayground() {
    this.router.navigate(['/playground']);
  }

  goToList(category: string) {
    // Navigasi ke halaman list-materi sambil membawa info kategori
    this.router.navigate(['/list-materi'], { 
      queryParams: { cat: category } 
    });
  }
}