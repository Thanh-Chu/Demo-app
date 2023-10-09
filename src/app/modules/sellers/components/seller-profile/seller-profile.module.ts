import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerProfileComponent } from './seller-profile.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SellerProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component: SellerProfileComponent
      }
    ])
  ]
})
export class SellerProfileModule { }
