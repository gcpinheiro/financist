import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from 'src/app/core/types/users_d';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _httpClient: HttpClient) { }

  public registerUser(user:Users){
    const endpoint = 'http://localhost:3000/register-user';
    return this._httpClient.post<Users>(endpoint, user).toPromise();
  }
}
