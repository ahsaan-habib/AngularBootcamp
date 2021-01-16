import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/components/header/header.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { LandingComponent } from './pages/landing/landing.component';
import { AboutComponent } from './pages/about/about.component';
import { CardComponent } from './shared/component/card/card.component';
import { BoxListComponent } from './shared/component/box-list/box-list.component';
import {HttpService, StudentService, TeacherService, UrlService} from './common/services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    AboutComponent,
    CardComponent,
    BoxListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    ],

  providers: [ HttpService, UrlService, StudentService, TeacherService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
