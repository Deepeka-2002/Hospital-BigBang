import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.css']
})
export class SpecialitiesComponent {

  constructor(private router :Router ,private registrationService: RegistrationService){
  }
    ngOnInit(){
      this.getDepartment();
    };
  
  Depts !: any;

public getDepartment():void{
  this.registrationService.getDepts().subscribe(ress =>{
    this.Depts = ress
    console.log(this.Depts)
  }
  )
}

}
