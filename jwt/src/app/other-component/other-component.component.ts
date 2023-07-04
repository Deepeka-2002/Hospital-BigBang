import { Component } from '@angular/core';
import { RegistrationService } from '../service/registration.service';
import { registerModel} from '../../app/register/model/register.model';


@Component({
  selector: 'app-other-component',
  templateUrl: './other-component.component.html',
  styleUrls: ['./other-component.component.css']
})
export class OtherComponentComponent {
    
 
    status = false;
    status1 =false;
  
    constructor(private registrationService: RegistrationService) {

   
    }

 
    id !:number;
    Dummy !: any;

    ngOnInit():void{
      this.getDummyDetails();
    }

    public getDummyDetails():void{
      this.registrationService.getDummy().subscribe(ress =>{
        this.Dummy = ress
        console.log(this.Dummy);
      }
      )
    }
    data1 !: any;

    public Approve(dum:any){

      console.log(dum);
      const { id, ...dum1 } = dum;
      dum1.hashKey="";
      dum1.password="";
      
      this.registrationService.postRegistrationData(dum1).subscribe(data =>{
         console.log(data);
         this.data1= data;
        localStorage.setItem("LId",this.data1.id); 

        // Handle success response if needed
      })
      this.registrationService.DeleteDoctor(dum.id).subscribe(
        // res=>{
        //   alert("deleted")
        // }
        (result) => { 
          this.status =true;
         
      },
        (error)  => {
          alert("Error");
          }
      )

    }

    closePopup(): void {
      this.status = false; // Close the registration status pop-up
    }
    closePopup1(): void {
      this.status1 = false; // Close the registration status pop-up
    }

    public Decline(dum:any){

      this.registrationService.DeleteDoctorById(dum.id).subscribe(
        // res=>{
        //   alert("deleted")
        // }
        (result) => {
          this.status1 = true;
        },
        (error)  => {
          alert("Error");
          }
      )
      // this.Dummy=this.Dummy.filter((dum:any) => dum.id !== id);
      // this.registrationService.DeleteDoctorById(this.id)
      // .subscribe( 
      //   result => {
      //     alert('Deleted'); // Set the add hotel alert message
      //   }
      //   );
      }

}

 