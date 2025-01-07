import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MaintitleComponent } from 'src/app/shared/maintitle/maintitle.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MaintitleComponent, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  reflection: number[] = [];
  ngOnInit(): void {
    this.generateEle();
  }

  generateEle() {
    for (let i = 0; i <= 100; i++) {
      this.reflection.push(i);
    }
  }
}
