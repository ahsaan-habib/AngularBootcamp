import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { LandingComponent } from './pages/landing/landing.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { SupportComponent } from './pages/support/support.component';

const routes: Routes = [
  {path: 'landing', component: LandingComponent},
  {path: 'about', component: AboutComponent},
  {path: 'resources', component: ResourcesComponent},
  {path: 'support', component: SupportComponent},
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
