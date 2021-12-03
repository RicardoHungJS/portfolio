import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.scss'],
})
export class TrabajosComponent implements OnInit {
  tarjetasExp: Array<Object>;

  slideConfig = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    infinite: true,
    arrows: false,
    dots: true,
    cssEase: 'cubic-bezier(.85,-0.26,.08,1.44)',
  };

  constructor() {
    this.tarjetasExp = [
      {
        id: 1,
        titulo: 'Mi portafolio',
        descripcion:
          'Uno de los proyectos más divertidos que he realizado, mi propia página web.',
        imagen: './assets/img/imagenes/richiPage.png',
        link: 'http://localhost:4200/',
      },
      {
        id: 2,
        titulo: 'Página de negocios de DataiFX',
        descripcion:
          'Tuve la suerte de trabajar desarrollando la página web principal de DataiFX enfocada en el core de los negocios de la empresa.',
        imagen: './assets/img/imagenes/dataifxPage.png',
        link: 'http://www.dataifx.tech',
      },
      {
        id: 3,
        titulo: 'Primera prueba técnica',
        descripcion:
          'Es la primera prueba técnica realizada para entrar a una empresa, fue un reto muy entretenido en su momento.',
        imagen: './assets/img/imagenes/pruebaTecnicaPage.png',
        link: 'https://ricardohungjs.github.io/pruebaGHP/',
      }
    ];
  }

  ngOnInit(): void {}
}
