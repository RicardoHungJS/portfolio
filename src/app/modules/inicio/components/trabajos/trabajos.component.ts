import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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
    autoplaySpeed: 1000,
    pauseOnHover: true,
    infinite: true,
    arrows: false,
    dots: true,
    cssEase: 'cubic-bezier(.85,-0.26,.08,1.44)',

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          cssEase: 'linear',
        },
      },
    ],
  };

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
    console.log(this.translateService('trabajosComponent.subtitle1'));

    this.tarjetasExp = [
      {
        id: 1,
        titulo: 'trabajosComponent.subtitle1',
        descripcion:'trabajosComponent.description1',
        imagen: './assets/img/imagenes/richiPage.png',
        link: 'http://localhost:4200/',
      },
      {
        id: 2,
        titulo: 'trabajosComponent.subtitle2',
        descripcion:'trabajosComponent.description2',
        imagen: './assets/img/imagenes/dataifxPage.png',
        link: 'http://www.dataifx.tech',
      },
      {
        id: 3,
        titulo: 'trabajosComponent.subtitle3',
        descripcion:'trabajosComponent.description3',
        imagen: './assets/img/imagenes/Kuepa_edutech.jpg',
        link: 'https://www.kuepa.com/',
      },
      {
        id: 4,
        titulo: 'trabajosComponent.subtitle4',
        descripcion:'trabajosComponent.description4',
        imagen: './assets/img/imagenes/pruebaTecnicaPage.png',
        link: 'https://ricardohungjs.github.io/pruebaGHP/',
      },
    ];
  }
}
