import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupmasterManageComponent } from './lookupmaster-manage.component';

describe('LookupmasterManageComponent', () => {
  let component: LookupmasterManageComponent;
  let fixture: ComponentFixture<LookupmasterManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookupmasterManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupmasterManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
