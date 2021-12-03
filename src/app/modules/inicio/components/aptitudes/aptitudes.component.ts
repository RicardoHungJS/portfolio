import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.scss'],
})
export class AptitudesComponent implements OnInit {
  aptitudes: Array<Object>;

  constructor() {
    this.aptitudes = [
      {
        img: './assets/img/aptitudes-logos/html-logo.svg',
        descripcion: 'HTML',
      },
      {
        img: './assets/img/aptitudes-logos/jg-logo.svg',
        descripcion: 'Javascript',
      },
      {
        img: './assets/img/aptitudes-logos/ts-logo.svg',
        descripcion: 'Typescript',
      },
      {
        img: './assets/img/aptitudes-logos/angular-logo.svg',
        descripcion: 'Angular',
      },
      {
        img: './assets/img/aptitudes-logos/css-logo.svg',
        descripcion: 'CSS',
      },
      {
        img: './assets/img/aptitudes-logos/sass-logo.svg',
        descripcion: 'SASS',
      },
      {
        img: './assets/img/aptitudes-logos/bt-logo.svg',
        descripcion: 'Bootstrap',
      },
      {
        img: './assets/img/aptitudes-logos/git-logo.svg',
        descripcion: 'Git',
      },
      {
        img: './assets/img/aptitudes-logos/github-logo.svg',
        descripcion: 'Hithub',
      },
    ];
  }

  ngOnInit(): void {
  }
}
