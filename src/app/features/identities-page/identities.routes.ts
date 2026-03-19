import { Routes } from '@angular/router';
import { IdentitiesPage } from './pages/indentities-page/identities-page';
import { AddIdentity } from './pages/add-identity/add-identity';

export const identitiesroutes: Routes = [
  
    {
    path: 'identities',
    component: IdentitiesPage,
    title: "Identity",
    data: {
      icon: 'person',
      navigation: '/identities'
    }
  },
  {
    path: 'identities/add',
    component: AddIdentity,
    title: "Identity",
    data: {
      icon: 'add',
      navigation: '/identities/add'
    }
  }

];
