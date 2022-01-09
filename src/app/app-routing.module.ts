import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FixedAccountsComponent } from './features/fixed-accounts/fixed-accounts.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { RegisterAccountsComponent } from './features/register-accounts/register-accounts.component';
import { RegisterComponent } from './features/register/register.component';
import { VariedAccountsComponent } from './features/varied-accounts/varied-accounts.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'fixed-account',
    component: FixedAccountsComponent
  },
  {
    path: 'varied-account',
    component: VariedAccountsComponent
  },
  {
    path: 'register-account',
    component: RegisterAccountsComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
