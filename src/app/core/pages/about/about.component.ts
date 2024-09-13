import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MaintitleComponent } from 'src/app/shared/maintitle/maintitle.component';
import { CanvaseComponent } from './../../../shared/canvase/canvase.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ToolComponent } from './components/tool/tool.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    SkillsComponent,
    ToolComponent,
    MaintitleComponent,
    CanvaseComponent,
    TranslateModule,
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  constructor(protected translate: TranslateService) {}
}
