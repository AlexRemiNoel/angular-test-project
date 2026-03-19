import { Routes } from '@angular/router';
import { identitiesroutes } from './features/identities-page/identities.routes';
import { homeroutes } from './features/landing-page/home.routes';
import { aboutroutes } from './features/about-page/about.routes';
import { userroutes } from './features/user/user.routes';

export const routes: Routes = [
   
  
  ... homeroutes, 
  ... identitiesroutes,
  ... aboutroutes,
  ... userroutes
];
