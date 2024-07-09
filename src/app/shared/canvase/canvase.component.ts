import { CommonModule } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { ParticlesConfig } from './particles';

declare let particlesJS: any;

@Component({
  selector: 'app-canvase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './canvase.component.html',
  styleUrls: ['./canvase.component.scss'],
})
export class CanvaseComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.invokeParticles();
    }
  }

  invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig);
  }
}
