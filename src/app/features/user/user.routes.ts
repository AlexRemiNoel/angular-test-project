import { Routes } from '@angular/router';
import { ProfilePage } from './pages/profile-page/profile-page';

export const userroutes: Routes = [
  
    {
    path: 'profile',
    component: ProfilePage,
    title: "Profile",
    data: {
      icon: 'person',
      navigation: '/profile'
    }
  }

];
