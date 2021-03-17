import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupitemComponent } from './lookupitem.component';

describe('LookupitemComponent', () => {
  let component: LookupitemComponent;
  let fixture: ComponentFixture<LookupitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookupitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
