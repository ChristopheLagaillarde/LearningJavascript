let number = 0;
let Screendisplay = document.getElementById("numberOnScreen");
let numberSaved = document.getElementById("NumberSavedHTML");
let historyEl = document.getElementById("history-el");
let MessageEl = document.getElementById("message-el");

let num1 = 8;
let num2 = 4;
let result = document.getElementById("resultat");

var myMusic = new Audio("mj.mp3");

document.getElementById("boutonAjouter").style.display = "none";
document.getElementById("boutonSoustraire").style.display = "none";
document.getElementById("boutonMultiplier").style.display = "none";
document.getElementById("boutonDiviser").style.display = "none";
document.getElementById("numberOnScreen").style.display = "none";
document.getElementById("NumberSavedHTML").style.display = "none";
document.getElementById("AddingButton").style.display = "none";
document.getElementById("SaveButton").style.display = "none";
document.getElementById("history-el").style.display = "none";
document.getElementById("MainMenuButton").style.display = "none";

function Back() {
  myMusic.pause();
  MessageEl.innerText = "";
  document.getElementById("StartingButton").style.display = "inline";
  document.getElementById("PlayARound").style.display = "block";
  document.getElementById("MainMenuButton").style.display = "none";

  document.getElementById("boutonAjouter").style.display = "none";
  document.getElementById("boutonAjouter").style.display = "none";
  document.getElementById("boutonSoustraire").style.display = "none";
  document.getElementById("boutonMultiplier").style.display = "none";
  document.getElementById("boutonDiviser").style.display = "none";
  document.getElementById("numberOnScreen").style.display = "none";
  document.getElementById("NumberSavedHTML").style.display = "none";
  document.getElementById("AddingButton").style.display = "none";
  document.getElementById("SaveButton").style.display = "none";
  document.getElementById("history-el").style.display = "none";
}
function Start() {
  myMusic.play();
  document.getElementById("StartingButton").style.display = "none";
  document.getElementById("PlayARound").style.display = "none";

  document.getElementById("MainMenuButton").style.display = "inline";
  document.getElementById("boutonAjouter").style.display = "inline";
  document.getElementById("boutonAjouter").style.display = "inline";
  document.getElementById("boutonSoustraire").style.display = "inline";
  document.getElementById("boutonMultiplier").style.display = "inline";
  document.getElementById("boutonDiviser").style.display = "inline";
  document.getElementById("numberOnScreen").style.display = "block";
  document.getElementById("NumberSavedHTML").style.display = "block";
  document.getElementById("AddingButton").style.display = "inline";
  document.getElementById("SaveButton").style.display = "inline";
  document.getElementById("history-el").style.display = "block";

  result.innerText = "sum :" + (num1 + num2);
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
  result.innerText = "sum:" + (num1 + num2);
}

function soustraire() {
  result.innerText = "minus:" + (num1 - num2);
}

function multiplier() {
  result.innerText = "multiplied:" + num1 * num2;
}

function divisier() {
  result.innerText = "divided:" + num1 / num2;
}
