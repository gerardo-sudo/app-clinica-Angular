import { PagesComponent } from './pages/pages.component';


import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';


const routes: Routes = [


  // { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },

  { path: '**', component: NotfoundComponent },

];







@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(routes),
   PagesRoutingModule,
   AuthRoutingModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
