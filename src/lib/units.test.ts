import { convert } from "./units";

test("Correct example scenarios", () => {
  expect(convert(84.2).Fahrenheit?.to.Rankine?.toFixed(1)).toBe(543.94.toFixed(1));
  expect(convert(25.6).cups?.to.liters?.toFixed(1)).toBe(6.1.toFixed(1));
});

test("Incorrect example scenarios", () => {
  expect(convert(317.33).Kelvin?.to.Fahrenheit?.toFixed(1)).not.toBe(111.554.toFixed(1));
  expect(convert(6.5).Fahrenheit?.to.Rankine?.toFixed(1)).not.toBe("dog");
});

test("Invalid example scenarios", () => {
  expect(convert(73.12).gallons?.to.Kelvin?.toFixed(1)).toBeUndefined();
  expect(convert(136.1).dog?.to.Celsius?.toFixed(1)).toBeUndefined();
});