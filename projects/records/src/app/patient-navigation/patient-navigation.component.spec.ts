import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientNavigationComponent } from './patient-navigation.component';

describe('PatientNavigationComponent', () => {
  let component: PatientNavigationComponent;
  let fixture: ComponentFixture<PatientNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
