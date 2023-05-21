import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FinancialAccountResponse } from 'src/app/core/types/financial_account';

@Injectable({
  providedIn: 'root',
})
export class ViewFinancialAccountService {
  constructor(private httpClient: HttpClient) {}

  getFinancialAccount() {
    return this.httpClient.get<FinancialAccountResponse>(
      'http://127.0.0.1:8000/financial-account'
    );
  }
}
