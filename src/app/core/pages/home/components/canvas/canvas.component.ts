import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticlesConfig } from './particles';

declare let particlesJS: any;
@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit {
  ngOnInit(): void {
    this.invokeParticles();
  }

  invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig);
  }
}
