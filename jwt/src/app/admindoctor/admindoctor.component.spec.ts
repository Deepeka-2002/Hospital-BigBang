import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindoctorComponent } from './admindoctor.component';

describe('AdmindoctorComponent', () => {
  let component: AdmindoctorComponent;
  let fixture: ComponentFixture<AdmindoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmindoctorComponent]
    });
    fixture = TestBed.createComponent(AdmindoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
