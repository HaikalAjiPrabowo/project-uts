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

  // ✅ Tambahkan variabel ini untuk melacak status ikon
  isDarkMode: boolean = false;

  constructor(
    private bookService: BookService,
    private router: Router,
  ) {
    // Cek tema saat pertama kali load
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    document.body.classList.toggle('dark', this.isDarkMode);
  }

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

  ionViewWillEnter() {
    this.totalQuiz = localStorage.getItem('quizCount') || '0';
    this.highScore = localStorage.getItem('highScore') || '0';
    this.progress = localStorage.getItem('userProgress') || '0';
    this.books = this.bookService.getBooks();
  }

  // ✅ Fungsi Toggle dengan Ikon yang lebih rapi
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark', this.isDarkMode);
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  // --- Fungsi Navigasi ---
  goToDetail(id: number) {
    this.router.navigate(['/book-detail', id]);
  }

  goToList(category: string) {
    this.router.navigate(['/list-materi'], { 
      queryParams: { cat: category } 
    });
  }

  goToGeneralQuiz() {
    const allBooks = this.bookService.getBooks();
    let allQuestions: any[] = [];
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
      alert("Belum ada soal tersedia!");
    }
  }

  goToPlayground() {
    this.router.navigate(['/playground']);
  }
}