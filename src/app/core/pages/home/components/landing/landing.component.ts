import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasComponent } from '../canvas/canvas.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, CanvasComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {}