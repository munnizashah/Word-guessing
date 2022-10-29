"use strict";

const form = document.getElementById("guessForm");
const errorMessage = document.getElementById("errorMessage");
const successMessage = document.getElementById("successMessage");

// let number = Math.floor(Math.random() * 100) + 1;
let number = 45;

form.onsubmit = function (event) {
  event.preventDefault(); 

  let guess = Number(form.elements.guess.value);
  form.elements.guess.value = "";
  

  if (Number.isNaN(guess)) {
    showErrorMessage("That is not a number...");
  } else if (guess === number) {
    showSuccessMessage("Correct");
  } else if (guess < number) {
    showErrorMessage("Higher");
  } else if (guess > number) {
    showErrorMessage("Lower");
  }
};

function showErrorMessage(message) {
  errorMessage.classList.add("visible");
  errorMessage.innerHTML = message;

  setTimeout(function () {
    errorMessage.classList.remove("visible");
  }, 1000); 
}

function showSuccessMessage(message) {
successMessage.classList.add("visible");
successMessage.innerHTML = message;

setTimeout(function () {
  successMessage.classList.remove("visible");
}, 1000);
}



