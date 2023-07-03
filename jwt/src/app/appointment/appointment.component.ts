import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../service/registration.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit{

  public appointmentForm! : FormGroup;
  showAppointmentForm: boolean = false;
  userId: any;


  constructor(private formBuilder:FormBuilder,private router :Router ,private registrationService: RegistrationService){
  }
    ngOnInit(){
      this.getDoctors();
      this.init();
    };

  Doctors !: any;

  private init(): void
  {
    this.appointmentForm = this.formBuilder.group({
      userEmail:[],
      patientName:[],
      gender:[],
      age:[],
      appointmentSchedule:[],
      diseaseDescription:[],
      id:[]

    });
  }

  public AppointmentDetails():void
  {
      const userEmail = this.appointmentForm.value.userEmail; // Get the user email from the form
  
      // Call the service method to get the user ID for the email
      this.registrationService.getUserId(userEmail).subscribe(response => {
       
        this.userId = response.id; // Store the user ID
        this.appointmentForm.patchValue({ id: this.userId }); // Update the form with the user ID
        this.postAppointment(); // Call the method to post the appointment
        
      });
    }
    

    private postAppointment(): void {

    this.registrationService.AddAppointment(this.appointmentForm.value)
    .subscribe(result => 
      {
       
        console.log(result);
         alert("Appointment booked ");
      }
      
      );
  }

public getDoctors():void{
  this.registrationService.getDoc().subscribe(ress =>{
    this.Doctors = ress
    console.log(this.Doctors)
  }
  )
}
}
