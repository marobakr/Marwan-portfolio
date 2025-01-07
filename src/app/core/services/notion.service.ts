import { Injectable } from '@angular/core';
import { Notion, notionRules } from '../interfaces/notionCards';
import { NotionData } from './notion-data';
export const baseUrlNotion: string = 'https://marwanabubakr-dev.notion.site/';
@Injectable({
  providedIn: 'root',
})
export class NotionService {
  constructor() {}

  getNotion(): Notion[] {
    return NotionData;
  }
  getNotionByRule(rule: notionRules): Notion[] {
    return NotionData.filter((card) => card.rule === rule);
  }
}
