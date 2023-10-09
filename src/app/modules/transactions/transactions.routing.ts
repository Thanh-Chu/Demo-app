import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'transaction1',
    loadChildren: ()=> import('./components/transaction1/transaction1.module').then(m=>m.Transaction1Module)
  },
  {
    path: 'transaction2',
    loadChildren: ()=> import('./components/transaction2/transaction2.module').then(m=>m.Transaction2Module)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
