// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

// CREATES AN ARRAY OF ALL THE COLORS
const allColors = document.querySelectorAll(".color");
const currentColor = document.querySelector("#current-color");

