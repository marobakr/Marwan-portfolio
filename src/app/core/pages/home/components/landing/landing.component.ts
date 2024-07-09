import { CanvaseComponent } from './../../../../../shared/canvase/canvase.component';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, CanvaseComponent, NgxTypedJsModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
}
