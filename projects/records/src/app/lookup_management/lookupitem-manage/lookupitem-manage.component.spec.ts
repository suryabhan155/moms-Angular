import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupitemManageComponent } from './lookupitem-manage.component';

describe('LookupitemManageComponent', () => {
  let component: LookupitemManageComponent;
  let fixture: ComponentFixture<LookupitemManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookupitemManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupitemManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
