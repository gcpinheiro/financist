import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass'],
  providers: [ModalComponent]
})
export class ModalComponent implements OnInit {

  showModal = true;
  constructor() { }

  ngOnInit(): void {
  }

  public closeModal(){
    this.showModal = !this.showModal;
  }

}
