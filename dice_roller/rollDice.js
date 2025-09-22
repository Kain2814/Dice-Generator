// rollDice.js

// Dice roller function
export function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

document.addEventListener("DOMContentLoaded", () => {
  const rollButton = document.getElementById("rollButton");
  const diceSelect = document.getElementById("dice");
  const resultDiv = document.getElementById("result");

  rollButton.addEventListener("click", () => {
    const sides = parseInt(diceSelect.value, 10);
    const result = rollDice(sides);
    resultDiv.textContent = `D${sides}: Result: ${result}`;
  });
});
