import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { LodingComponent } from '../shared/loding/loding.component';

@NgModule({
  declarations: [],
  imports: [NavbarComponent, HomeComponent, FooterComponent, LodingComponent],
  exports: [NavbarComponent, HomeComponent, FooterComponent, LodingComponent],
})
export class CoreModule {}
