import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProduct1Component } from './add-product1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddProduct1Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path:'',
        component: AddProduct1Component
      }
    ])
  ]
})
export class AddProduct1Module { }
