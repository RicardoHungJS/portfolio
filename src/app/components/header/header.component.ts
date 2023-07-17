import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HeaderNavigationService } from 'src/services/headerNavigationService/header-navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  langAns: Boolean = false;

  constructor(private translate: TranslateService, private navigationService: HeaderNavigationService) {}

  ngOnInit(): void {
    this.cambiarIdioma(this.langAns);
    this.navigationService.setNavigationTag('about')
  }

  cambiarIdioma(ans: Boolean) {
    this.langAns = !ans;

    if (ans) {
      this.translate.use('es');
    } else {
      this.translate.use('en');
    }
  }

  moveToSection(headerTag: string) {
    this.navigationService.setNavigationTag(headerTag)
  }
}
