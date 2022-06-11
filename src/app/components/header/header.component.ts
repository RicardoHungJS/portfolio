import { Component, OnInit, OnChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges {
  langAns: Boolean = false;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.cambiarIdioma(this.langAns);
  }

  ngOnChanges(): void {
    console.log('cambiando cosas');
  }

  cambiarIdioma(ans: Boolean) {
    this.langAns = !ans;

    if (ans) {
      this.translate.use('es');
    } else {
      this.translate.use('en');
    }
  }

  moveToSection(partOfPage) {
    if (partOfPage != 0) {
      let alturaPagina = document.body.clientHeight;
      window.scroll(0, Math.round(alturaPagina / partOfPage));
    } else {
      window.scroll(0, 0);
    }
  }
}
