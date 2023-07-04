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
  public Filter! : any;
  showAppointmentForm: boolean = false;
  userId: any;
  showdoctors: boolean =true;
  DId: any;
  status =false;


  constructor(private formBuilder:FormBuilder,private router :Router ,private registrationService: RegistrationService){
  }
    ngOnInit(){
      this.getDoctors();
      this.init();
    };

  Doctors !: any[];

  private init(): void
  {
    this.appointmentForm = this.formBuilder.group({
      userEmail:[],
      patientName:[],
      gender:[],
      age:[],
      appointmentSchedule:[],
      diseaseDescription:[],
     

    });

    
    this.Filter = this.formBuilder.group({
      depName: ['']
    });
  }

  // public AppointmentDetails():void
  // {

  //   this.registrationService.AddAppointment(this.appointmentForm.value)
  //   .subscribe(result => 
  //     {
       
  //       console.log(result);
  //        alert("Appointment booked ");
  //     }
      
  //     );
      // const userEmail = this.appointmentForm.value.userEmail; // Get the user email from the form
  
      // // Call the service method to get the user ID for the email
      // this.registrationService.getUserId(userEmail).subscribe(response => {
       
      //   this.userId = response.id; // Store the user ID
      //   this.appointmentForm.patchValue({ id: this.userId }); // Update the form with the user ID
      //   this.postAppointment(); // Call the method to post the appointment
        
      
    // }
   public showAppointment(id:any){
      this.DId = id;
      this.showAppointmentForm =true;
   }
        
     AppointmentDetails():void
    {
     this.appointmentForm.value.id = this.DId;
    this.registrationService.AddAppointment(this.appointmentForm.value)
    .subscribe(result => 
      {
       
        console.log(result);
         this.status= true;
      }
      
      );
    }

    

    // private postAppointment(): void {

    // this.registrationService.AddAppointment(this.appointmentForm.value)
    // .subscribe(result => 
    //   {
       
    //     console.log(result);
    //      alert("Appointment booked ");
    //   }
      
    //   );
 

public getDoctors():void{
  this.registrationService.getDoc().subscribe(ress =>{
    this.Doctors = ress;
   
    console.log(this.Doctors)
    this.filteredSpec = this.Doctors;
  }
  )
}


 public depName : string =''
 public filteredSpec: any[] = [];


 public filter(): void {
  this.depName = this.Filter.value.depName; // Get the department name from the form

  if (this.depName) {
    // Filter the doctors based on the department name
    this.filteredSpec = this.Doctors.filter(doc => doc.depName.toLowerCase().includes(this.depName.toLowerCase()));
  } else {
    // If no department name is entered, show all doctors
    this.filteredSpec = this.Doctors;
  }
}
closeAppointment() {
  this.showAppointmentForm = false;
}
closePopup(): void {
  this.status = false; // Close the registration status pop-up
}

}
