import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { CanvaseComponent } from './../../../../../shared/canvase/canvase.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, CanvaseComponent, NgxTypedJsModule, TranslateModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  isBrowser: boolean;
  translatedRoles: string[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
}
