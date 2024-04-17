import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassActiveDirective } from 'src/app/shared/class-active.directive';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ClassActiveDirective, AppRoutingModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [ProjectsService],
})
export class NavbarComponent {
  constructor() {}

  @ViewChild('navbarCollapse') btnMopileNav!: ElementRef;
  Scrolling: boolean = false;
  inResume: number = 0;
  isShow: boolean = false;
  repoPath: string = 'https://github.com/marobakr/Marwan-portfolio';
  @HostListener('window:scroll', []) onScroll() {
    if (window.scrollY > 10) {
      this.Scrolling = true;
    } else {
      this.Scrolling = false;
    }
  }

  closeNavbar(): void {
    this.btnMopileNav.nativeElement.classList.remove('show');
  }
}
