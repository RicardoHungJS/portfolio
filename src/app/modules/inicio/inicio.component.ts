import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderNavigationService } from 'src/services/headerNavigationService/header-navigation.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  currentTag: string = '';
  tagsSubscription: Subscription;

  constructor(private navigationService: HeaderNavigationService) {
    this.currentTag = this.navigationService.getNavigationTag();
    this.tagsSubscription = this.navigationService
      .gettagChanges()
      .subscribe((tag) => {
        this.scrollTo(tag);
      });
  }

  ngOnInit(): void {}

  scrollTo(section: string) {
    var element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }
}
