import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ModalComponent } from 'src/app/shareds/modal/modal.component';
import { ModalService } from 'src/app/shareds/modal/modal.service';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Users } from 'src/app/core/types/users_d';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  user: Users = {
    email: '',
    password: '',
  };
  statusModal = false;
  isDisabled: boolean = false;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _modalService: ModalService,
    private _loginService: LoginService,
    @Inject(ModalComponent) private _modal: ModalComponent
  ) {}

  ngOnInit(): void {
    this._authService.returnUsers().subscribe((data) => console.log(data));
  }

  public async submit() {
    try {
      // await this._loginService.login(this.user.email);
      await this._authService.login(this.user.email);
      this._router.navigate(['']);
    } catch (error) {
      console.error(error);
    }

    // if(response){
    //   this._router.navigateByUrl('/home');
    // }
    // else if(this.isDisabled == false && response == false){
    //  this.statusModal = !this.statusModal;
    // }
  }
}
