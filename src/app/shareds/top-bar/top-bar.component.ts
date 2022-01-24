import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { LeftBarService } from '../left-bar/left-bar.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.sass']
})
export class TopBarComponent implements OnInit {
  date = new Date();
  data: any;
  nome = "Gabriel Castro";
  frase = '';
  turno = '';
  state = false;
  constructor( private _leftBarService: LeftBarService ) { }

  ngOnInit(): void {
    const response = localStorage.getItem("user");
    if(response){
      this.data = JSON.parse(response);
    }

    this.verifyDate();

  }

  public icon(){
    if(this?.turno === 'manha'){
      this.frase = 'Bom dia,'
      return 'assets/images/icons/morning.svg'
    }

    else if(this?.turno === 'tarde'){
      this.frase = 'Boa tarde,';
      return 'assets/images/icons/sunset3.svg'
    }

    else if(this?.turno === 'noite'){
      this.frase = 'Boa noite,';
      return 'assets/images/icons/night.svg'
    }

    else{
      return ''
    }
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

  public verifyDate(){
    let hour = this.date.getHours()
    if(hour >= 0 && hour < 12){
      this.turno = 'manha'
    }

    if(hour >= 12 && hour < 18){
      this.turno = 'tarde'
    }

    if(hour >= 18 && hour < 24){
      this.turno = 'noite'
    }
  }

}
