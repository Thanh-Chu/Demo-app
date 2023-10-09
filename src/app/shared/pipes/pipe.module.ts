import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyFormationPipe } from './currency-formation.pipe';



@NgModule({
  declarations: [
    CurrencyFormationPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipeModule { }
