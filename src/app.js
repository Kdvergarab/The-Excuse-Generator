/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog ", "My grandma ", "His turtle ", "My bird "];
let action = ["ate ", "peed ", "crushed ", "broke "];
let what = ["my homework ", "the keys", "the car "];
let when = [
  "before the class ",
  "right on time ",
  "when I finished ",
  "during my lunch ",
  "while I was praying "
];

let whoa = who[Math.floor(Math.random() * who.length)];
let actiona = action[Math.floor(Math.random() * action.length)];
let whata = what[Math.floor(Math.random() * what.length)];
let whena = when[Math.floor(Math.random() * when.length)];

let excuse = [whoa + actiona + whata + whena];

document.getElementById("excuse").innerHTML = excuse;
