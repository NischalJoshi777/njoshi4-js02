/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Nischal Joshi
      Date: 01/31/2024

      Filename: project02-01.js
 */

//Function to convert farenheit to celsius     
function FarenheitToCelsius(degree) {
      return (degree - 32) / 1.8;
}

//Function to convert celsius to farenheit
function CelsiusToFarenheit(degree) {
      return degree * 1.8 + 32;
}

//geting the element on basis of their id
let cvalue = document.getElementById('cValue');
let fvalue = document.getElementById('fValue');

//calcuates farenheit value when celsius value is provided
cvalue.onchange = function () {
      cDegree = cvalue.value;;
      fvalue.value = CelsiusToFarenheit(cDegree);
}

//calcuates celsius value when farenheit value is provided.
fvalue.onchange = function () {
      fDegree = fvalue.value;;
      cvalue.value = FarenheitToCelsius(fDegree);
}