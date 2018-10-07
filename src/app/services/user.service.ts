import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public router: Router) { }

  async storeData(data) {
    localStorage.setItem('userData', JSON.stringify(data));
    const newData = await this.getData();
    return this.router.navigate(['home'], newData);
  }
  
  getData() {
    return JSON.parse(localStorage.getItem('userData'));
 }
}
