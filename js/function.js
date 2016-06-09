function calcCost() {
  document.getElementById('output').innerHTML = ("");
  var totalPower = document.getElementById("totalkWh").value;
  var totalCost = 0.1690 * totalPower;
  document.getElementById('output').innerHTML = "Your total cost of electricity per year is $" + totalCost.toFixed(2);
}
