import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './core/guard/auth-guard.guard';
import { HomeComponent } from './features/home/home.component';
import { IndicatorsComponent } from './features/indicators/indicators.component';
import { LoginComponent } from './features/login/login.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { RegisterAccountsComponent } from './features/register-accounts/register-accounts.component';
import { RegisterComponent } from './features/register/register.component';
import { ViewFinancialAccountComponent } from './features/view-financial-account/view-financial-account.component';

const routes: Routes = [

  {
    path: '',
		component: HomeComponent,
		 children: [
		 	{ path: 'home',	component: HomeComponent },

		],
  		canActivate: [AuthGuardGuard]
	},
  { path: 'register-account',
  	component: RegisterAccountsComponent,
    canActivate: [AuthGuardGuard]
  },
      { path: 'view-financial-accounts',	component: ViewFinancialAccountComponent },
      { path: 'indicators',	component: IndicatorsComponent },
      { path: 'reports',	component: IndicatorsComponent },

	{ path: '',	redirectTo: 'login', pathMatch: 'full' },
	{path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: '**', component: PageNotFoundComponent }


  // {
  //   path: '',
  //   component: LoginComponent
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  // {
  //   path: 'register',
  //   component: RegisterComponent
  // },
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  // {
  //   path: 'register-account',
  //   component: RegisterAccountsComponent
  // },
  // {
  //   path: 'view-financial-accounts',
  //   component: ViewFinancialAccountComponent
  // },
  // {
  //   path: 'indicators',
  //   component: IndicatorsComponent
  // },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
