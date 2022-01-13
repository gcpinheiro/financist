import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { LeftBarService } from '../left-bar/left-bar.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.sass']
})
export class TopBarComponent implements OnInit {
  data: any;
  nome = "Gabriel Castro";
  sexo = "M";
  state = false;
  constructor( private _leftBarService: LeftBarService ) { }

  ngOnInit(): void {
    const response = localStorage.getItem("user");
    if(response){
      this.data = JSON.parse(response);
    }

  }

  public get icon(){
    return this.sexo == 'M' ? 'assets/images/icons/user-man.svg': 'assets/images/icons/user-woman.svg'
  }

  public get iconStateLeftBar(){
    return this.state ? 'assets/images/icons/arrow-right.svg': 'assets/images/icons/arrow-left.svg'
  }

  public get leftPosition(){
    return this.state ? '10px' : '-20px';
  }

  public toggleLeftBar(){
    this.state = !this.state;
    this._leftBarService.changeState(this.state);
  }

}
