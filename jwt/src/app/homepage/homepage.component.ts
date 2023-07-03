import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent 
{
  flag:boolean = false;
  flag1:boolean=false;
  constructor()
  {
    if (localStorage.getItem("role")=="SuperAdmin")
    {
      this.flag1=true;
    }
    else if(localStorage.getItem("role")=="Doctor")
    {
      this.flag=true;
    }
  }
  

}
