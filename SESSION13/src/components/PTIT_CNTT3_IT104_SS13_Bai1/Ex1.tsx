import { useState } from "react";

export default function Exercise1() {
  const [name] = useState("Chu Đình Minh"); 

  return <div>Họ và tên: {name}</div>;
}
