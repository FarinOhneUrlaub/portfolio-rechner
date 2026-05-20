function calculate() {
  const name = document.getElementById("name").value;
  const buyPrice = parseFloat(document.getElementById("buyPrice").value);
  const currentPrice = parseFloat(document.getElementById("currentPrice").value);
  const quantity = parseFloat(document.getElementById("quantity").value);

  if (
    !name ||
    isNaN(buyPrice) ||
    isNaN(currentPrice) ||
    isNaN(quantity) ||
    buyPrice < 0 ||
    currentPrice < 0 ||
    quantity <= 0
)
{
    document.getElementById("result").innerHTML =
    "Bitte gültige Werte eingeben.";

    return;
}

  const invested = buyPrice * quantity;
  const currentValue = currentPrice * quantity;
  const profit = currentValue - invested;
  const performance = (profit / invested) * 100;

  document.getElementById("result").innerHTML = `
    <strong>${name}</strong><br>
    Investiert: ${invested.toFixed(2)} €<br>
    Aktueller Wert: ${currentValue.toFixed(2)} €<br>
    Gewinn/Verlust: ${profit.toFixed(2)} €<br>
    Performance: ${performance.toFixed(2)} %
  `;
}
console.log("script.js wurde geladen");