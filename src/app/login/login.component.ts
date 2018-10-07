import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../services/login.service';
import {AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular-6-social-login';
import {AuthApiService} from '../services/auth-api.service';
import {UserService} from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public responseData: any;
  public userPostData = {
    email: '',
    firstName: '',
    password:'',
    lastName:'',
    ssoId:'',
    userProfiles: []
    };
    
    userProfileTemp={
      id:1,
      type:'USER'
    }
  
  constructor(private loginService:LoginService, 
                private router:Router,
                private socialAuthService: AuthService,
              private authApiService: AuthApiService,
            private user: UserService) { }


  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } 

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        this.apiConnection(userData);
      }
    );
  }

  apiConnection(data){
    this.userPostData.email = data.email;
    this.userPostData.firstName = data.name;
    //this.userPostData.provider = data.provider;
    //this.userPostData.id = data.id;
    this.userPostData.password= data.id;
    this.userPostData.lastName = data.name;
    this.userPostData.ssoId=data.name;
    this.userPostData.userProfiles.push(this.userProfileTemp);
    //this.userPostData.provider_pic = data.image;
    //this.userPostData.token = data.token;
    console.log("In apiConnection");
    console.log(this.userPostData);
    this.authApiService.postData(this.userPostData, 'addUser').then(
      result => {
         this.responseData = result;
         if (this.responseData.userData) {
          this.user.storeData(this.responseData.userData);
         }
      },
      err => {
         console.log('error');
      }
    );
  }
  
  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

    this.loginService.getUserDetails(username, password).subscribe(data => {
      console.log(data);

      if(data.credentialsNonExpired){
        this.loginService.setLoggedIn(true); 
        this.router.navigate(['admin']);
      }else{
        window.alert('Bad Credentials...');
      }


      window.alert('Done');
    });
    
  }

}
