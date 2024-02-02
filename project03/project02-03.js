/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Nischal Joshi
      Date:  01/31/2024

      Filename: project02-03.js
 */

let squareElement = document.getElementById('square');
let triangleElement = document.getElementById('triangle');
let circleElement = document.getElementById('circle');

squareElement.onmouseover = function() {
  document.getElementById('feedback').innerHTML = "You're hovering over the square";
}

squareElement.onmouseout = function() {
      document.getElementById('feedback').innerHTML = "";
}

triangleElement.onmouseover = function() {
      document.getElementById('feedback').innerHTML = "You're hovering over the traingle";
}
    
triangleElement.onmouseout = function() {
          document.getElementById('feedback').innerHTML = "";
}

circleElement.onmouseover = function() {
      document.getElementById('feedback').innerHTML = "You're hovering over the circle";
}
    
circleElement.onmouseout = function() {
          document.getElementById('feedback').innerHTML = "";
}