import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../Models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL = 'https://api.escuelajs.co/api/v1 '

  constructor(private Client:HttpClient) { }

  //register

    register(user:IUser):Observable<any>
    {
      return this.Client.post<any>(`${this.BASE_URL}/auth/register`,user)
    }

  //login

    login(user:any):Observable<any>{
      return this.Client.post<IUser>(`https://api.escuelajs.co/api/v1/auth/login`,user)

    }

  //logout
    logout(){
      localStorage.clear()

    }
    getToken():boolean{
      if(localStorage.getItem('token')){
        return true;
      }
      else{
        return false;
      }
    }
}
