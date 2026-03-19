import { Routes } from '@angular/router';
import { IdentitiesPage } from './pages/indentities-page/identities-page';

export const identitiesroutes: Routes = [
  {
    path: 'identities',
    component: IdentitiesPage,
    title: "Identity",
    data: {
      icon: 'person',
      navigation: '/identities'
    }
  }
];
