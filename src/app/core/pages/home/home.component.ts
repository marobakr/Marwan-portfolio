import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { LandingComponent } from './components/landing/landing.component';
// import { CanvasComponent } from './components/canvas/canvas.component';
import { LodingComponent } from 'src/app/shared/loding/loding.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ContactComponent,
    LandingComponent,
    // CanvasComponent,
    LodingComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
