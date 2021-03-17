import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageItemSubtypeComponent } from './manage-item-subtype.component';

describe('ManageItemSubtypeComponent', () => {
  let component: ManageItemSubtypeComponent;
  let fixture: ComponentFixture<ManageItemSubtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageItemSubtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageItemSubtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
