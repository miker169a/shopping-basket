import { calculateTotal } from "../src/shoppingBasket";

describe("Shopping Basket", () => {
  it("calculates the total cost of a list of items", () => {
    expect(calculateTotal(["Apple", "Apple", "Banana"])).toBe(90);
    expect(calculateTotal(["Apple", "Melon", "Melon"])).toBe(85);
    expect(calculateTotal(["Lime", "Lime", "Lime"])).toBe(30);
    expect(
      calculateTotal([
        "Apple",
        "Apple",
        "Melon",
        "Melon",
        "Lime",
        "Lime",
        "Lime",
      ])
    ).toBe(150);
    expect(calculateTotal([])).toBe(0);
  });
});
