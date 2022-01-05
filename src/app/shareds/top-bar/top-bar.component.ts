import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.sass']
})
export class TopBarComponent implements OnInit {

  nome = "Rosana Marcos";
  sexo = "F";
  @Input() pathImage:string;
  constructor() { }

  ngOnInit(): void {
  }

  public get icon(){
    return this.sexo == 'M'? 'assets/images/icons/user-man.svg': 'assets/images/icons/user-woman.svg'
  }

}
