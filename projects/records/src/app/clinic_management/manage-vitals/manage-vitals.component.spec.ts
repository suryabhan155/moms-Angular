import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVitalsComponent } from './manage-vitals.component';

describe('ManageVitalsComponent', () => {
  let component: ManageVitalsComponent;
  let fixture: ComponentFixture<ManageVitalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageVitalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageVitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
