import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Tambahkan ActivatedRoute
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-list-materi',
  templateUrl: './list-materi.page.html',
  styleUrls: ['./list-materi.page.scss'],
  standalone: false,
})
export class ListMateriPage implements OnInit {
  // ✅ 1. Deklarasikan variabel agar bisa dibaca oleh HTML
  category: string = '';
  filteredBooks: any[] = []; // Pastikan namanya filteredBooks (pakai 'ed')

  constructor(
    private route: ActivatedRoute, // ✅ Menggunakan route untuk ambil params
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit() {
    // ✅ 2. Gunakan this.route.queryParams (bukan this.router.queryParams)
    this.route.queryParams.subscribe((params: any) => {
      this.category = params['cat'] || '';
      
      // ✅ 3. Gunakan getBooks() (semua buku) baru kemudian di filter
      const allBooks = this.bookService.getBooks();
      this.filteredBooks = allBooks.filter((b: any) => b.category === this.category);
    });
  }

  // ✅ 4. Pastikan nama fungsi sama persis dengan yang ada di (click) HTML
  goToDetail(id: number) {
    this.router.navigate(['/book-detail', id]);
  }
}