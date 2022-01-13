import { AfterContentChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LeftBarService } from './left-bar.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { TopBarComponent } from '../top-bar/top-bar.component';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.sass'],
  animations: [
    trigger('containerState', [
      state('inactive', style({ width: '0px', opacity: '0' })),
      state('active', style({ width: '250px', opacity: '1' })),
      transition('active => inactive', animate('1000ms ease')),
      transition('inactive =>  active', animate('1000ms ease'))
    ])
  ],
})
export class LeftBarComponent implements OnInit {
  animation = 'active';
  state: boolean;

  constructor(private _router: Router, private _leftBarService: LeftBarService ) { }

  ngOnInit(): void {
    this._leftBarService.$state.subscribe((data) => {
      this.state = data;
    })
  }

  public logout(){
    localStorage.removeItem("user");
    this._router.navigateByUrl('');
  }

  public get showAnimation(){
    return this.state? 'inactive' : 'active';
  }

}
