class Customer {
  id: number;
  name: string;
  email: string;
  shippingAddress: string;
  constructor(
    id: number,
    name: string,
    email: string,
    shippingAddress: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.shippingAddress = shippingAddress;
  }

  getDetails() {
    return `id: ${this.id}, name: ${this.name}, email: ${this.email}, shippingAddress: ${this.shippingAddress}`;
  }
}

abstract class Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  constructor(id: number, name: string, price: number, stock: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  sell(quantity: number): void {
    this.stock -= quantity;
  }

  restock(quantity: number): void {
    this.stock += quantity;
  }

  getProductInfo(): string {
    return `id: ${this.id}, name: ${this.name}, price: ${this.price}, stock: ${this.stock}`;
  }

  getShippingCost(distance: number): number {
    return distance * 10;
  }

  getCategory(): string {
    return "Uncategorized";
  }
}

class ElectronicsProduct extends Product {
  warrantyPeriod: number;
  constructor(
    id: number,
    name: string,
    price: number,
    stock: number,
    warrantyPeriod: number
  ) {
    super(id, name, price, stock);
    this.warrantyPeriod = warrantyPeriod;
  }
}

class ClothingProduct extends Product {
  size: string;
  color: string;
  constructor(
    id: number,
    name: string,
    price: number,
    stock: number,
    size: string,
    color: string
  ) {
    super(id, name, price, stock);
    this.size = size;
    this.color = color;
  }
}

class Order {
  orderID: number;
  customer: Customer;
  products: Product[];
  totalAmount: number;
  constructor(
    orderID: number,
    customer: Customer,
    products: Product[],
    totalAmount: number
  ) {
    this.orderID = orderID;
    this.customer = customer;
    this.products = products;
    this.totalAmount = totalAmount;
  }

  getDetails(): string {
    return `Order ID: ${this.orderID}, Customer: ${this.customer.name}, Total Amount: ${this.totalAmount}`;
  }
}

class Store {
  products: Product[];
  customers: Customer[];
  orders: Order[];
  constructor(products: Product[], customers: Customer[], orders: Order[]) {
    this.products = products;
    this.customers = customers;
    this.orders = orders;
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  addCustomer(name: string, email: string, shippingAddress: string): void {
    this.customers.push(
      new Customer(this.customers.length, name, email, shippingAddress)
    );
  }

  creatOrder(
    customerId: number,
    productQuantities: { productId: number; quantity: number }[]
  ): Order | null {
    const customer = this.customers.find((c) => c.id === customerId);
  }

  cancelOrder(orderId: number): void {
    const order = this.orders.find((o) => o.orderID === orderId);
    if (order) {
      order.products.forEach((product) => (product.stock += product.quantity));
      this.orders = this.orders.filter((o) => o.orderID !== orderId);
    }
  }

  listAvailableProducts(): void {}

  listCustomerOrders(customerId: number): void {
    const customer = this.customers.filter((c) => c.id === customerId);
    if (customer) {
      console.log(
        `Customer ID: ${customer.id}, Name: ${customer.name}, Email: ${customer.email}, Shipping Address: ${customer.shippingAddress}`
      );
    }
  }

  calculateTotalRevenue(): number {
    return this.orders.reduce((total, order) => total + order.totalAmount, 0);
  }

  countProductsByCategory(): void {}
}

function menu() {
  console.log("1.Thêm khách hàng mới.");
  console.log("2.Thêm sản phẩm mới");
  console.log("3.Tạo đơn hàng mới");
  console.log("4.Hủy đơn hàng ");
  console.log("5.Hiển thị danh sách sản phẩm còn hàng trong kho ");
  console.log("6.Hiển thị danh sách đơn hàng của một khách hàng");
  console.log("7.Tính và hiển thị tổng doanh thu của cửa hàng");
  console.log("8.Thống kê sản phẩm theo danh mục");
  console.log("9.Cập nhật tồn kho cho một sản phẩm");
  console.log("10.Tìm kiếm và hiển thị thông tin bằng ID");
  console.log("11.Xem thông tin chi tiết ");
  console.log("12.Thoát chương trình");
}
function choice(choice: number) {
  switch () {


    
    case 0:

    case 1:

    case 2:

    case 3:

    case 4:

    case 5:

    case 6:                                   

    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
  }
}
