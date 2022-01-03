import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {

  @Input() pathIcon = "";
  @Input() page: string;
  constructor() { }

  ngOnInit(): void {
  }

  public get icon(){
    return this.pathIcon != ''? this.pathIcon: '';
  }

}
