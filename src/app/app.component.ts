import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    // Ambil theme dari localStorage
    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else if (theme === 'light') {
      document.body.classList.remove('dark');
    } else {
      // Auto detect dari sistem HP / laptop
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      if (prefersDark.matches) {
        document.body.classList.add('dark');
      }
    }
  }

  toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark');

    // Simpan pilihan user
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
}