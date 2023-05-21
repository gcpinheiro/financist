import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { LeftBarService } from '../left-bar/left-bar.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.sass']
})
export class TopBarComponent implements OnInit {
  date = new Date();
  data = {
    meta: 2500,
    gastoMensal: 1234.65
  };
  nome = '-';
  frase = '';
  turno = '';
  state = false;
  stateAnimationDropdown = false;
  @ViewChild('iconDropdown') iconDropdown:ElementRef;
  constructor( private _leftBarService: LeftBarService,
    private _router: Router,
    private renderer2: Renderer2
    ) { }

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

  public get username(){
    const username = localStorage.getItem('username');
    return username? username : '-';
  }

  public logout(){
    localStorage.removeItem("user");
    localStorage.removeItem("username");
    this._router.navigate(['/login']);
  }

  rotateIcon(){
    const icon = this.iconDropdown.nativeElement;
    if(!this.stateAnimationDropdown){
      this.renderer2.setStyle(icon, 'rotate', '180deg')
      this.stateAnimationDropdown = !this.stateAnimationDropdown;
    }
    else{
      this.renderer2.setStyle(icon, 'rotate', '0deg')
       this.stateAnimationDropdown = !this.stateAnimationDropdown;
    }
    this.renderer2.setStyle(icon, 'transition', 'rotate .5s ease-in')
  }
}
