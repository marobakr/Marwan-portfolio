import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintitleComponent } from 'src/app/shared/maintitle/maintitle.component';

@Component({
  selector: 'app-days-code',
  standalone: true,
  imports: [CommonModule, MaintitleComponent],
  templateUrl: './days-code.component.html',
  styleUrls: ['./days-code.component.scss'],
})
export class DaysCodeComponent {}
