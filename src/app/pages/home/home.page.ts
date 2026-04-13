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

  goToGeneralQuiz() {
    const allBooks = this.bookService.getBooks();
    let allQuestions: any[] = [];

    // Menggabungkan semua soal dari semua materi
    allBooks.forEach((book: any) => {
      if (book.questions && book.questions.length > 0) {
        allQuestions = [...allQuestions, ...book.questions];
      }
    });

    if (allQuestions.length > 0) {
      allQuestions.sort(() => Math.random() - 0.5);
      this.router.navigate(['/quiz'], {
        state: { questions: allQuestions }
      });
    } else {
      alert("Belum ada soal tersedia di materi!");
    }
  }

  goToPlayground() {
    this.router.navigate(['/playground']);
  }
}