import { Routes } from '@angular/router';
// import {lazy} from './lib/functions/lazy.function';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    // loadComponent: lazy('./pages/home/home.component','.HomeComponent'),

  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    // loadComponent: lazy('./pages/home/home.component','.HomeComponent'),

  },
  {
    path: 'flex-box',
    loadComponent: () => import('./pages/flex-box/flex-box.component').then(m => m.FlexBoxComponent)
    // loadComponent: lazy('./pages/flex-box/flex-box.component', '.FlexBoxComponent')
  },
  {
    path: 'grid',
    loadComponent: () => import('./pages/grid/grid.component').then(m => m.GridComponent)
    // loadComponent: lazy('./pages/grid/grid.component', '.GridComponent')
  },
  {
    path: 'documentation',
    loadComponent: () => import('./pages/documentation/documentation.component').then(m => m.DocumentationComponent)
    // loadComponent: lazy('./pages/documentation/documentation.component', '.DocumentationComponent')
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
    // loadComponent: lazy('./pages/not-found/not-found.component', '.NotFoundComponent')
  }
];
