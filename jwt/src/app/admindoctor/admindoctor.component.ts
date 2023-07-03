import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-admindoctor',
  templateUrl: './admindoctor.component.html',
  styleUrls: ['./admindoctor.component.css']
})
export class AdmindoctorComponent implements OnInit{

  constructor(private router :Router ,private registrationService: RegistrationService){
  }
    ngOnInit(){
      this.getDoctors();
     
    };

  Doctors !: any;

  public getDoctors():void{
    this.registrationService.getDoc().subscribe(ress =>{
      this.Doctors = ress
      console.log(this.Doctors)
    }
    )
  }

  public Decline(id:any) : void{
    this.Doctors=this.Doctors.filter((doc:any) => doc.id !== id);
  
  this.registrationService.DeleteDoctorByIds(id).subscribe(
    // res=>{
    //   alert("deleted")
    // }
    (result) => { alert("Doctor Deleted");},
    (error)  => {
      alert("Error");
      }
  );
}

}
