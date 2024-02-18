import { Component, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-inicio-presentacion',
  templateUrl: './inicio-presentacion.component.html',
  styleUrls: ['./inicio-presentacion.component.scss'],
})
export class InicioPresentacionComponent {
  translateService = inject(TranslateService);

  public redirect(url: string): void {
    if (url === 'cv') {
      this.translateService.get('inicioComponent.cvUrl').subscribe({
        next: (res) => {
          window.open(res, '_blank');
        },
      });
    } else {
      window.open(url, '_blank');
    }
  }
}
