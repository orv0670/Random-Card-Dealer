/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  var numeroDeCarta = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "k",
    "Q",
    "A"
  ];
  var suit = ["&#9824", "&#9829", "&#9827", "&#9830"];
  var numerosAleatorios =
    numeroDeCarta[Math.floor(Math.random() * numeroDeCarta.length)];
  var randomSuit = suit[this.Math.floor(Math.random() * suit.length)];

  if (randomSuit == "&#9829" || randomSuit == "&#9830") {
    document.querySelector(".carta").style.color = "red";
  }

  document.querySelector(".suit1").innerHTML = randomSuit;
  document.querySelector(".valor").innerHTML = numerosAleatorios;
  document.querySelector(".suit2").innerHTML = randomSuit;
};
