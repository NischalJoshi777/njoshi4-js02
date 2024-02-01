/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photography
      Variables and functions
      Author: Nischal Joshi
      Date:  02/01/2024 

      Filename: js02.js
 */

// Global constants
const EMP_COST = 100; //cost of photographers per hour
const BOOK_COST = 350; //cost of memory book
const REPRO_COST = 1250; //cost of reproduction rights
const TRAVEL_COST = 2; //cost of travel per mile

// Setup the form when page in rendered      
window.addEventListener("load", setupForm);

// Default values of the form      
function setupForm() {
      document.getElementById("photoNum").value = 1;
      document.getElementById("photoHrs").value = 2;
      document.getElementById("makeBook").checked = false;
      document.getElementById("photoRights").checked = false;
      document.getElementById("photoDist").value = 0;

      getEstimate();

      // Event handlers for input type
      document.getElementById("photoNum").onchange = getEstimate;
      document.getElementById("photoHrs").onchange = getEstimate;
      document.getElementById("photoDist").onchange = getEstimate;
      document.getElementById("makeBook").onchange = getEstimate;
      document.getElementById("photoRights").onchange = getEstimate;
}

// function to get estimate of total cost
function getEstimate() {
      let totalCost = 0;
      let photographers = document.getElementById("photoNum").value;
      let hours = document.getElementById("photoHrs").value;
      let distance = document.getElementById("photoDist").value;

      let buyBook = document.getElementById("makeBook").checked;
      let buyRights = document.getElementById("photoRights").checked;

      // Adds the cost of photographers for the hours covered
      totalCost += photographers * hours * EMP_COST;
      // Adds the cost of distance per photographer per mile
      totalCost += photographers * distance * TRAVEL_COST;
      // Adds the cost of the book if purchased
      totalCost += buyBook ? BOOK_COST : 0;
      // Adds the cost of photo rights if purchased
      totalCost += buyRights ? REPRO_COST : 0;

      // Displays the total estimated cost
      document.getElementById("estimate").innerHTML = "$" + totalCost;
}

