import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAccountsComponent } from './register-accounts.component';

describe('RegisterAccountsComponent', () => {
  let component: RegisterAccountsComponent;
  let fixture: ComponentFixture<RegisterAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
