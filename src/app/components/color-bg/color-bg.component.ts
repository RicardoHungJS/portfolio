import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-color-bg',
  templateUrl: './color-bg.component.html',
  styleUrls: ['./color-bg.component.scss'],
})
export class ColorBgComponent implements AfterViewInit {
  @ViewChild('interactive') interactive!: ElementRef;

  ngAfterViewInit() {
    if (this.interactive) {
      let curX = 0;
      let curY = 0;
      let tgX = 0;
      let tgY = 0;
      const element = this.interactive.nativeElement;
      const elementWidth = element.offsetWidth / 2;
      const elementHeight = element.offsetHeight / 2;

      const move = () => {
        curX += (tgX - curX) / 30;
        curY += (tgY - curY) / 30;

        this.interactive.nativeElement.style.transform = `translate(${Math.round(
          curX
        )}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(move);
      };

      window.addEventListener('mousemove', (event) => {
        tgX = event.clientX - elementWidth;
        tgY = event.clientY - elementHeight;
      });

      move();
    }
  }
}
