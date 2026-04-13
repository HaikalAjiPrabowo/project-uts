import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Question {
  question: string;
  options: string[];
  answer: number;
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
  standalone: false,
})
export class QuizPage implements OnInit {
  currentIndex = 0;
  correctAnswers = 0;
  score = 0;
  showResult = false;

  // Sekarang array ini kosong, akan diisi dari materi yang diklik
  questions: Question[] = [];

  constructor(private router: Router) {
    // 🔥 MENGAMBIL DATA DARI HALAMAN SEBELUMNYA
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.questions = navigation.extras.state['questions'];
    }
  }

  ngOnInit() {
    // Jaga-jaga jika questions kosong (misal user refresh halaman quiz)
    if (!this.questions || this.questions.length === 0) {
      this.questions = [
        {
          question: 'Opps! Silakan pilih materi kembali.',
          options: ['Kembali ke Home'],
          answer: 0,
        },
      ];
    }
  }

  selectAnswer(index: number) {
    if (index === this.questions[this.currentIndex].answer) {
      this.correctAnswers++;
    }

    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
    } else {
      this.finishQuiz();
    }
  }

  finishQuiz() {
    this.showResult = true;
    this.score = Math.round(
      (this.correctAnswers / this.questions.length) * 100,
    );
    this.saveStats();
  }

  private saveStats() {
    const currentCount = Number(localStorage.getItem('quizCount') || 0);
    localStorage.setItem('quizCount', (currentCount + 1).toString());

    const currentHigh = Number(localStorage.getItem('highScore') || 0);
    if (this.score > currentHigh) {
      localStorage.setItem('highScore', this.score.toString());
    }

    let progress = Number(localStorage.getItem('userProgress') || 0);
    if (progress < 100) {
      progress += 10;
      localStorage.setItem('userProgress', Math.min(progress, 100).toString());
    }
  }

  restart() {
    this.currentIndex = 0;
    this.correctAnswers = 0;
    this.score = 0;
    this.showResult = false;
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}
