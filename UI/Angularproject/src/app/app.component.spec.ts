import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { SpecialitiesComponent } from './specialities/specialities.component';
import { ProceduresComponent } from './procedures/procedures.component';
import { OtherComponentComponent } from './other-component/other-component.component';
import { ManageComponent } from './manage/manage.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DemoComponent } from './demo/demo.component';
import { AppointmentComponent } from './appointment/appointment.component';


describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule,FormsModule,ReactiveFormsModule],
    declarations: [AppComponent,RegisterComponent,AppointmentComponent,
                SpecialitiesComponent,ProceduresComponent,OtherComponentComponent,
                ManageComponent,LoginComponent,HomepageComponent,DoctorComponent,
                DemoComponent,]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'HospitalApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('HospitalApp');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('HospitalApp is running!');
  // });
});
