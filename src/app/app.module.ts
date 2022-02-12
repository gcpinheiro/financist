import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { CardsComponent } from './shareds/left-bar/components/cards/cards.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { RegisterAccountsComponent } from './features/register-accounts/register-accounts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from './shareds/modal/modal.module';
import { ModalComponent } from './shareds/modal/modal.component';
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { ButtonComponent } from './shareds/button/button.component';
import { IndicatorsComponent } from './features/indicators/indicators.component';
import { ViewFinancialAccountComponent } from './features/view-financial-account/view-financial-account.component';
import { TopBarModule } from './shareds/top-bar/top-bar.module';
registerLocaleData(localePt)



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    LeftBarComponent,
    ButtonIconComponent,
    CircleProgressBarComponent,
    CardsComponent,
    PageNotFoundComponent,
    RegisterAccountsComponent,
    ButtonComponent,
    IndicatorsComponent,
    ViewFinancialAccountComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputModule,
    FormsModule,
    HttpClientModule,
    ModalModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    TopBarModule
  ],
  providers: [ModalComponent, {
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
