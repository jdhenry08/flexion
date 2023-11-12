import { cn } from "./utils";

test("single class name", () => {
  expect(cn("bg-white")).toBe("bg-white");
  expect(cn("bg-black")).toBe("bg-black");
});

test("conflicting styles in a single string", () => {
  expect(["bg-white", "bg-black"]).toContain(cn("bg-white bg-black"));
  expect(["bg-white", "bg-black"]).toContain(cn("bg-black bg-white"));
});

test("non-conflicting styles in a single string", () => {
  expect(cn("bg-white text-black")).toBe("bg-white text-black");
})

test("conflicting styles in multiple strings", () => {
  expect(["bg-white", "bg-black"]).toContain(cn("bg-white", "bg-black"));
  expect(["bg-white", "bg-black"]).toContain(cn("bg-black", "bg-white"));
});

test("non-conflicting styles in multiple strings", () => {
  expect(cn("bg-white", "text-black")).toBe("bg-white text-black");
});
