import { Injectable } from '@angular/core';
import { ProductList } from './models/product-list.model';
import { Observable, of } from 'rxjs';

const dataProduct: ProductList[] = [
  {
    name: 'Seeds of Change Organic Quinoa',
    price: 34.5,
    status: 'Active',
    date: '02.11.2021',
  },
  {
    name: 'All Natural Italian-Style Chicken',
    price: 990.99,
    status: 'Active',
    date: '02.11.2021',
  },
  {
    name: 'Gortons Beer Battered Fish Fillets',
    price: 76.99,
    status: 'Archived',
    date: '02.11.2021',
  },
  {
    name: 'Foster Farms Takeout Crispy Classic Buffalo',
    price: 18.0,
    status: 'Active',
    date: '02.11.2021',
  },
  {
    name: 'Blue Diamond Almonds Lightly Salted',
    price: 76.99,
    status: 'Disabled',
    date: '02.11.2021',
  },
  {
    name: 'Chobani Complete Vanilla Greek Yogurt',
    price: 18.0,
    status: 'Archived',
    date: '02.11.2021',
  },
  {
    name: 'Canada Dry Ginger Ale 2 L Bottle',
    price: 76.99,
    status: 'Active',
    date: '02.11.2021',
  },
  {
    name: 'Gortons Beer Battered Fish Fillets',
    price: 18.0,
    status: 'Active',
    date: '02.11.2021',
  },
  {
    name: 'Haagen-Dazs Caramel Cone Ice',
    price: 180.99,
    status: 'Active',
    date: '02.11.2021',
  },
];
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public products: ProductList[];
  constructor() {}
  public getProducts(): Observable<ProductList[]> {
    return of(dataProduct);
  }
}
