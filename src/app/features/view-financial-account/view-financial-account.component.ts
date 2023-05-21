import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  FinancialAccountList,
  FinancialAccountResponse,
} from 'src/app/core/types/financial_account';
import { ViewFinancialAccountService } from './view-financial-account.service';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-view-financial-account',
  templateUrl: './view-financial-account.component.html',
  styleUrls: ['./view-financial-account.component.sass'],
})
export class ViewFinancialAccountComponent implements OnInit {
  displayedColumns: string[] = [
    'Compra',
    'Data Compra',
    'Valor',
    'Data pagamento',
    'Tipo',
    'Parcela',
  ];
  dataSource: FinancialAccountList[] = [];

  total = 0;

  range = new FormGroup({
    start: new FormControl(null),
    end: new FormControl(null),
  });

  constructor(
    private viewFinancialAccoutService: ViewFinancialAccountService
  ) {}

  ngOnInit(): void {
    this.viewFinancialAccoutService.getFinancialAccount().subscribe((data) => {
      this.dataSource = data.results;
      this.total = data.total;
      console.log('deu bom', data);
    });
  }
}
