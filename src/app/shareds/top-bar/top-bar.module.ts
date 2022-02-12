import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from '../dropdown/dropdown.module';
import { TopBarComponent } from './top-bar.component';



@NgModule({
  declarations: [TopBarComponent],
  imports: [
    CommonModule,
    DropdownModule
  ],
  exports:[TopBarComponent]
})
export class TopBarModule { }
