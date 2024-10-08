import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MaintitleComponent } from 'src/app/shared/maintitle/maintitle.component';
import { Projects } from '../../interfaces/projects';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, MaintitleComponent, TranslateModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  providers: [ProjectsService],
  /* Change detection strategy */
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent implements OnInit {
  constructor(private _projectsService: ProjectsService) {}
  allProjects: Projects[] = [];
  all: boolean = true;
  landing: boolean = false;
  pure: boolean = false;
  jquery: boolean = false;
  frameworks: boolean = false;
  crude: boolean = false;
  lengthProjects: number = 0;

  ngOnInit(): void {
    this.fetchProjects();
  }
  fetchProjects(): void {
    this.allProjects = this._projectsService.getProjects();
    this.lengthProjects = this.allProjects.length;
  }

  fillter(rule: string): void {
    if (rule === 'all') {
      this.fetchProjects();
    } else {
      this.allProjects = this._projectsService.getProjectsByRule(rule);
      this.lengthProjects = this.allProjects.length;
    }
    this.toggleProjects(rule);
  }

  toggleProjects(word: string): void {
    this.all = word === 'all';
    this.landing = word === 'landing';
    this.pure = word === 'pure';
    this.jquery = word === 'jquery';
    this.frameworks = word === 'frameworks';
    this.crude = word === 'crude';
  }
  getTranslationKey(index: number): string {
    return `projects.project_${index + 1}.description`;
  }
}
