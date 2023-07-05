import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit{


  status:boolean;
  constructor(private router :Router ,private registrationService: RegistrationService, private route :ActivatedRoute){
  }

   LoginId:any

    ngOnInit(){
      this.getAppointments();
      this.route.queryParams.subscribe(params => {
        this.LoginId = params['LoginId'];
      });
     
    };

  Appointments !: any;

  public getAppointments():void{
    this.registrationService.getApp().subscribe(ress =>{
      this.Appointments = ress
      console.log(this.Appointments)
    }
    )
  }

  public Decline(id:any) : void{
    this.Appointments=this.Appointments.filter((appo:any) => appo.id !== id);
  
  this.registrationService.DeleteAppointmentByIds(id).subscribe(
    
    (result) => {
      this.status=true;
    },
    (error)  => {
      alert("Error Occured");
      }
  );
}

closePopup(): void {
  this.status = false; // Close the registration status pop-up
}



}
