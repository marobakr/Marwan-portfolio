import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './components/skills/skills.component';
import { ToolComponent } from './components/tool/tool.component';
import { MaintitleComponent } from 'src/app/shared/maintitle/maintitle.component';
// import { CanvasComponent } from 'src/app/core/pages/home/components/canvas/canvas.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    SkillsComponent,
    ToolComponent,
    MaintitleComponent,
    // CanvasComponent,
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {}
