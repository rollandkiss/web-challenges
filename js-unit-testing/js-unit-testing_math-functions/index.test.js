import { add, subtract, multiply, divide } from "./index.js";

// Add function Tests
// Test 01
test("returns 5 if called with add(2, 3)", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});
// Test 02
test("returns a negative value if the greater argument is negative", () => {
  const result = add(-5, 3);
  console.log(result);
  expect(result).toBeLessThan(0);
});
// Test 03
test("returns a value close to 0.3 if called with add(0.1, 0.2)", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

//Substract function Tests
// Test 04
test("returns 10 if called with subtract(15, 5)", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});
// Test 05
test("returns a negative value if the second argument is greater than the first one", () => {
  const result = subtract(-5, 2);
  expect(result).toBeLessThan(0);
});

// Multiply function Tests
// Test 06
test("returns 8 if called with multiply(2, 4)", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});
// Test 07
test("returns a negative value if only the first argument is negative", () => {
  const result = multiply(-2, 5);
  expect(result).toBeLessThan(0);
});
// Test 08
test("returns a negative value if only the second argument is negative", () => {
  const result = multiply(3, -4);
  expect(result).toBeLessThan(0);
});
// Test 09
test("returns a positive value if called with two negative arguments", () => {
  const result = multiply(-3, -5);
  expect(result).toBeGreaterThan(0);
});

// Divide function Tests
// Test 10
test("returns 3 if called with divide(9, 3)", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});
// Test 11
test("returns 'You should not do this!' if called with 0 as second argument", () => {
  const result = divide(5, 0);
  expect(result).toBe("You should not do this!");
});
