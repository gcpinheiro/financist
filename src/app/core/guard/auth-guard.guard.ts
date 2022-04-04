import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

	constructor(private router: Router){}

  canActivate( route: ActivatedRouteSnapshot,  state: RouterStateSnapshot): boolean {
   	const username = window.localStorage.getItem('username');
   	if(username){
       console.log("ativou CanActivate")
   		return true;
   	}
   	else{
      console.log("Não ativou CanActivate")
   		this.router.navigate(['login']);
   		return false;
   	}
  }
}
