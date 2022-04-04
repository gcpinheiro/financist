import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import user from './../mocks/user.json'
import { BehaviorSubject } from 'rxjs';
import { responseUsers, Users } from '../types/users_d';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  $data = new BehaviorSubject(null);

  constructor(private _httpClient: HttpClient) { }

/**
* Verifica nos dados mockados se existem o email passado por parâmetro
*@param email string
*@return boolean Retorna o estado da operação
*/

public login(user: any){
  const endpoint = 'http://localhost:3000/login';
  return this._httpClient.post(endpoint, user);
  // const response = user.users.find(user => user.email == email);
  // if(response){
  //   localStorage.setItem("user", JSON.stringify(response));
  //   return true;
  // }
  // else{
  //   return false;
  // }
}
}
