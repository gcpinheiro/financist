import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { RegisterComponent } from './features/register/register.component';
import { InputModule } from './shareds/input/input.module';
import { ButtonIconComponent } from './shareds/button-icon/button-icon.component';
import { CircleProgressBarComponent } from './shareds/circle-progress-bar/circle-progress-bar.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { RegisterAccountsComponent } from './features/register-accounts/register-accounts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from './shareds/modal/modal.module';
import { ModalComponent } from './shareds/modal/modal.component';
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ButtonComponent } from './shareds/button/button.component';
import { IndicatorsComponent } from './features/indicators/indicators.component';
import { ViewFinancialAccountComponent } from './features/view-financial-account/view-financial-account.component';
import { TopBarModule } from './shareds/top-bar/top-bar.module';
import { RouterModule } from '@angular/router';
import { LeftBarModule } from './shareds/left-bar/left-bar.module';

import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { TableComponent } from './shareds/table/table.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ButtonIconComponent,
    CircleProgressBarComponent,
    PageNotFoundComponent,
    RegisterAccountsComponent,
    ButtonComponent,
    IndicatorsComponent,
    ViewFinancialAccountComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    InputModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule,
    BrowserAnimationsModule,
    TopBarModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule,
    RouterModule,
    LeftBarModule,
  ],
  providers: [
    ModalComponent,
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
