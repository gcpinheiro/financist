import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ModalComponent } from 'src/app/shareds/modal/modal.component';
import { ModalService } from 'src/app/shareds/modal/modal.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };
  statusModal = false;
  isDisabled: boolean = true;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _modalService: ModalService,
    @Inject(ModalComponent) private _modal: ModalComponent
    ) {
  }

  ngOnInit(): void {
  }

  public submit(){
    const response = this._authService.login(this.user.email);
    if(response){
      this._router.navigateByUrl('/home');
    }
    else{
     this.statusModal = !this.statusModal;
    }
  }

}
