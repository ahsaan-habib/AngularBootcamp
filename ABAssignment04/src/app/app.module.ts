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
import { BdLocalPipe } from './shared/pipes/bd-local.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {DialogService} from "./common/services/dialog.service";
import { SelectComponent } from './shared/components/select/select.component';
import { FormComponent } from './shared/components/form/form.component';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";

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
    BdLocalPipe,
    DialogComponent,
    SelectComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [HttpService, UrlService, StudentService, TeacherService, DistrictService, DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
