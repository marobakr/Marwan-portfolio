import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MaintitleComponent } from 'src/app/shared/maintitle/maintitle.component';

@Component({
  selector: 'app-tool',
  standalone: true,
  imports: [CommonModule, MaintitleComponent, TranslateModule],
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss'],
})
export class ToolComponent {}
