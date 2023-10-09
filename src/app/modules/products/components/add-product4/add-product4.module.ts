import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProduct4Component } from './add-product4.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AddProduct4Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path:'',
        component:AddProduct4Component
      }
    ])
  ]
})
export class AddProduct4Module { }
