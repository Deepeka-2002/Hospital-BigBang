import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { registerModel } from "../register/model/register.model";
import { UserDTOModel } from "../register/model/userDTO.model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {


  private register: registerModel[] = [];

  constructor(private http:HttpClient)
    {

    }

  // setRegistrationData(data: any): void {
  //   this.registrationData = data;
  // }

  // getRegistrationData(): any {
  //   return this.registrationData;
  // }
  
  public AddDoctor(register: registerModel) : Observable<any>
  {
    return this.http.post(`https://localhost:7192/api/Dummy`,register);
  }


  public AddUser(register: registerModel) : Observable<any>
  {
    return this.http.post(`https://localhost:7192/api/User/Register`,register);
  }

  public getDummy():any{
    return this.http.get(`https://localhost:7192/api/Dummy`);
  }

  public getDepts():any{
    return this.http.get(`https://localhost:7192/api/Department`);
  }

  public getDoc():any{
    return this.http.get(`https://localhost:7192/api/Users/FilterDoctors`);
  }

  public getApp():any{
    return this.http.get(`https://localhost:7192/api/Appointment`);
  }

public postRegistrationData(register:registerModel){
    return this.http.post(`https://localhost:7192/api/User/Register`, register);
  }

  public AddAppointment(customer: any) : Observable<any>
  {
    return this.http.post(`https://localhost:7192/api/Appointment`,customer);
  }
  
  public DeleteDoctorById(id:any):Observable<any>
  {
   return this.http.delete(`https://localhost:7192/api/Dummy/${id}`);
  }
  public DeleteDoctorByIds(id:any):Observable<any>
  {
   return this.http.delete(`https://localhost:7192/api/Users/${id}`);
  }

  public DeleteAppointmentByIds(id:any):Observable<any>
  {
   return this.http.delete(`https://localhost:7192/api/Appointment/${id}`);
  }

  public getUserId(email:any):Observable<any>
  {
   return this.http.get(`https://localhost:7192/api/Users/${email}`);
  }

  public DeleteDoctor(id:any):Observable<any>
  {
   return this.http.delete(`https://localhost:7192/api/Dummy/${id}`);
  }
}
