function checkParity(value) {
  // Kiểm tra xem value có phải là số không
  if (isNaN(value)) {
    console.log(`${value} not is number`);
  } else {
    // Ép kiểu sang số nguyên nếu cần
    const number = parseInt(value);
    if (number % 2 === 0) {
      console.log(`${number} is an even number`);
    } else {
      console.log(`${number} is odd`);
    }
  }
}
