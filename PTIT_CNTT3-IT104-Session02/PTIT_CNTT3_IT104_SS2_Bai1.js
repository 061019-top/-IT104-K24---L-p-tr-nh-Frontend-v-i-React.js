function sumEvenNumbers(...numbers) {
  return numbers.reduce((total, num) => num % 2 === 0 ? total + num : total, 0);
}

console.log(sumEvenNumbers(1, 2, 3, 4, 5, 6)); // Output: 12
