import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Users } from 'src/app/core/types/users_d';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  isDisabled: boolean = false;
  registerFormSend: Users = {
    email: '',
    password: '',
    username: ''
  };

  validatorForms = {
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: ''
  }

  @Output() modelChange = new EventEmitter<any>();
  @Output() onKeyPress = new EventEmitter<any>();

  constructor(private _registerService: RegisterService) { }

  ngOnInit(): void {

  }

  // public handleChangeModel(event: any, variable: any) {
  //   console.log(`${variable}: `,event.target.value)

  // };

  public handleChangeModel(event: any) {
    this.modelChange.emit(event.target.value);
    this.onKeyPress.emit();
    console.log(this.validatorForms.email)
  };

  public validaFormulario(): boolean{
    if(this.validatorForms.email == this.validatorForms.confirmEmail && this.validatorForms.password == this.validatorForms.confirmPassword){
      console.log("Dados validados")
      this.registerFormSend.email = this.validatorForms.email;
      this.registerFormSend.password = this.validatorForms.password;
      return true;
    }
    else{ return false}
  }

  public submit(){
    if(this.validaFormulario()){
      this.validaFormulario();
      console.log(this.validatorForms)
      this._registerService.registerUser(this.registerFormSend);
    }

  }
}
