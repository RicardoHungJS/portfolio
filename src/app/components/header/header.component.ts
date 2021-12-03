import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
