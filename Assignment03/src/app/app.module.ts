import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/components/header/header.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { LandingComponent } from './pages/landing/landing.component';
import { AboutComponent } from './pages/about/about.component';
import { DistrictComponent } from './pages/district/district.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CardComponent } from './shared/components/card/card.component';
import { DataboxComponent } from './shared/components/databox/databox.component';
import {DistrictService, HttpService, StudentService, TeacherService, UrlService} from './common/services';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './shared/components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    AboutComponent,
    DistrictComponent,
    PageNotFoundComponent,
    CardComponent,
    DataboxComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService, UrlService, StudentService, TeacherService, DistrictService],
  bootstrap: [AppComponent]
})
export class AppModule { }
