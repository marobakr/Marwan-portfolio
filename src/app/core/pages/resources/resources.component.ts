import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MaintitleComponent } from '../../../shared/maintitle/maintitle.component';
import { NotionComponent } from '../../../shared/notion/notion.component';
import { baseUrlNotion } from '../../services/notion.service';

interface NotionLikns {
  key: string;
  url: string;
}
@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [
    CommonModule,
    MaintitleComponent,
    TranslateModule,
    NotionComponent,
    RouterLink,
  ],
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent implements OnInit {
  urlLinksNotion: NotionLikns[] = [
    {
      key: 'SCSS',
      url: 'SCSS-f10cb93db5304442b15be255c2c331f8',
    },
    {
      key: 'Githup',
      url: 'GitHub-16fed48d9f6a477a9ca222d48ba447f0',
    },
    {
      key: 'TypeScript',
      url: 'TypeScript-ff0506711b584a829e60af3d6bfa8a59',
    },
    {
      key: 'UnitTesting',
      url: 'Unit-Testing-7b9efd32cb11450aab0126bbad3ad657',
    },
  ];
  ngOnInit(): void {
    this.urlLinksNotion.map((obj: NotionLikns) => {
      obj.url = baseUrlNotion + obj.url;
      return obj;
    });
  }

  getUrlByKey(key: string): string | undefined {
    const link = this.urlLinksNotion.find((item) => item.key === key);
    return link ? link.url : undefined;
  }
}
