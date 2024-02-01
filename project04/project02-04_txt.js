/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Nischal Joshi
      Date:  31/01/2024 

      Filename: project02-04.js
 */

// 5. Directly above the calcTotal() function, insert an event handler that runs the calcTotal() function when
// the element with id “chicken” is clicked. Repeat this for the elements with the id “halibut”, “burger”, “salmon”,
// and “salad”.
// 6. Save your changes to the file and then open project02-04.html in your web browser. Verify that when you click
// each of the menu items the calculated cost and tax is automatically updated to reflect your choices.


const CHICKEN_PRICE = 10.95,
   HALIBUT_PRICE = 13.95, 
   BURGER_PRICE = 9.95,
   SALMON_PRICE = 18.95, 
   SALAD_PRICE = 7.95,
   SALES_TAX = 0.07;


   document.getElementById('chicken').onclick = calcTotal;
   document.getElementById('halibut').onclick = calcTotal;
   document.getElementById('burger').onclick = calcTotal;
   document.getElementById('salmon').onclick = calcTotal;
   document.getElementById('salad').onclick = calcTotal;

function calcTotal(){
 let cost = 0;
 let buyChicken = document.getElementById('chicken').checked; 
 let buyHalibut = document.getElementById('halibut').checked;
 let buyBurger = document.getElementById('burger').checked;
 let buySalmon = document.getElementById('salmon').checked;
 let buySalad = document.getElementById('salad').checked;

cost += buyChicken ? CHICKEN_PRICE : 0;
cost += buyHalibut ? HALIBUT_PRICE : 0;
cost += buyBurger ? BURGER_PRICE : 0;
cost += buySalmon ? SALMON_PRICE : 0;
cost += buySalad ? SALAD_PRICE : 0;

document.getElementById('foodTotal').innerHTML = formatCurrency(cost);

let tax = cost * SALES_TAX;
document.getElementById('foodTax').innerHTML = formatCurrency(tax);

let totalcost = cost + tax;
document.getElementById('totalBill').innerHTML = formatCurrency(totalcost);


}
// Function to display a numeric value as a text string in the format $##.## 
function formatCurrency(value) {
   return "$" + value.toFixed(2);
}
