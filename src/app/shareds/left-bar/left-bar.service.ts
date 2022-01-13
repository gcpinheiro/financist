import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeftBarService {

 private stateLeftBar = new Subject<boolean>();
 public $state = this.stateLeftBar.asObservable();


  constructor() { }

  public changeState(state: boolean){
    this.stateLeftBar.next(state);
  }

}
