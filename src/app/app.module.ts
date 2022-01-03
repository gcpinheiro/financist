import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { RegisterComponent } from './features/register/register.component';
// import { InputComponent } from './shareds/input/input.component';
import { InputModule } from './shareds/input/input.module';
import { LeftBarComponent } from './shareds/left-bar/left-bar.component';
import { ButtonIconComponent } from './shareds/button-icon/button-icon.component';
import { TopBarComponent } from './shareds/top-bar/top-bar.component';
import { CircleProgressBarComponent } from './shareds/circle-progress-bar/circle-progress-bar.component';
import { FixedAccountsComponent } from './features/fixed-accounts/fixed-accounts.component';
import { VariedAccountsComponent } from './features/varied-accounts/varied-accounts.component';
import { CardsComponent } from './shareds/left-bar/components/cards/cards.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    LeftBarComponent,
    ButtonIconComponent,
    TopBarComponent,
    CircleProgressBarComponent,
    FixedAccountsComponent,
    VariedAccountsComponent,
    CardsComponent,
    PageNotFoundComponent,
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
