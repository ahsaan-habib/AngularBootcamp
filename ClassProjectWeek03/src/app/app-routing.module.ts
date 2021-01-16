import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './pages/landing/landing.component';
import {AboutComponent} from './pages/about/about.component';

const routes: Routes = [
  {path: 'landing', component: LandingComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: '/landing', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
