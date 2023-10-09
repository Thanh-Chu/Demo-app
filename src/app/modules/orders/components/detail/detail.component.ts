import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { OrdersService } from '../../orders.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription, map, switchMap } from 'rxjs';
import { Order } from '../../models/order.model';
import { OrderDetail } from '../../models/order-detail.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  private readonly _orderService = inject(OrdersService);
  private readonly _changeDetectorRef = inject(ChangeDetectorRef);
  private _activatedRoute = inject(ActivatedRoute);
  private _subscription: Subscription;
  public order: Order;
  public orderDetails: OrderDetail[];

  ngOnInit(): void {
    this._activatedRoute.paramMap
      .pipe(
        switchMap((paramMap) =>
          this._orderService.getOrderById(Number(paramMap.get('id'))).pipe(
            map((data) => {
              return { order: data, paramMap };
            })
          )
        )
      )
      .subscribe((data) => {
        this.order = data.order;
      });
    this.getOrderDetail();
  }
  public getOrderDetail() {
    this._subscription = this._orderService
      .getOrderDetail()
      .subscribe((data) => {
        this.orderDetails = data;
      });
  }
}
