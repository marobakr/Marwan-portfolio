import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ClassActiveDirective } from 'src/app/shared/class-active.directive';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, PdfViewerModule, ClassActiveDirective],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  constructor(private _viewportScroller: ViewportScroller) {}
  page1: boolean = true;
  page2: boolean = false;
  currentPage: number = 1;
  pdfSrc: string = '../../../../assets/Marwan Abubakr FrontEnd Angular.pdf';

  pdfPagination(event: number, item: string): void {
    this.currentPage = event;
    this.toggleBullets(item);
    this._viewportScroller.scrollToPosition([0, 0]);
  }

  afterLoadComplete(event: any) {
    // Handle after-load-complete event
    console.log('PDF loaded completely', event);
  }

  pageRendered(event: any) {
    // Handle page-rendered event
    console.log('Page rendered', event);
  }

  toggleBullets(word: string): void {
    this.page1 = word === 'page1';
    this.page2 = word === 'page2';
  }
}