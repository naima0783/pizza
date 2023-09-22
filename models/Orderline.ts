import Pizza from "./pizza";

class OrderLine {
  id: number;
  quantity: number;

  constructor(id: number, quantity: number) {
    this.id = id;
    this.quantity = quantity;
  }
}
export default OrderLine;
