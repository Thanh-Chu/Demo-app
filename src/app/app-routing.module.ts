import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'product',
    loadChildren: () =>
      import('./modules/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./modules/orders/orders.module').then((m) => m.OrdersModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./modules/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  {
    path:'dashboard',
    loadChildren: ()=>import('./modules/dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path:'sellers',
    loadChildren: ()=> import('./modules/sellers/sellers.module').then(m=>m.SellersModule)
  },
  {
    path: 'transactions',
    loadChildren: ()=> import('./modules/transactions/transactions.module').then(m=>m.TransactionsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
