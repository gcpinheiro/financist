import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariedAccountsComponent } from './varied-accounts.component';

describe('VariedAccountsComponent', () => {
  let component: VariedAccountsComponent;
  let fixture: ComponentFixture<VariedAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariedAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariedAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
