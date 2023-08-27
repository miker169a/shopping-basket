# Shopping Basket Price Calculator

## Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Getting Started](#getting-started)
   - [Clone the Repository](#clone-the-repository)
   - [Install Dependencies](#install-dependencies)
   - [Compile TypeScript to JavaScript](#compile-typescript-to-javascript)
   - [Run Tests](#run-tests)
4. [Usage](#usage)

## Features

- Calculates the total cost for a list of items including "Apple", "Banana", "Melon", and "Lime".
- Applies special offers like 'buy one get one free' for Melons and 'three for the price of two' for Limes.

## Prerequisites

- Node.js
- npm

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/miker169a/shopping-basket-calculator.git
cd shopping-basket-calculator
```

### Install Dependencies

Run the following command to install the required packages.\

```bash
npm install
```

### Run Tests

```bash
npm test
```

## Usage

Currently, the application contains a function calculateTotal that takes an array of items and returns the total cost.

Example:

```typescript
import { calculateTotal } from "./src/shoppingBasket";

const items = ["Apple", "Apple", "Melon", "Melon", "Lime", "Lime", "Lime"];
const total = calculateTotal(items);

console.log(`Total cost is: ${total}p`);
```
