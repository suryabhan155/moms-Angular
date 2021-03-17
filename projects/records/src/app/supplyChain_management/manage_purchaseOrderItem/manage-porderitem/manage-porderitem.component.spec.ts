import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePorderitemComponent } from './manage-porderitem.component';

describe('ManagePorderitemComponent', () => {
  let component: ManagePorderitemComponent;
  let fixture: ComponentFixture<ManagePorderitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePorderitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePorderitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
