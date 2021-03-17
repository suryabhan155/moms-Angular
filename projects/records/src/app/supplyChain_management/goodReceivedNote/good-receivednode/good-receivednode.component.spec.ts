import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodReceivednodeComponent } from './good-receivednode.component';

describe('GoodReceivednodeComponent', () => {
  let component: GoodReceivednodeComponent;
  let fixture: ComponentFixture<GoodReceivednodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodReceivednodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodReceivednodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
