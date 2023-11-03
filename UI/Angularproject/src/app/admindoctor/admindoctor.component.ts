import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-admindoctor',
  templateUrl: './admindoctor.component.html',
  styleUrls: ['./admindoctor.component.css']
})
export class AdmindoctorComponent implements OnInit{

  status:boolean;
  status1:boolean;
  

  constructor(private router :Router ,private registrationService: RegistrationService){
  }
    ngOnInit(){
      this.getDoctors();
      this.getUsers();
     
    };

  Doctors !: any;
  Users !: any;

  public getDoctors():void{
    this.registrationService.getDoc().subscribe(ress =>{
      this.Doctors = ress
      console.log(this.Doctors)
    }
    )
  }

  public getUsers():void{
    this.registrationService.getUse().subscribe(ress =>{
      this.Users = ress
      console.log(this.Users)
    }
    )
  }

  public Decline1(id:any) : void{
    this.Doctors=this.Doctors.filter((doc:any) => doc.id !== id);
  
  this.registrationService.DeleteDoctorByIds(id).subscribe(
    
    (result) => { 
      this.status = true;
    },
    (error)  => {
      alert("Error Occured");
      }
  );
}

  public Decline(id:any) : void{
    this.Users=this.Users.filter((use:any) => use.id !== id);
  
  this.registrationService.DeleteUserByIds(id).subscribe(
   
    (result) => { 
      this.status1 = true;
    },
    (error)  => {
      alert("Error");
      }
  );
}

closePopup(): void {
  this.status = false; // Close the registration status pop-up
}
closePopup1(): void {
  this.status1 = false; // Close the registration status pop-up
}

}
