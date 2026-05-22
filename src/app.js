import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let cardSimbolos = ['♣', '♦', '♥', '♠'];
  let cardNumeros = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  let paloRandom = cardSimbolos[Math.floor(Math.random()*cardSimbolos.length)]
  let numeroRandom = cardNumeros[Math.floor(Math.random()*cardNumeros.length)]
  console.log(paloRandom);
  console.log(numeroRandom)
  let paloTop = document.getElementById("paloTop")
  paloTop.innerHTML=paloRandom


};
