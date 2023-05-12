import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { FooterComponent } from './footer/footer.component';
import { HeadlineComponent } from './headline/headline.component';
import { Ejercicio2Component } from './ejercicio2/ejercicio2.component';
import { Ejercicio3Component } from './ejercicio3/ejercicio3.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  declarations: [
    AppComponent,
    LandingComponent,
    Ejercicio1Component,
    FooterComponent,
    HeadlineComponent,
    Ejercicio2Component,
    Ejercicio3Component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
