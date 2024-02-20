import { Component, OnInit, inject } from '@angular/core';
import { GoogleAnalyticsService } from 'src/services/googleAnalyticsService/google-analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  gaTrack = inject(GoogleAnalyticsService);

  ngOnInit(): void {
    this.gaTrack.init();
  }
}
