import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from 'src/app/core/types/users_d';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _httpClient: HttpClient) { }

  public async login(email: string){
    const endpoint = `http://localhost:3000/login?email=${email}`;
    const response = await this._httpClient.get<Users[]>(endpoint).toPromise();
    console.log("Response: ", response)
    if(response[0].username){
      console.log("Tem username")
      localStorage.setItem('username', response[0].username);
    }
    else{
      console.log("Não tem nome")
    }
  }

}
