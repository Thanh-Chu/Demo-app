import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'sellers-list',
    loadChildren: ()=> import('./components/sellers-list/sellers-list.module').then(m=>m.SellersListModule)
  },
  {
    path:'sellers-cards',
    loadChildren: ()=> import('./components/sellers-cards/sellers-cards.module').then(m=>m.SellersCardsModule)
  },
  {
    path:'seller-profile',
    loadChildren: ()=>import('./components/seller-profile/seller-profile.module').then(m=>m.SellerProfileModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellersRoutingModule { }
