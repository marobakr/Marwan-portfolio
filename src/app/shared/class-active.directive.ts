import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appClassActive]',
})
export class ClassActiveDirective {
  // binding properties for the active class
  @HostBinding('class.activeItem') isActive: boolean = false;

  @HostListener('mouseenter') mouseEnter() {
    this.isActive = true;
  }

  @HostListener('mouseleave') mouseLeve() {
    this.isActive = false;
  }
}
