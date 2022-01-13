import { Component, OnInit, Input, Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'circle-progress-bar',
  templateUrl: './circle-progress-bar.component.html',
  styleUrls: ['./circle-progress-bar.component.sass']
})
export class CircleProgressBarComponent implements OnInit, AfterViewInit {

  @Input() percentValue = 5.5;
  @Input() sizeCircle = 50;
  @ViewChild('numberPercent') numberPercent: ElementRef;
  @ViewChild('circle') circle: ElementRef;
  @ViewChild('container') container: ElementRef;
  @ViewChild('percent') percent: ElementRef;
  @ViewChild('indicator') indicator: ElementRef;

  constructor(private _renderer2: Renderer2) { }

  ngOnInit(): void {
    // this.setSizeContainers(this.container.nativeElement, 70, "red");
    // this.setSizeContainers(this.percent.nativeElement, 70);
    // this.setSizeContainers(this.indicator.nativeElement, 70);
  }

  ngAfterViewInit(){
    this._renderer2.setStyle(this.numberPercent.nativeElement, "stroke-dashoffset", `calc( 440 - 440 * ${this.percentValue} / 100 )`)
    // this._renderer2.setStyle(this.numberPercent.nativeElement, "stroke-dashoffset", `20`)
    // this._renderer2.setAttribute(this.circle.nativeElement, "cx", "50")
    // this._renderer2.setAttribute(this.circle.nativeElement, "cy", "50")
    // this._renderer2.setAttribute(this.circle.nativeElement, "r", "50")
    // this._renderer2.setAttribute(this.numberPercent.nativeElement, "cx", "50")
    // this._renderer2.setAttribute(this.numberPercent.nativeElement, "cy", "50")
    // this._renderer2.setAttribute(this.numberPercent.nativeElement, "r", "50")
    // this._renderer2.setStyle(this.svg.nativeElement, "width", "50")
    // this._renderer2.setStyle(this.svg.nativeElement, "width", "50")
    // this.setCircle(this.numberPercent.nativeElement, 50);
    // this.setCircle(this.circle.nativeElement, 50);


  }

  setCircle(el: ElementRef, size: number){
    this._renderer2.setAttribute(el.nativeElement, "cx", `${size}`)
    this._renderer2.setAttribute(el.nativeElement, "cy", `${size}`)
    this._renderer2.setAttribute(el.nativeElement, "r", `${size}`)
  }

  setSizeContainers(el: ElementRef, size: number, color?: string){
    this._renderer2.setStyle(el.nativeElement, "width", `${size}px`)
    this._renderer2.setStyle(el.nativeElement, "height", `${size}px`)
    this._renderer2.setStyle(el.nativeElement, "background", `${color}`)
  }

}
