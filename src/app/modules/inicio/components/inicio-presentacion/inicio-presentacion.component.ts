import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-presentacion',
  templateUrl: './inicio-presentacion.component.html',
  styleUrls: ['./inicio-presentacion.component.scss'],
})
export class InicioPresentacionComponent {
  public redirect(url: string): void {
    window.open(url, '_blank');
  }
}
