import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/components/header/header.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { LandingComponent } from './pages/landing/landing.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CardComponent } from './shared/components/card/card.component';
import { DataboxComponent } from './shared/components/databox/databox.component';
import { HttpService } from './common/services/http.service';
import { UrlService } from './common/services/url.service';
import { HttpClientModule } from '@angular/common/http';
import { StudentService, TeacherService } from './common/services';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    AboutComponent,
    PageNotFoundComponent,
    CardComponent,
    DataboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService, UrlService, StudentService, TeacherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
