import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintitleComponent } from 'src/app/shared/maintitle/maintitle.component';

@Component({
  selector: 'app-tool',
  standalone: true,
  imports: [CommonModule, MaintitleComponent],
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss'],
})
export class ToolComponent {}
