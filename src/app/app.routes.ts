import { Routes } from '@angular/router';
import { HomePage } from './features/user/pages/home-page/home-page';
import { IdentitiesPage } from './features/user/pages/identities-page/identities-page';
import { AboutPage } from './features/user/pages/about-page/about-page';

export const routes: Routes = [
    {
    path: '',
    component: HomePage,
  },
  {
    path: 'identities',
    component: IdentitiesPage,
  },
    {
    path: 'about',
    component: AboutPage,
  }
];
