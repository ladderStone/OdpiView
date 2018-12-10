import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private myService:AuthServiceService, private loginService:LoginService,
              private router:Router) { }

  ngOnInit() {
  }
  signInWithGoogle(){
    
    this.myService.signInWithGoogle();
  }

  signInWithFacebook(){
    this.myService.signInWithFacebook();
  }

  loginUser(event){
    
    event.preventDefault();
    const target = event.target;
    const email = target.querySelector('#email').value;
    const password = target.querySelector('#password').value;

    this.loginService.getUserDetails(email, password).subscribe(data => {
      /*if(data.credentialsNonExpired){
        this.loginService.setLoggedIn(true); 
        this.router.navigate(['admin']);
      }else{
        window.alert('Bad Credentials...');
      }*/


      window.alert('Done');
    });
    
  }
}
