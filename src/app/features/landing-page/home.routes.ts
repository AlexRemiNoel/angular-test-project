import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page';

export const homeroutes: Routes = [
    {
    path: '',
    component: HomePage,
    title: "Home",
    data: {
      icon: 'home',
      navigation: '/'
    }
  }
];
