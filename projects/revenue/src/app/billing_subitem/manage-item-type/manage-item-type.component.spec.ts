import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageItemTypeComponent } from './manage-item-type.component';

describe('ManageItemTypeComponent', () => {
  let component: ManageItemTypeComponent;
  let fixture: ComponentFixture<ManageItemTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageItemTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageItemTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
