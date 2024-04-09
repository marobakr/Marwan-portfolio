import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticlesConfig } from './ParticlesConfig';

declare let particles: any;

@Component({
  selector: 'app-particles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.scss'],
})
export class ParticlesComponent implements OnInit {
  ngOnInit(): void {}

  invokeParticles(): void {
    particles('particles-js', ParticlesConfig);
  }
}
