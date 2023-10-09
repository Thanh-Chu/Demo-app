import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellersListComponent } from './sellers-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SellersListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component: SellersListComponent
      }
    ])
  ]
})
export class SellersListModule { }
