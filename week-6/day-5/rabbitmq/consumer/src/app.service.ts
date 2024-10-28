import { Injectable } from '@nestjs/common';
import { OrderDto } from './order.dto';

@Injectable()
export class AppService {
  orders: OrderDto[] = [];

  handleOrderPlaced(order: OrderDto) {
    console.log(`Recieved a new order - consumer: ${order.email}`);
    this.orders.push(order);
  }

  getOrders() {
    return this.orders;
  }
}
