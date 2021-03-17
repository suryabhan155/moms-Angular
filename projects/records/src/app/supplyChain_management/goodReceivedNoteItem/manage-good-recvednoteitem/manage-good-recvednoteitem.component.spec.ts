import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGoodRecvednoteitemComponent } from './manage-good-recvednoteitem.component';

describe('ManageGoodRecvednoteitemComponent', () => {
  let component: ManageGoodRecvednoteitemComponent;
  let fixture: ComponentFixture<ManageGoodRecvednoteitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageGoodRecvednoteitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGoodRecvednoteitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
