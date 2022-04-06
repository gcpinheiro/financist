import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.sass']
})
export class DropdownComponent implements OnInit {

  @Input() horizontalAlign = 'right';
  @Input() verticalAlign = 'bottom';
  @ViewChild('sizeAction') asSizeAction: ElementRef;
  @ViewChild('sizeContainer') asSizeContainer: ElementRef;

  showDropdown = false;
  alignRight: string;
  alignLeft: string;
  alignTop: string;
  alignBottom: string;
  marginTop = '10px';
  marginBottom: string;

  constructor() {}

  ngOnInit(): void {}

  public alignDropdown() {
    const widthDropdownAction = this.asSizeAction.nativeElement.offsetWidth;
    const widthDropdownContainer = this.asSizeAction.nativeElement.offsetWidth;
    const heightDropdownAction = this.asSizeAction.nativeElement.offsetHeight;

    if (this.horizontalAlign === 'right') {
      this.alignLeft = '0px';
    }
    if (this.horizontalAlign === 'left') {
      const result = widthDropdownContainer - widthDropdownAction;

      this.alignRight = `${result}px`;
    }
    if (this.horizontalAlign === 'center') {
      const result = widthDropdownContainer / 2;
      this.alignRight = `${result}px`;
    }
    if (this.verticalAlign === 'bottom') {
      this.marginBottom = '0px';
      this.marginTop = '10px';
    }
    if (this.verticalAlign === 'top') {
      this.alignBottom = `${heightDropdownAction}px`;
      this.marginBottom = '10px';
      this.marginTop = '0px';
    }
  }

  public toggleDropdownState() {
    this.showDropdown = !this.showDropdown;
    this.alignDropdown();
  }

}
