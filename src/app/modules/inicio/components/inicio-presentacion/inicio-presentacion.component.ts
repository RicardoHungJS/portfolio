import { Component, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GoogleAnalyticsService } from 'src/services/googleAnalyticsService/google-analytics.service';

@Component({
  selector: 'app-inicio-presentacion',
  templateUrl: './inicio-presentacion.component.html',
  styleUrls: ['./inicio-presentacion.component.scss'],
})
export class InicioPresentacionComponent implements OnInit {
  translateService = inject(TranslateService);
  gaTrack = inject(GoogleAnalyticsService);
  years: number = 0;

  ngOnInit(): void {
    this.calculateYearsPassed();
  }

  public redirect(url: string): void {
    if (url === 'cv') {
      this.translateService.get('inicioComponent.cvUrl').subscribe({
        next: (res) => {
          window.open(res, '_blank');
          this.gaTrack.trackEvent('cv_downloaded', {
            cv: res,
          });
        },
      });
    } else {
      window.open(url, '_blank');
      this.gaTrack.trackEvent('social_redirection', {
        social_media: url,
      });
    }
  }

  private calculateYearsPassed(): void {
    const startDate = new Date('2020-01-01');
    const currentDate = new Date();

    let yearsPassed = currentDate.getFullYear() - startDate.getFullYear();

    if (
      currentDate.getMonth() < startDate.getMonth() ||
      (currentDate.getMonth() === startDate.getMonth() &&
        currentDate.getDate() < startDate.getDate())
    ) {
      yearsPassed--;
    }

    this.years = yearsPassed;
  }
}
