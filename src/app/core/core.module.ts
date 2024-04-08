import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { CanvasComponent } from './pages/home/components/canvas/canvas.component';
import { LodingComponent } from '../shared/loding/loding.component';

@NgModule({
  declarations: [],
  imports: [
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    CanvasComponent,
    LodingComponent,
  ],
  exports: [
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    CanvasComponent,
    LodingComponent,
  ],
})
export class CoreModule {}
