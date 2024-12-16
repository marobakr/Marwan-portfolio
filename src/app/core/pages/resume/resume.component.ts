import { CommonModule, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ClassActiveDirective } from 'src/app/shared/class-active.directive';
import { ProjectsService } from '../../services/projects.service';
import { CanvaseComponent } from './../../../shared/canvase/canvase.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    CommonModule,
    PdfViewerModule,
    ClassActiveDirective,
    CanvaseComponent,
    TranslateModule,
  ],
  templateUrl: './resume.component.html',
  providers: [ProjectsService],
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

  toggleBullets(word: string): void {
    this.page1 = word === 'page1';
    this.page2 = word === 'page2';
  }
}
