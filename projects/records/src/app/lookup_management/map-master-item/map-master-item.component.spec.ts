import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapMasterItemComponent } from './map-master-item.component';

describe('MapMasterItemComponent', () => {
  let component: MapMasterItemComponent;
  let fixture: ComponentFixture<MapMasterItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapMasterItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapMasterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
