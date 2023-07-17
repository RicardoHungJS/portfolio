import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.scss'],
})
export class TrabajosComponent implements OnInit {
  tarjetasExp: Array<Object>;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.settingTexts();
  }

  translateService(serviceRoute: string) {
    let servRes: any;

    this.translate.get(serviceRoute).subscribe((res) => {
      servRes = res;
    });

    return servRes;
  }

  settingTexts() {
    this.tarjetasExp = [
      {
        id: 1,
        titulo: 'trabajosComponent.subtitle5',
        descripcion: 'trabajosComponent.description5',
        imagen: './assets/img/imagenes/ip-tracker.webp',
        link: 'https://ip-tracker-static-job-list.vercel.app/ip-tracker',
      },
      {
        id: 2,
        titulo: 'trabajosComponent.subtitle6',
        descripcion: 'trabajosComponent.description6',
        imagen: './assets/img/imagenes/static-job-list.webp',
        link: 'https://ip-tracker-static-job-list.vercel.app/static-jobs-list',
      },
      {
        id: 3,
        titulo: 'trabajosComponent.subtitle1',
        descripcion: 'trabajosComponent.description1',
        imagen: './assets/img/imagenes/richiPage.webp',
        link: '',
      },
      {
        id: 4,
        titulo: 'trabajosComponent.subtitle2',
        descripcion: 'trabajosComponent.description2',
        imagen: './assets/img/imagenes/dataifxPage.webp',
        link: 'http://www.dataifx.tech',
      },
      {
        id: 5,
        titulo: 'trabajosComponent.subtitle3',
        descripcion: 'trabajosComponent.description3',
        imagen: './assets/img/imagenes/Kuepa_edutech.webp',
        link: 'https://www.kuepa.com/',
      },
      {
        id: 6,
        titulo: 'trabajosComponent.subtitle4',
        descripcion: 'trabajosComponent.description4',
        imagen: './assets/img/imagenes/pruebaTecnicaPage.webp',
        link: 'https://ricardohungjs.github.io/pruebaGHP/',
      },
    ];
  }
}
