import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Transaction1Component } from './transaction1.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
  
    Transaction1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component: Transaction1Component
      }
    ])
  ]
})
export class Transaction1Module { }
