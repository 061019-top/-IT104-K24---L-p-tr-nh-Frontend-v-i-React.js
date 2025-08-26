import React, { Component } from 'react'

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

type State = {
  products: Product[]
}

export default class Bai7 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      products: [
        { id: 1, name: "iPhone 11", price: 100000, quantity: 6 },
        { id: 2, name: "iPhone 12", price: 200000, quantity: 9 },
        { id: 3, name: "iPhone 13", price: 300000, quantity: 8 },
        { id: 4, name: "iPhone 14", price: 400000, quantity: 6 },
        { id: 5, name: "iPhone 15", price: 500000, quantity: 17 },
        { id: 6, name: "iPhone 16", price: 600000, quantity: 7 },
      ]
    }
  }

  render() {
    return (
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        padding: "20px"
      }}>
        {this.state.products.map((item, index) => (
          <div key={index} style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "16px",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            transition: "0.3s",
            backgroundColor: "#fff"
          }}>
            <h3 style={{ marginBottom: "10px", color: "#333" }}>{item.name}</h3>
            <p style={{ color: "green", fontWeight: "bold" }}>{item.price.toLocaleString()} VND</p>
            <p style={{ fontSize: "14px", color: "#666" }}>Còn lại: {item.quantity}</p>
            <button style={{
              marginTop: "10px",
              padding: "8px 16px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#007bff",
              color: "#fff",
              cursor: "pointer",
              fontWeight: "bold"
            }}>
              Thêm vào giỏ hàng
            </button>
          </div>
        ))}
      </div>
    )
  }
}