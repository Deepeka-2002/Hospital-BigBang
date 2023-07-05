import { Component, OnInit, ViewChild } from '@angular/core';
import { LoggedInUserModel } from './model/loggedinuser.model';
import { Router } from '@angular/router';
import { SignupService } from '../service/signup.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { RegistrationService } from '../service/registration.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('register_form') registerForm: NgForm;
  showError: boolean = false;
  registration_status = false;
  status =false;

  public signup_form!:FormGroup;

   register!:any;

  loggedInUser:LoggedInUserModel;

  constructor(private router :Router , private signupService : SignupService,private registrationService: RegistrationService, private fb:FormBuilder)
  {
    // this.register = new registerModel();
    this.register =
    {
   
      email:"",
      firstName: "",
      lastName: "",
      gender: "",
      role: "",
      password: "",
      hashKey: "",
      passwordClear: "",
      depName:"",
      availableStatus:true
      
    }
    this.loggedInUser = new LoggedInUserModel();

  }

ngOnInit() {
  this.getDepartment();
  this.signup_form = this.fb.group({
    username:['', Validators.required]
  })
}

Depts !: any;

public getDepartment():void{
  this.registrationService.getDepts().subscribe(ress =>{
    this.Depts = ress
    console.log(this.Depts)
  }
  )
}

  addGender(gender:any){
    this.register.gender = gender;
  }

  onPost() :void
  {
    if (this.registerForm.valid)
    {
   
       
      if(this.register.role === "Doctor")
      {
        this.registrationService.AddDoctor(this.register).subscribe(result => 
          {
           
            this.registration_status = true;
        
          }
          
          );
          
        console.log("register in component");
        this.registration_status = true;
      }
      else
      {
        const { depName, availableStatus, ...userData } = this.register;
        userData.depName = "null";
        userData.availableStatus = false;
        this.registrationService.AddUser(userData)
          .subscribe(result => 
            {
             
              this.status = true;
            
            }
            
            );
        }
      }
  
        
        
      }
      
    
      login_here()
      {
        this.router.navigateByUrl('login');
      }
      closePopup(): void {
        this.registration_status = false;
         // Close the registration status pop-up
      }
      closePopup1(): void {
        this.status = false;
        this.router.navigateByUrl('login'); // Close the registration status pop-up
      }
    
    }
    

    
