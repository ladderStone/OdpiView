import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SignUpService {

  userProfileTemp={
    id:1,
    type:'USER'
  }

  constructor(private http:HttpClient) { }

  signUp(userName, password, email, contactNumber, experience){
    return this.http.post('http://localhost:8080/addUser',{
        "experience":experience,
       "userName": userName,
       "password": password,
       "email": email,
       "contactNumber": contactNumber,
      
       "userProfiles": [
           {
               "id": 1,
               "type": "USER"
           }
       ]
   }).subscribe(data => console.log(data));
  }

}
