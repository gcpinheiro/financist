import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.sass']
})
export class TopBarComponent implements OnInit {

  nome = "Gabriel Castro";
  sexo = "M";
  @Input() pathImage = 'assets/images/icons/user-woman.png';
  constructor() { }

  ngOnInit(): void {
  }

  public get icon(){
    return this.sexo == 'F'? 'assets/images/icons/user-woman.png': 'assets/images/icons/user-man.svg'
  }

}
