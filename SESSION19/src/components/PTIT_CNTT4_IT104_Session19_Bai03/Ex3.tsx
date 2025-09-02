import React, { useRef, useState } from "react";

export default function Ex3() {
  const [value, setValue] = useState("");
  const renderCount = useRef(0);
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    renderCount.current += 1;
    setValue(e.target.value)
  };

  return (
    <div>
      <h1>Components render counter</h1>
      <label htmlFor="">input</label> :
      <input
        onChange={handleChange}
        value={value}
        type="text"
        placeholder="Nhập giá trị"
      />
      <h3>{renderCount.current}</h3>
    </div>
  );
}
