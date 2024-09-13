import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MaintitleComponent } from 'src/app/shared/maintitle/maintitle.component';
import { CanvaseComponent } from './../../../../../shared/canvase/canvase.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule,
    MaintitleComponent,
    CanvaseComponent,
    TranslateModule,
  ],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {}
