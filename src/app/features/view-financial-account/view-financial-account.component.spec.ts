import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFinancialAccountComponent } from './view-financial-account.component';

describe('ViewFinancialAccountComponent', () => {
  let component: ViewFinancialAccountComponent;
  let fixture: ComponentFixture<ViewFinancialAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFinancialAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFinancialAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
