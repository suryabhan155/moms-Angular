import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodRecvednoteitemComponent } from './good-recvednoteitem.component';

describe('GoodRecvednoteitemComponent', () => {
  let component: GoodRecvednoteitemComponent;
  let fixture: ComponentFixture<GoodRecvednoteitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodRecvednoteitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodRecvednoteitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
