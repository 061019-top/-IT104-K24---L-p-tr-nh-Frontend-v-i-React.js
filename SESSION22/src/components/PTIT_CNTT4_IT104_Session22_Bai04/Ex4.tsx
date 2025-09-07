import React, { useState } from "react";

export default function Ex3() {
  const [value, setValue] = useState("");

  return (
    <div>
      <select value={value} onChange={(e) => setValue(e.target.value)}>
        <option value="">Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
}
