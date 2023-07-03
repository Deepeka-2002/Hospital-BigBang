import { Component, OnInit, ViewChild } from '@angular/core';
import { LoggedInUserModel } from './model/loggedinuser.model';
import { Router } from '@angular/router';
import { SignupService } from '../service/signup.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { RegistrationService } from '../service/registration.service';
// import validation from '../helper/validation';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('register_form') registerForm: NgForm;
  showError: boolean = false;
  registration_status = false;

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
    
    this.loggedInUser=new LoggedInUserModel();

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
      // this.registrationService.postRegistrationData(this.register);
      // this.registrationService.setRegistrationData(this.register);
       
      if(this.register.role === "Doctor")
      {
        this.registrationService.AddDoctor(this.register).subscribe(result => 
          {
           
            alert("You will be added after the Admin approval");
          }
          
          );
          ;
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
             
              alert("User added");
            }
            
            );
        }
      }
  
        // this.loggedInUser = setRegistrationData as LoggedInUserModel;
        // console.log(this.loggedInUser);
        
        // localStorage.setItem("token",this.loggedInUser.token);
        // localStorage.setItem("UserID",this.loggedInUser.id);
        // localStorage.setItem("role",this.loggedInUser.role);
        // this.registration_status = true;
        // setTimeout(() => {
        //   this.router.navigate(['login']);
        // }, 3000);
        // alert(`\t ........Registration successfull........
        //   \n your user id is : ${this.loggedInUser.id} and your password is first 4 letters of your name + your birth date and month `);
        
      }
      // err=>{
      //   console.log(err)
    
      login_here()
      {
        this.router.navigateByUrl('login');
      }
    }
    // else 
    // {
    //   this.showError = true; // Show the error message
    // }

    
    
  



// export class registerModel
// {

//          id:string="";
//          email:string="";
//          firstName: string="";
//          lastName: string="";
//          gender: string="";
//          role: string="";
//          password: string="";
//          hashKey: string="";
//          passwordClear: string=""

// }