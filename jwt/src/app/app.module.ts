import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupService } from './service/signup.service';
import { OtherComponentComponent } from './other-component/other-component.component';
import { RegistrationService } from './service/registration.service';
import { DemoComponent } from './demo/demo.component';
import { SpecialitiesComponent } from './specialities/specialities.component';
import { ProceduresComponent } from './procedures/procedures.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AdmindoctorComponent } from './admindoctor/admindoctor.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ManageComponent } from './manage/manage.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomepageComponent,
    OtherComponentComponent,
    DemoComponent,
    SpecialitiesComponent,
    ProceduresComponent,
    AppointmentComponent,
    AdmindoctorComponent,
    DoctorComponent,
    ManageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SignupService,RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
