import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import listUsers from './../mocks/user.json'
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

public login(user: string){
  // const endpoint = user;
  // return this._httpClient.post(endpoint, user);
  const response = listUsers.users.find(data => data.email == user);
  if(response){
    localStorage.setItem("username", response.name);
    return true;
  }
  else{
    return false;
  }
}
}
