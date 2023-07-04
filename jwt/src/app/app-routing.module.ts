import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OtherComponentComponent } from './other-component/other-component.component';
import { DemoComponent } from './demo/demo.component';
import { SpecialitiesComponent } from './specialities/specialities.component';
import { ProceduresComponent } from './procedures/procedures.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AdmindoctorComponent } from './admindoctor/admindoctor.component';
import { DoctorComponent } from './doctor/doctor.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'other',component:OtherComponentComponent},
  {path:'demo',component:DemoComponent},
  {path:'specialities',component:SpecialitiesComponent},
  {path:'treatment',component:ProceduresComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'admindoctor',component:AdmindoctorComponent},
  {path:'doctor',component:DoctorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
