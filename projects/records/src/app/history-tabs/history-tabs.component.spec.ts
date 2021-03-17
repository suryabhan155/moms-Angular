import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryTabsComponent } from './history-tabs.component';

describe('HistoryTabsComponent', () => {
  let component: HistoryTabsComponent;
  let fixture: ComponentFixture<HistoryTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
