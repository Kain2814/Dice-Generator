// rollDice.js

// Dice roller function - this is the logic for rolling a die
function rollDice(sides) {
  if (!Number.isInteger(sides) || sides <= 0) {
    throw new Error("Number of sides must be a positive integer");
  }
  return Math.floor(Math.random() * sides) + 1;
}

module.exports = rollDice;

// --- Interactive CLI (Command Line Interface) for testing dice rolls ---
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Putting Dice options as an array of objects makes it easier to manage imo.
const diceOptions = {
  1: { name: "D4", sides: 4 },
  2: { name: "D6", sides: 6 },
  3: { name: "D10", sides: 10 },
  4: { name: "D20", sides: 20 },
  5: { name: "D100", sides: 100 },
};
// I had AI help with this but this adds a menu to select what dice to roll
function showMenu() {
  console.log("\n🎲 Dice Roller Menu 🎲");
  Object.entries(diceOptions).forEach(([key, { name }]) => {
    console.log(`${key}. Roll a ${name}`);
  });
  console.log("0. Exit\n");

  rl.question("Choose an option: ", (choice) => {
    if (choice === "0") {
      console.log("Goodbye!");
      rl.close();
      return;
    }

    const option = diceOptions[choice];
    if (option) {
      const result = rollDice(option.sides);
      console.log(`You rolled a ${option.name}: ${result}`);
    } else {
      console.log("❌ Invalid choice, try again.");
    }

    // Show menu again
    showMenu();
  });
}

// Start the menu
showMenu();
