import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BilingDeleteComponent } from './biling-delete.component';

describe('BilingDeleteComponent', () => {
  let component: BilingDeleteComponent;
  let fixture: ComponentFixture<BilingDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilingDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BilingDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
