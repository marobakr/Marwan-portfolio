import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintitleComponent } from 'src/app/shared/maintitle/maintitle.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MaintitleComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {}
