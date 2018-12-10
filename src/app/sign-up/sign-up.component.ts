import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../services/sign-up.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private signUpService : SignUpService) { }

  ngOnInit() {
  }

  signUp(event){
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    const email = target.querySelector('#email').value;
    const contactNumber = target.querySelector('#contactNumber').value;
    const experience = target.querySelector('#experience').value;
    this.signUpService.signUp(username,password,email,contactNumber,experience);
    
    

  }
}
