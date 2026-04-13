import { Component, AfterViewInit } from '@angular/core';
import * as ace from 'ace-builds';

// 🔥 Taruh deklarasi Sk di sini (di luar class) agar bisa diakses secara global di file ini
declare var Sk: any;

@Component({
  selector: 'app-playground',
  templateUrl: './playground.page.html',
  styleUrls: ['./playground.page.scss'],
  standalone: false,
})
export class PlaygroundPage implements AfterViewInit {
  private editor: any;

  constructor() {}

  ngAfterViewInit() {
    // 1. Inisialisasi Editor Ace
    this.editor = ace.edit('editor');
    this.editor.setTheme('ace/theme/monokai');

    // 2. Karena kita pakai Python, ubah mode ke python
    this.editor.session.setMode('ace/mode/python');

    // 3. Set nilai awal kode Python
    this.editor.setValue('print("Hello World")');
  }

  // 🔥 Fungsi runCode yang sudah menggunakan Logika Skulpt (Python)
  runCode() {
    // Ambil objek Sk dari window (browser global)
    const sk = (window as any).Sk;
    const code = this.editor.getValue();
    const outputElement = document.getElementById('output');

    if (outputElement) outputElement.innerHTML = '';

    // Pengecekan apakah Skulpt sudah ter-load sempurna
    if (!sk) {
      console.error('Skulpt tidak ditemukan!');
      alert(
        'Library Skulpt belum siap. Pastikan index.html sudah benar dan koneksi internet aktif.',
      );
      return;
    }

    // Konfigurasi output
    sk.configure({
      output: (text: string) => {
        if (outputElement) outputElement.innerHTML += text;
      },
      read: (x: string) => {
        if (
          sk.builtinFiles === undefined ||
          sk.builtinFiles['files'][x] === undefined
        )
          throw "File not found: '" + x + "'";
        return sk.builtinFiles['files'][x];
      },
    });

    // Eksekusi dengan pengecekan misaleval
    try {
      if (sk.misaleval && sk.misaleval.asyncToPromise) {
        sk.misaleval
          .asyncToPromise(() => {
            return sk.importMainWithBody('<stdin>', false, code, true);
          })
          .then(
            () => console.log('Python Berhasil!'),
            (err: any) => {
              if (outputElement) outputElement.innerHTML = err.toString();
            },
          );
      } else {
        console.error(
          'Sk.misaleval tidak ditemukan. Memakai cara alternatif...',
        );
        // Cara alternatif jika asyncToPromise macet
        sk.importMainWithBody('<stdin>', false, code, true);
      }
    } catch (e: any) {
      if (outputElement) outputElement.innerHTML = e.toString();
    }
  }
}
