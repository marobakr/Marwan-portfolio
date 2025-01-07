import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Notion } from 'src/app/core/interfaces/notionCards';
import { NotionService } from 'src/app/core/services/notion.service';
import { NotionComponent } from 'src/app/shared/notion/notion.component';

@Component({
  selector: 'app-specific-resources',
  standalone: true,
  imports: [CommonModule, NotionComponent],
  templateUrl: './specific-resources.component.html',
  styleUrls: ['./specific-resources.component.scss'],
})
export class SpecificResourcesComponent implements OnInit {
  constructor(
    private _notionService: NotionService,
    private _route: ActivatedRoute
  ) {}
  allNotionCard: Notion[] = [];
  specificPage: any;

  ngOnInit(): void {
    this.fetchNotion();
    this._route.paramMap.subscribe((params) => {
      this.specificPage = params.get('type');
    });
  }
  fetchNotion(): void {
    this.allNotionCard = this._notionService.getNotion();
  }
}
