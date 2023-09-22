import OrderLine from "./Orderline";
import Pizza from "./pizza";

class Order {
  orderlines: OrderLine[];
  total: number;

  constructor(orderlines: OrderLine[], total: number) {
    this.orderlines = orderlines;
    this.total = total;
  }
}
export default Order;
