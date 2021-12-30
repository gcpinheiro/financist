import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.sass']
})
export class ButtonIconComponent implements OnInit {

  @Input() pathImage: string = "assets/images/icons/google.svg";
  @Input() color: string;
  @Input() width = '';
  @ViewChild('box') box: ElementRef;

  constructor(private _renderer2: Renderer2) { }

  ngOnInit(): void {
    console.log(this.color);
    setTimeout(() => {
      this.initializeStyles()
    });
  }

  public initializeStyles(){
    var box = this.box.nativeElement;
    this._renderer2.setStyle(box, "background-color", this.color);
  }

  public get setWidth(){
    return this.width != ''? this.width: '';
  }

}
