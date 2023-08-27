type Item = "Apple" | "Banana" | "Melon" | "Lime";

interface Pricing {
  [key: string]: number;
}

export const itemPricing: Pricing = {
  Apple: 35,
  Banana: 20,
  Melon: 50,
  Lime: 15,
};

export const calculateTotal = (items: Item[]): number => {
  let total = 0;
  let melonCount = 0;
  let limeCount = 0;

  for (const item of items) {
    total += itemPricing[item];

    if (item === "Melon") {
      melonCount++;
      if (melonCount % 2 === 0) {
        total -= itemPricing["Melon"];
      }
    }

    if (item === "Lime") {
      limeCount++;
      if (limeCount % 3 === 0) {
        total -= itemPricing["Lime"];
      }
    }
  }

  return total;
};
