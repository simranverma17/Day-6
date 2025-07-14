function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }
  return a / b;
}

try {
  const result = divide(10, 0); 
  //if we divide it by 0 like we put 0 in place of 4 we'll get error.
  //Error caught: Cannot divide by zero.
  //if by 4 -> Result: 2.5
  console.log("Result:", result);
} catch (error) {
  console.error("Custom Error caught:", error.message);
}