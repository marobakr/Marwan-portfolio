import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Notion, notionRules } from 'src/app/core/interfaces/notionCards';

import { RouterLink } from '@angular/router';
import {
  baseUrlNotion,
  NotionService,
} from 'src/app/core/services/notion.service';
import { MaintitleComponent } from '../maintitle/maintitle.component';

@Component({
  selector: 'app-notion',
  standalone: true,
  imports: [
    CommonModule,
    NotionComponent,
    TranslateModule,
    MaintitleComponent,
    RouterLink,
  ],
  templateUrl: './notion.component.html',
  styleUrls: ['./notion.component.scss'],
})
export class NotionComponent implements OnChanges {
  constructor(private _notionService: NotionService) {}
  @Input({ required: true }) notionCards: Notion[] = [];
  @Input({ required: true }) typeOfCard!: notionRules;
  baseUrlNotion = baseUrlNotion;
  ngOnChanges(changes: SimpleChanges): void {
    let jsCards = this._notionService.getNotionByRule(this.typeOfCard);
    this.notionCards = jsCards;
  }
}
