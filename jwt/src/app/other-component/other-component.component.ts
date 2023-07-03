import { Component } from '@angular/core';
import { RegistrationService } from '../service/registration.service';
import { registerModel} from '../../app/register/model/register.model';


@Component({
  selector: 'app-other-component',
  templateUrl: './other-component.component.html',
  styleUrls: ['./other-component.component.css']
})
export class OtherComponentComponent {
    
 
    // dum !: any;
  
    constructor(private registrationService: RegistrationService) {

    //   this.dum =
    // {
    //   id:0,
    //   email:"",
    //   firstName: "",
    //   lastName: "",
    //   gender: "",
    //   role: "",
    //   password: "",
    //   hashKey: "",
    //   passwordClear: "",
    //   depName:"",
    //   availableStatus:true
      
    // }
      // this.registrationData = this.registrationService.getRegistrationData();
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

    public Approve(dum:any){

      console.log(dum);
      const { id, ...dum1 } = dum;
      dum1.hashKey="";
      dum1.password="";
      
      this.registrationService.postRegistrationData(dum1).subscribe(data =>{
         console.log("success");
        // Handle success response if needed
      })
      this.registrationService.DeleteDoctor(dum.id).subscribe(
        // res=>{
        //   alert("deleted")
        // }
        (result) => { alert("Doctor Deleted");},
        (error)  => {
          alert("Error");
          }
      )

    }

    public Decline(dum:any){

      this.registrationService.DeleteDoctorById(dum.id).subscribe(
        // res=>{
        //   alert("deleted")
        // }
        (result) => { alert("Staff Deleted");},
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
// export class Model
// {

//          id:number;
//          email:string="";
//          firstName: string="";
//          lastName: string="";
//          gender: string="";
//          role: string="";
//          password: string="";
//          hashKey: string="";
//          passwordClear: string="";
//          depName: string="";
//         availableStatus:boolean=true;

// }
 