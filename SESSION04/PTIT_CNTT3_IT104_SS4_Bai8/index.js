"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateOrderTotal(order) {
    return order.items.reduce((total, item) => {
        return total + item.product.price * item.quantity;
    }, 0);
}
function printOrder(order) {
    console.log(`Đơn hàng: #${order.orderId}`);
    console.log(`Khách hàng: ${order.customerName}`);
    console.log(`Sản phẩm:`);
    order.items.forEach(item => {
        const total = item.product.price * item.quantity;
        console.log(`- ${item.product.name} x ${item.quantity} → ${total.toLocaleString()} VND`);
    });
    const grandTotal = calculateOrderTotal(order);
    console.log(`Tổng cộng: ${grandTotal.toLocaleString()} VND`);
    if (order.note) {
        console.log(`Ghi chú: ${order.note}`);
    }
}
/;
const aoSoMi = { id: "p1", name: "Áo sơ mi", price: 250000 };
const quanTay = { id: "p2", name: "Quần tây", price: 400000 };
const myOrder = {
    orderId: "ORD001",
    customerName: "Nguyễn Văn A",
    items: [
        { product: aoSoMi, quantity: 2 },
        { product: quanTay, quantity: 1 },
    ],
    note: "Giao sau 17h",
};
printOrder(myOrder);
//# sourceMappingURL=index.js.map