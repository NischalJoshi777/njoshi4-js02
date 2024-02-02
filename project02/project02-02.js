/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Nischal Joshi
      Date: 01/31/2024  

      Filename: project02-02.js
 */
 
//function to verify form
function verifyForm(){
      let name = document.getElementById('name').value;
      let email = document.getElementById('email').value;
      let phone = document.getElementById('phone').value;

      if(name != '' && email != '' && phone != ''){
            window.alert('Thank You!');
      } else {
        window.alert("Please fill in all fields.");
      }

}

let submit = document.getElementById('submit');
submit.addEventListener("click", verifyForm);