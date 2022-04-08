import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-accounts',
  templateUrl: './register-accounts.component.html',
  styleUrls: ['./register-accounts.component.sass']
})
export class RegisterAccountsComponent implements OnInit {

  // data: FormGroup;


  // data = {
  //   nameAccount: '',
  //   valueAccount: '',
  //   accountType: '',
  //   category: '',
  //   hasInstallment: '',
  //   numberInstallment: '',
  //   purchaseDate: '',
  //   payday: ''

  // }

  constructor(private _router: Router ) { }

  ngOnInit(): void {
    // this.data = this._formBuilder.group({
    //   nameAccount: [null],
    //   valueAccount: [null],
    //   accountType: [null],
    //   category: [null],
    //   hasInstallment: [null],
    //   numberInstallment: [null],
    //   purchaseDate: [null],
    //   payday: [null],
    // })
  }

  public submit(){
    // this.data.reset()
  }

  public reset(){
    // this.data.reset()
  }

  // public get valueQtdParcelas(){
  //   return this._formBuilder()  data.hasInstallment === 'a_vista'? 1 : this.numberInstallment;
  // }

  // public get qtdMax(){
  //   return this.hasInstallment === 'parcelado'? 80 : 1;
  // }

  // public get showPayday(){
  //   return this.hasInstallment === 'parcelado'? true : false;
  // }

}
