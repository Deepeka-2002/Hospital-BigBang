import { Component } from '@angular/core';
import { SignupService } from '../service/signup.service';
import { UserDTOModel } from '../register/model/userDTO.model';

import { LoggedInUserModel } from '../register/model/loggedinuser.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login_status =false;
  userDTO:UserDTOModel
  loggedInUser:LoggedInUserModel
  LoginId: any;
  

  constructor(private signupService : SignupService, private router : Router, private route:ActivatedRoute){
    this.userDTO=new UserDTOModel();
    this.loggedInUser=new LoggedInUserModel

  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const LoginId = params['LoginId'];
      // Use the loginId as needed in the NextComponent
    });
  }
  Login(){

    this.signupService.userLogin(this.userDTO).subscribe(data=>{
      
      this.loggedInUser = data as LoggedInUserModel;
      console.log(this.loggedInUser);
      
      localStorage.setItem("token",this.loggedInUser.token);
      localStorage.setItem("email",this.loggedInUser.email);
      localStorage.setItem("role",this.loggedInUser.role);
      localStorage.setItem("login", new Date().toDateString());
 

      this.LoginId = localStorage.getItem("LId");
      
      this.login_status = true;
  });
  (error)  => {
    alert("Error Occured");
    }
}

closePopup(): void {
  this.login_status = false;
   
  if(this.loggedInUser.role==="SuperAdmin")
      {
        
      this.router.navigateByUrl('other');
    }
    else if(this.loggedInUser.role==="Doctor"){
      this.router.navigateByUrl('doctor')
    }
    else{
      this.router.navigateByUrl('homepage');
    }
  // Close the registration status pop-up
}

  move(){
    this.router.navigateByUrl('register');
  }
}
