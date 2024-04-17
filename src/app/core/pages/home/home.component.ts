import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { LandingComponent } from './components/landing/landing.component';
import { LodingComponent } from 'src/app/shared/loding/loding.component';
import { CanvaseComponent } from 'src/app/shared/canvase/canvase.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ContactComponent,
    LandingComponent,
    LodingComponent,
    CanvaseComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
