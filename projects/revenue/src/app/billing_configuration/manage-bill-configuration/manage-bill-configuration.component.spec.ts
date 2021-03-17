import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBillConfigurationComponent } from './manage-bill-configuration.component';

describe('ManageBillConfigurationComponent', () => {
  let component: ManageBillConfigurationComponent;
  let fixture: ComponentFixture<ManageBillConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBillConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBillConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
