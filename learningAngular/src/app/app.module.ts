import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { AboutComponent } from './pages/about/about.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { SupportComponent } from './pages/support/support.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HeaderComponent } from './common/components/header/header.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { CardComponent } from './shared/components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent,
    ResourcesComponent,
    SupportComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
