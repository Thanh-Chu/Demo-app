import { Component, OnInit, inject } from '@angular/core';
import { ProductList } from '../../models/product-list.model';
import { ProductsService } from '../../products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  private readonly _productService = inject(ProductsService);
  private _subscription: Subscription;
  public products: ProductList[];

  ngOnInit(): void {
    this.getProduct();
  }
  public getProduct() {
    this._subscription = this._productService
      .getProducts()
      .subscribe((data) => {
        this.products = data;
      });
  }
}
