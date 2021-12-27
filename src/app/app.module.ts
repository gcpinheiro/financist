import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { RegisterComponent } from './features/register/register.component';
// import { InputComponent } from './shareds/input/input.component';
import { InputModule } from './shareds/input/input.module';
import { HeaderComponent } from './shareds/header/header.component';
import { LeftBarComponent } from './shareds/left-bar/left-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    HeaderComponent,
    LeftBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
