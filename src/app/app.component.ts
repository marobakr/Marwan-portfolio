import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  constructor(private _viewportScroller: ViewportScroller) {}
  isScroll: boolean = false;
  isLoding: boolean = true;
  afterViewInit: boolean = false;

  @HostListener('window:scroll') onScroll(): void {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    if (scrollY > 150) {
      this.isScroll = true;
    } else {
      this.isScroll = false;
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isLoding = false;
    }, 1000);
    this.afterViewInit = true;
  }

  scrollToTop(): void {
    this._viewportScroller.scrollToPosition([0, 0]);
  }
}
