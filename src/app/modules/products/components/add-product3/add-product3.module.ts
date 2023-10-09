import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProduct3Component } from './add-product3.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AddProduct3Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path:'',
        component: AddProduct3Component
      }
    ])
  ]
})
export class AddProduct3Module { }
