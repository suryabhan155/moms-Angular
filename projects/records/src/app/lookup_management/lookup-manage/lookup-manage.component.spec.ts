import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupManageComponent } from './lookup-manage.component';

describe('LookupManageComponent', () => {
  let component: LookupManageComponent;
  let fixture: ComponentFixture<LookupManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookupManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
