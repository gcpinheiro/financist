import { style } from '@angular/animations';
import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent implements OnInit {

  @ViewChild('icon') asIcon: ElementRef;
  @Input() type = "";
  @Input() chooseType = "";
  @Input() placeholder = '';
  iconPath = 'assets/images/icons/eye-regular.svg';

  constructor(private _renderer2: Renderer2) { }

  ngOnInit(): void {
    this.chooseType = this.type
  }

  public get showIcon(){
    return this.type === 'password'? true : false;
  }

  public showHidePassword(){

    if(this.chooseType === 'password'){
      this._renderer2.addClass(this.asIcon.nativeElement, "animation");
      this.iconPath = 'assets/images/icons/eye-slash-regular.svg'
    }
    else{
      this._renderer2.removeClass(this.asIcon.nativeElement, "animation");
      this.iconPath = 'assets/images/icons/eye-regular.svg';

    }
    this.changeTypeInput();
  }

  changeTypeInput(){
    this.chooseType === 'password'? this.chooseType = 'text' : this.chooseType = 'password';
  }

  mouseOver(){
    var icon =  this.asIcon.nativeElement;
    if(this.chooseType === 'password'){
      this._renderer2.setStyle(icon, "transform", "scale(1.1)");
    }
  }

  mouseOut(){
    var icon =  this.asIcon.nativeElement;
    if(this.chooseType === 'password'){
      this._renderer2.setStyle(icon, "transform", "scale(1.0)");
    }
  }
}
