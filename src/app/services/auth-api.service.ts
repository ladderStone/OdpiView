import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
const apiUrl = "http://localhost:8080/";
@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(public http:Http) { 
    console.log('Hello AuthService Provider');
  }


  postData(credentials, type) {
    console.log("credentials");
    console.log(credentials);
    return new Promise((resolve, reject) => {
    const headers = new Headers();
    debugger;
    this.http.post(apiUrl + type, credentials, {headers: headers})
    .subscribe(res => {
         resolve(res.json());
     }, (err) => {
     reject(err);
  });

  });

  }
}
