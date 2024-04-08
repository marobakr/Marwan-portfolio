import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  constructor() {}
  isLoding: boolean = true;
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isLoding = false;
    }, 1000);
  }
}
