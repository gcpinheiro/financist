export interface FinancialAccountResponse {
  total: number;
  results: FinancialAccountList[];
}

export interface FinancialAccountList {
  id_account: number;
  id_users: number;
  name_purchase: string;
  purchase_date: string;
  payment_date: string;
  installment_amount: number;
  number_installments: number;
  current_payment_installments: number;
  type_purchase: string;
  purchase_category: string;
  total_purchase: string;
}
