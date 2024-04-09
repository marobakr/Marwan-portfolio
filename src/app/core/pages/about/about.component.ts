import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './components/skills/skills.component';
import { ToolComponent } from './components/tool/tool.component';
import { MaintitleComponent } from 'src/app/shared/maintitle/maintitle.component';
import { DaysCodeComponent } from './components/days-code/days-code.component';
import { CanvasComponent } from 'src/app/core/pages/home/components/canvas/canvas.component';
import { ParticlesComponent } from 'src/app/shared/particles/particles.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    SkillsComponent,
    ToolComponent,
    MaintitleComponent,
    DaysCodeComponent,
    ParticlesComponent,
    CanvasComponent,
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {}
