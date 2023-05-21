import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from '../dropdown/dropdown.module';
import { TopBarComponent } from './top-bar.component';
import { RouterModule } from '@angular/router';
import { CardsModule } from '../left-bar/components/cards/cards.module';



@NgModule({
  declarations: [TopBarComponent],
  imports: [
    CommonModule,
    DropdownModule,
    RouterModule,
    CardsModule
  ],
  exports:[TopBarComponent]
})
export class TopBarModule { }
