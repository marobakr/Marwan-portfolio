import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassActiveDirective } from 'src/app/shared/class-active.directive';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ClassActiveDirective, AppRoutingModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  Scrolling: boolean = false;
  repoPath: string = 'https://github.com/marobakr/my-Portfolio';
  @HostListener('window:scroll', []) onScroll() {
    if (window.scrollY > 10) {
      this.Scrolling = true;
    } else {
      this.Scrolling = false;
    }
  }
}
