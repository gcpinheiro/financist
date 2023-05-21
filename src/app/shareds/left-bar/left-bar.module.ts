import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftBarComponent } from './left-bar.component';
import { CardsModule } from './components/cards/cards.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LeftBarComponent],
  imports: [
    CommonModule,
    CardsModule,
    RouterModule
  ],
  exports:[LeftBarComponent]
})
export class LeftBarModule { }
