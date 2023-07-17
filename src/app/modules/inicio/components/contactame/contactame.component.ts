import { Component, OnInit } from '@angular/core';
import { SocialMedia } from 'src/interfaces/contactMeInterfaces';

@Component({
  selector: 'app-contactame',
  templateUrl: './contactame.component.html',
  styleUrls: ['./contactame.component.scss'],
})
export class ContactameComponent implements OnInit {
  socialMedia: Array<SocialMedia>;

  constructor() {
    this.socialMedia = [
      {
        icon: './assets/img/social-media/linkedin.png',
        url: 'https://www.linkedin.com/in/rjh92',
      },
      {
        icon: './assets/img/social-media/github.png',
        url: 'https://github.com/RicardoHungJS',
      }
    ];
  }

  ngOnInit(): void {}

  redirigir(url: string) {
    window.open(url, '_blank');
  }
}
