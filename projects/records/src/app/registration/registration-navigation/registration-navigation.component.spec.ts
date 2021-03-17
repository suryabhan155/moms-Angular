import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationNavigationComponent } from './registration-navigation.component';

describe('RegistrationNavigationComponent', () => {
  let component: RegistrationNavigationComponent;
  let fixture: ComponentFixture<RegistrationNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
