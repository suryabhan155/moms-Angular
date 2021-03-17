import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapmasterManageComponent } from './mapmaster-manage.component';

describe('MapmasterManageComponent', () => {
  let component: MapmasterManageComponent;
  let fixture: ComponentFixture<MapmasterManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapmasterManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapmasterManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
