import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BilingManageComponent } from './biling-manage.component';

describe('BilingManageComponent', () => {
  let component: BilingManageComponent;
  let fixture: ComponentFixture<BilingManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilingManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BilingManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
