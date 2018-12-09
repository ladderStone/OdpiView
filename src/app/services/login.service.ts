import { Injectable } from '@angular/core';
//import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  private loggedInStatus = false;
  constructor(private http:HttpClient) { }

  setLoggedIn(value : boolean){
    this.loggedInStatus = value;
  }

  get isLoggedIn(){
    return this.loggedInStatus;
  }

  getUserDetails(email, password){
    
  return this.http.get('http://localhost:8080/loginUser?email='+email+'&password='+password,
    
     {responseType: 'json'})
  }

  saveUser(email,firstName,lastName,password,ssoId,userProfiles){
    
    return this.http.post('http://localhost:8080/addUser',
    {email,firstName,lastName,password,ssoId,userProfiles},
      {responseType:'text'})
  }
}
