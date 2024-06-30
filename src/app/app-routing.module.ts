import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./core/pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./core/pages/about/about.component').then(
        (m) => m.AboutComponent
      ),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./core/pages/project/project.component').then(
        (m) => m.ProjectComponent
      ),
  },

  {
    path: 'resume',
    loadComponent: () =>
      import('./core/pages/resume/resume.component').then(
        (m) => m.ResumeComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./core/pages/home/home.component').then((m) => m.HomeComponent),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
