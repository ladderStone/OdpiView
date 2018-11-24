import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private myService:AuthServiceService) { }

  ngOnInit() {
  }
  signInWithGoogle(){
    this.myService.signInWithGoogle();
  }

}
