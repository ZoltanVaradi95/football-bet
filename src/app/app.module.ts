import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptorService } from './core/services/auth.interceptor';
import { MainModule } from './main/main.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { DisplayScore } from './main/pipe/display-score.pipe';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MainModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
