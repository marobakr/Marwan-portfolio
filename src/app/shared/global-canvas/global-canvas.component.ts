import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticlesConfig } from './particles';
declare let particlesJS: any;
@Component({
  selector: 'app-global-canvas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './global-canvas.component.html',
  styleUrls: ['./global-canvas.component.scss'],
})
export class GlobalCanvasComponent implements OnInit {
  ngOnInit(): void {
    this.invokeParticles();
  }
  invokeParticles(): void {
    particlesJS('global__particles-js', ParticlesConfig);
  }
}
