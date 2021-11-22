import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.scss'],
})
export class TrabajosComponent implements OnInit {
  tarjetasExp: Array<Object>;

  constructor() {
    this.tarjetasExp = [
      {
        id: 1,
        titulo: 'Mi portafolio',
        descripcion:
          'Uno de los proyectos más divertidos que he realizado, mi propia página web.',
        imagen: '../../../../../assets/img/imagenes/richiPage.png',
        link: 'http://localhost:4200/',
      },
      {
        id: 2,
        titulo: 'Página de negocios de DataiFX',
        descripcion:
          'Tuve la suerte de trabajar desarrollando la página web principal de DataiFX enfocada en el core de los negocios de la empresa.',
        imagen: '../../../../../assets/img/imagenes/dataifxPage.png',
        link: 'http://www.dataifx.tech',
      },
    ];
  }

  ngOnInit(): void {}
}
