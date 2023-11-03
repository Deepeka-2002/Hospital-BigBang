import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupService } from '../service/signup.service';
import { SpecialitiesComponent } from './specialities.component';
import { RegistrationService } from '../service/registration.service';

describe('SpecialitiesComponent', () => {
  let component: SpecialitiesComponent;
  let fixture: ComponentFixture<SpecialitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialitiesComponent]
    });
    fixture = TestBed.createComponent(SpecialitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
