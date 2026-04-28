import { Component, AfterViewInit } from '@angular/core';
import * as ace from 'ace-builds';

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
    // ✅ KUNCI UTAMA: Arahkan Ace ke CDN agar tidak mencari file lokal yang 404
    const CDN = 'https://cdn.jsdelivr.net/npm/ace-builds@1.33.0/src-noconflict/';
    ace.config.set('basePath', CDN);
    ace.config.set('modePath', CDN);
    ace.config.set('themePath', CDN);
    ace.config.set('workerPath', CDN);

    // Inisialisasi editor
    this.editor = ace.edit('editor');
    
    // Set tema dan mode
    this.editor.setTheme('ace/theme/monokai');
    this.editor.getSession().setMode('ace/mode/html');

    this.editor.setOption("useWorker", false);
    
    // Opsional: Agar tampilan kodingan lebih rapi
    this.editor.setOptions({
      fontSize: "14px",
      showPrintMargin: false,
    });
  }

  runCode() {
    const code = this.editor.getValue();
    const iframe = document.getElementById('web-preview') as HTMLIFrameElement;

    if (iframe && iframe.contentWindow) {
      const doc = iframe.contentWindow.document;
      doc.open();
      doc.write(code);
      doc.close();
    }
  }
}