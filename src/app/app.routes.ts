import { Routes } from '@angular/router';
import { HomePage } from './features/user/pages/home-page/home-page';
import { IdentitiesPage } from './features/user/pages/identities-page/identities-page';
import { AboutPage } from './features/user/pages/about-page/about-page';

export const routes: Routes = [
    {
    path: '',
    component: HomePage,
    title: "Home",
    data: {
      icon: 'home'
    }
  },
  {
    path: 'identities',
    component: IdentitiesPage,
    title: "Identity",
    data: {
      icon: 'person'
    }

  },
    {
    path: 'about',
    component: AboutPage,
    title: "About",
    data: {
      icon: 'settings'
    }
  }
];
