import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.sass']
})
export class LeftBarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  public logout(){
    localStorage.removeItem("user");
    this._router.navigateByUrl('');
  }

}
