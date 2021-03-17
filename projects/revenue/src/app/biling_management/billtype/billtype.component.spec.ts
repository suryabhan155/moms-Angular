import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BilltypeComponent } from './billtype.component';

describe('BilltypeComponent', () => {
  let component: BilltypeComponent;
  let fixture: ComponentFixture<BilltypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilltypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BilltypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
