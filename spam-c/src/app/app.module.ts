import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ResultsComponent } from './results/results.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { CaptchaModule } from 'primeng/captcha';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextModule } from 'primeng/inputtext';
import { WelcomeComponent } from './welcome/welcome.component';
import { LibraryComponent } from './library/library.component';
import { SettingsComponent } from './settings/settings.component';
import { SongRowComponent } from './song-row/song-row.component';
import { PlaylistRowComponent } from './playlist-row/playlist-row.component';

import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { ErrorInterceptor } from './_interceptors/error.interceptor';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ResultsComponent,
    WelcomeComponent,
    LibraryComponent,
    SettingsComponent,
    SongRowComponent,
    PlaylistRowComponent
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
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
