import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Transaction2Component } from './transaction2.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Transaction2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: Transaction2Component
      }
    ])
  ]
})
export class Transaction2Module { }
