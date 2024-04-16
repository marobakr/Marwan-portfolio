import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  ngOnInit(): void {
    this.invokeParticles();
  }

  invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig);
  }
}
