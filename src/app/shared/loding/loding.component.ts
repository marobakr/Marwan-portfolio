import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loding.component.html',
  styleUrls: ['./loding.component.scss'],
})
export class LodingComponent {
  @Input() isLoding: boolean = false;
}
