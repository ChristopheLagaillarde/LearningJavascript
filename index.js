let number = 0;
let Screendisplay = document.getElementById("numberOnScreen");
let numberSaved = document.getElementById("NumberSavedHTML");
let historyEl = document.getElementById("history-el");
let MessageEl = document.getElementById("message-el");

let num1 = 5;
let num2 = 8;
let result = document.getElementById("resultat");

var myMusic = new Audio("mj.mp3");

document.getElementById("boutonAjouter").style.visibility = "hidden";
document.getElementById("boutonSoustraire").style.visibility = "hidden";
document.getElementById("boutonMultiplier").style.visibility = "hidden";
document.getElementById("boutonDiviser").style.visibility = "hidden";
document.getElementById("numberOnScreen").style.visibility = "hidden";
document.getElementById("NumberSavedHTML").style.visibility = "hidden";
document.getElementById("AddingButton").style.visibility = "hidden";
document.getElementById("SaveButton").style.visibility = "hidden";
document.getElementById("history-el").style.visibility = "hidden";
document.getElementById("MainMenuButton").style.visibility = "hidden";

function Back() {
  myMusic.pause();
  MessageEl.innerText = "";
  document.getElementById("StartingButton").style.visibility = "visible";
  document.getElementById("PlayARound").style.visibility = "visible";
  document.getElementById("MainMenuButton").style.visibility = "hidden";

  document.getElementById("boutonAjouter").style.visibility = "hidden";
  document.getElementById("boutonAjouter").style.visibility = "hidden";
  document.getElementById("boutonSoustraire").style.visibility = "hidden";
  document.getElementById("boutonMultiplier").style.visibility = "hidden";
  document.getElementById("boutonDiviser").style.visibility = "hidden";
  document.getElementById("numberOnScreen").style.visibility = "hidden";
  document.getElementById("NumberSavedHTML").style.visibility = "hidden";
  document.getElementById("AddingButton").style.visibility = "hidden";
  document.getElementById("SaveButton").style.visibility = "hidden";
  document.getElementById("history-el").style.visibility = "hidden";
}
function Start() {
  myMusic.play();
  document.getElementById("StartingButton").style.visibility = "hidden";
  document.getElementById("PlayARound").style.visibility = "hidden";

  document.getElementById("MainMenuButton").style.visibility = "visible";
  document.getElementById("boutonAjouter").style.visibility = "visible";
  document.getElementById("boutonAjouter").style.visibility = "visible";
  document.getElementById("boutonSoustraire").style.visibility = "visible";
  document.getElementById("boutonMultiplier").style.visibility = "visible";
  document.getElementById("boutonDiviser").style.visibility = "visible";
  document.getElementById("numberOnScreen").style.visibility = "visible";
  document.getElementById("NumberSavedHTML").style.visibility = "visible";
  document.getElementById("AddingButton").style.visibility = "visible";
  document.getElementById("SaveButton").style.visibility = "visible";
  document.getElementById("history-el").style.visibility = "visible";

  if (num1 + num2 < 21) {
    MessageEl.innerText = "get another card ?";
  }
  if (num1 + num2 === 21) {
    MessageEl.innerText = "You won !";
  }
  if (num1 + num2 > 21) {
    MessageEl.innerText = "You lost !";
  }
}

function Add() {
  number = number + 1;
  Screendisplay.innerText = number;
}

function Save() {
  numberSaved.innerText = document.getElementById("numberOnScreen").innerText;
  historyEl.innerText += "-" + numberSaved.innerText;
  number = 0;
  Screendisplay.innerText = number;
}

function ajouter() {
  result.innerText = num1 + num2;
}

function soustraire() {
  result.innerText = num1 - num2;
}

function multiplier() {
  result.innerText = num1 * num2;
}

function divisier() {
  result.innerText = num1 / num2;
}
