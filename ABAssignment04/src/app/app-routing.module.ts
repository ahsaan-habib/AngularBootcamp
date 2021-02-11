import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { DistrictComponent } from './pages/district/district.component';
import { LandingComponent } from './pages/landing/landing.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [

  {path: 'landing' , component: LandingComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'district', component: DistrictComponent},
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
  {path: '**' , component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
