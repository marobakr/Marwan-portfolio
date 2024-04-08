import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-maintitle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './maintitle.component.html',
  styleUrls: ['./maintitle.component.scss'],
})
export class MaintitleComponent {
  @Input() popular: string = '';
}
