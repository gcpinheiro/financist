import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-financial-account',
  templateUrl: './view-financial-account.component.html',
  styleUrls: ['./view-financial-account.component.sass']
})
export class ViewFinancialAccountComponent implements OnInit {

  data = [
    {
      nome: 'Notebook',
      dataCompra: '18/07/2021',
      valor: 3999.99,
      tipoCompra: 'Parcelado',
      parcelaAtual: 5,
      qtdParcelas: 10,
      categoria: 'Eletrônicos',
      dataPagamento: '10'
    },
    {
      nome: 'Cadeira',
      dataCompra: '18/07/2021',
      valor: 999.99,
      tipoCompra: 'Parcelado',
      parcelaAtual: 8,
      qtdParcelas: 12,
      categoria: 'Moveis',
      dataPagamento: '10'
    },
    {
      nome: 'Rei do Sanduíche',
      dataCompra: '18/07/2021',
      valor: 14.85,
      tipoCompra: 'A vista',
      parcelaAtual: 4,
      qtdParcelas: 10,
      categoria: 'Comidas',
      dataPagamento: '10'
    },
    {
      nome: 'Notebook',
      dataCompra: '18/07/2021',
      valor: 3999.99,
      tipoCompra: 'Parcelado',
      parcelaAtual: 5,
      qtdParcelas: 10,
      categoria: 'Eletrônicos',
      dataPagamento: '10'
    },
    {
      nome: 'Cadeira',
      dataCompra: '18/07/2021',
      valor: 999.99,
      tipoCompra: 'Parcelado',
      parcelaAtual: 8,
      qtdParcelas: 12,
      categoria: 'Moveis',
      dataPagamento: '10'
    },
    {
      nome: 'Rei do Sanduíche',
      dataCompra: '18/07/2021',
      valor: 14.85,
      tipoCompra: 'A vista',
      parcelaAtual: 4,
      qtdParcelas: 10,
      categoria: 'Comidas',
      dataPagamento: '10'
    },
    {
      nome: 'Notebook',
      dataCompra: '18/07/2021',
      valor: 3999.99,
      tipoCompra: 'Parcelado',
      parcelaAtual: 5,
      qtdParcelas: 10,
      categoria: 'Eletrônicos',
      dataPagamento: '10'
    },
    {
      nome: 'Cadeira',
      dataCompra: '18/07/2021',
      valor: 999.99,
      tipoCompra: 'Parcelado',
      parcelaAtual: 8,
      qtdParcelas: 12,
      categoria: 'Moveis',
      dataPagamento: '10'
    },
    {
      nome: 'Rei do Sanduíche',
      dataCompra: '18/07/2021',
      valor: 14.85,
      tipoCompra: 'A vista',
      parcelaAtual: 4,
      qtdParcelas: 10,
      categoria: 'Comidas',
      dataPagamento: '10'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
