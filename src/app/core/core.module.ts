import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { LodingComponent } from '../shared/loding/loding.component';
// import { GlobalCanvasComponent } from '../shared/global-canvas/global-canvas.component';

@NgModule({
  declarations: [],
  imports: [
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    // GlobalCanvasComponent,
    LodingComponent,
  ],
  exports: [
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    // GlobalCanvasComponent,
    LodingComponent,
  ],
})
export class CoreModule {}
