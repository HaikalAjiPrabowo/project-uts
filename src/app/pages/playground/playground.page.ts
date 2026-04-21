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
    this.editor = ace.edit('editor');
    this.editor.setTheme('ace/theme/monokai');
    
    this.editor.getSession().setMode('ace/mode/html');
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