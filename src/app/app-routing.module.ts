import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AboutComponent}       from './about.component';
import {LoginComponent}       from './login.component';

const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
