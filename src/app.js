import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let cardSimbolos = ['♣', '♦', '♥', '♠'];
  let cardNumeros = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  let paloRandom = cardSimbolos[Math.floor(Math.random() * cardSimbolos.length)];
  let numeroRandom = cardNumeros[Math.floor(Math.random() * cardNumeros.length)];

  let paloTop = document.getElementById("paloTop");
  let paloBottom = document.getElementById("paloBottom");
  let numero = document.getElementById("numero");

  paloTop.innerHTML = paloRandom;
  paloBottom.innerHTML = paloRandom;
  numero.innerHTML = numeroRandom;
if (paloRandom === '♥' || paloRandom === '♦') {
  paloTop.style.color = "red";
  paloBottom.style.color = "red";
} else {
  paloTop.style.color = "black";
  paloBottom.style.color = "black";
}};
