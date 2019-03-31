import { Injectable } from '@angular/core';
//import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


interface myData  {
  success: boolean,
  message: String,
  credentialsNonExpired:boolean
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedInStatus = false;
  constructor(private http:HttpClient) { }

  setLoggedIn(value : boolean){
    this.loggedInStatus = value;
  }

  get isLoggedIn(){
    return this.loggedInStatus;
  }

  getUserDetails(firstName, password){
  return this.http.post<myData>('http://localhost:8080/secured/all',
    { 
      firstName,
        password
    },
     {responseType: 'json'})
  }

   getUserByEmail(email){
    console.log("email:" + email);
    return this.http.get('http://localhost:8080/userByEmail?email='+email,    
       {responseType: 'json'})
       .subscribe(data => {console.log("jjjjj:"+data);return data});
  }

  saveUser(email,firstName,lastName,password,ssoId,userProfiles){
    debugger;
    return this.http.post('http://localhost:8080/addUser',
    {email,firstName,lastName,password,ssoId,userProfiles},
      {responseType:'text'})
  }
}
