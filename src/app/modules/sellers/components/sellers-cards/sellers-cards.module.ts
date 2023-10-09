import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellersCardsComponent } from './sellers-cards.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SellersCardsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component: SellersCardsComponent
      }
    ])
  ]
})
export class SellersCardsModule { }
