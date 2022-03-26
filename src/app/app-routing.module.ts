import { PagesComponent } from './pages/pages.component';


import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { AppModule } from './app.module';

const routes: Routes = [
  { path: '',
   component: PagesComponent,
   children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'progress', component: ProgressComponent },
    { path: 'grafica1', component: Grafica1Component },
    { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
   ]
   },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: '**', component: NotfoundComponent },

];







@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
