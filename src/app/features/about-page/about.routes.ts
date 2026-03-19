import { Routes } from '@angular/router';
import { AboutPage } from './pages/about-page/about-page';

export const aboutroutes: Routes = [
    {
    path: 'about',
    component: AboutPage,
    title: "About",
    data: {
      icon: 'settings',
      navigation: '/about'
    }
  },
];
