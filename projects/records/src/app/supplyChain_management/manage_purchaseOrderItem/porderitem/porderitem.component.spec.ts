import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorderitemComponent } from './porderitem.component';

describe('PorderitemComponent', () => {
  let component: PorderitemComponent;
  let fixture: ComponentFixture<PorderitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorderitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorderitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
