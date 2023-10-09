import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { OrdersService } from '../../orders.service';
import { Subscription } from 'rxjs';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  private readonly _orderService = inject(OrdersService);
  private readonly _changeDetectorRef = inject(ChangeDetectorRef);
  private _subscription: Subscription;
  public orders: Order[];

  ngOnInit(): void {
    this.getOrder();
  }
  public getOrder() {
    this._subscription = this._orderService.getOrders().subscribe((data) => {
      this.orders = data;
      this._changeDetectorRef.markForCheck();
    });
  }
}
