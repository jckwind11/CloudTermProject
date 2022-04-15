import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ConvertComponent } from './convert/convert.component';
import { ResultsComponent } from './results/results.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from './material-module';

import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { CaptchaModule } from 'primeng/captcha';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextModule } from 'primeng/inputtext';
import { WelcomeComponent } from './welcome/welcome.component';
import { LibraryComponent } from './library/library.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ConvertComponent,
    ResultsComponent,
    WelcomeComponent,
    LibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SkeletonModule,
    TableModule,
    CaptchaModule,
    AccordionModule,
    ProgressSpinnerModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
