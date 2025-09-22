import React from 'react'

export default function TestMap() {
    const data = [
  {
    id: 1,
    name: "Pizza",
    price: 30,
    description: "Pizza hải sản",
    image: ""
  },
  {
    id: 2,
    name: "Burger",
    price: 25,
    description: "Burger bò phô mai",
    image: ""
  },
  {
    id: 3,
    name: "Banh mì",
    price: 20,
    description: "Bánh mì ",
    image: ""
  },
  {
    id: 4,
    name: "Banh ngọt",
    price: 15,
    description: "Bánh mì",
    image: ""
  }
];
// data.map(...): duyệt qua từng phần tử của mảng data.

// item là từng sản phẩm (pizza, burger, …).

// key={item.id}: React yêu cầu có key để tối ưu render.

// {} dùng để nhúng biến JavaScript vào JSX.

  return (
  <div>
    {data.map((item) => (
      <div key={item.id}>
        <h2>{item.name}</h2>
        <p>Giá: {item.price}k</p>
        <p>{item.description}</p>
        <img src={item.image} alt={item.name} />
      </div>
    ))}
  </div>
);

}

