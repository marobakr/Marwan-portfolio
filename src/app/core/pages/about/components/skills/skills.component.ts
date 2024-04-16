import { CanvaseComponent } from './../../../../../shared/canvase/canvase.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintitleComponent } from 'src/app/shared/maintitle/maintitle.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MaintitleComponent, CanvaseComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {}
