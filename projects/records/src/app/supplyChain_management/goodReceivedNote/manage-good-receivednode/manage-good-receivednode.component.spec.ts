import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGoodReceivednodeComponent } from './manage-good-receivednode.component';

describe('ManageGoodReceivednodeComponent', () => {
  let component: ManageGoodReceivednodeComponent;
  let fixture: ComponentFixture<ManageGoodReceivednodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageGoodReceivednodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGoodReceivednodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
