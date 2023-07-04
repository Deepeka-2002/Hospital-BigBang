import { Component } from '@angular/core';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  
  doc:any = {firstName :'',lastName:'',email : '', availableStatus:null, depName:'',gender:'',role:'',password:'',hashKey:''};
  id!: number;

    constructor(private registrationService: RegistrationService){
  }
  ngOnInit()
  {
      this.getDepartment();
  }

  Depts !: any;

public getDepartment():void{
  this.registrationService.getDepts().subscribe(ress =>{
    this.Depts = ress
    console.log(this.Depts)
  }
  )
}

  public UpdateDoctorById(){
    return this.registrationService.UpdateDoctor(this.id ,this.doc)
    .subscribe( 
      result => {
        alert("updated");
         // Set the update hotel alert message
      },
      error => {
        alert("error");
        // Set the update hotel error alert message
      }
      );
  
}
}
