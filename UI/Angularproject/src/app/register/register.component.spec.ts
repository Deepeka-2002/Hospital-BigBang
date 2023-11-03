import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SignupService } from '../service/signup.service';
import { RegisterComponent } from './register.component';
import { RegistrationService } from '../service/registration.service';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it(`should have title`, () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Registration form');
  });

  it('should have empty properties on initialization', () => {
    expect(component.register.firstName).toEqual('');
    expect(component.register.email).toEqual('');
    expect(component.register.depName).toEqual('');
});
 



});


