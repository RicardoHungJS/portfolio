import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  langAns: Boolean = false;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }

  ngOnInit(): void {
    this.cambiarIdioma(this.langAns);
  }

  cambiarIdioma(ans) {
    this.langAns = !ans

    if (ans) {
      this.translate.use('en');
    } else {
      this.translate.use('es');
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
