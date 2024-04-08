import { Injectable } from '@angular/core';
import { ProjectsData } from './projects-data';
import { Projects } from '../interfaces/projects';

export class ProjectsService {
  constructor() {}
  getProjects(): Projects[] {
    return ProjectsData;
  }
  getProjectsByRule(rule: string): Projects[] {
    return ProjectsData.filter((project) => project.rule === rule);
  }
}
