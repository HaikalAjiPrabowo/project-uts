import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.page.html',
  styleUrls: ['./book-detail.page.scss'],
  standalone: false,
})
export class BookDetailPage implements OnInit {
  book: any;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router,
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // Menggunakan getBook sesuai dengan nama di book.service.ts
    this.book = this.bookService.getBook(id);
  }

  async copyCode(text: string) {
    await navigator.clipboard.writeText(text);
    alert('Kode berhasil disalin!');
  }
}