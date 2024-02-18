import { Component, OnInit } from '@angular/core';
import { Aptitude } from 'src/interfaces/aptitudesInterfaces';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.scss'],
})
export class AptitudesComponent implements OnInit {
  aptitudes: Array<Aptitude>;

  constructor() {
    this.aptitudes = [
      {
        img: './assets/img/aptitudes-logos/html-logo.svg',
        descripcion: 'HTML',
      },
      {
        img: './assets/img/aptitudes-logos/jg-logo.svg',
        descripcion: 'JavaScript',
      },
      {
        img: './assets/img/aptitudes-logos/ts-logo.svg',
        descripcion: 'TypeScript',
      },
      {
        img: './assets/img/aptitudes-logos/react-logo.svg',
        descripcion: 'React',
      },
      {
        img: './assets/img/aptitudes-logos/angular-logo.svg',
        descripcion: 'Angular',
      },
      {
        img: './assets/img/aptitudes-logos/nodejs-logo.svg',
        descripcion: 'Node.js',
      },
      {
        img: './assets/img/aptitudes-logos/express-logo.svg',
        descripcion: 'Express',
      },
      {
        img: './assets/img/aptitudes-logos/nest-logo.svg',
        descripcion: 'NestJs',
      },
      {
        img: './assets/img/aptitudes-logos/graphql-logo.svg',
        descripcion: 'Graphql',
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
        img: './assets/img/aptitudes-logos/tailwind-logo.svg',
        descripcion: 'Tailwind',
      },
      {
        img: './assets/img/aptitudes-logos/git-logo.svg',
        descripcion: 'Git',
      },
      {
        img: './assets/img/aptitudes-logos/github-logo.svg',
        descripcion: 'Github',
      },
    ];
  }

  ngOnInit(): void {
  }
}
