// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

  // RETURNS THE CURRENT COLOR
const currentColor = document.querySelector("#current-color");

// DISPLAYS THE CURRENT COLOR TO MATCH THE BACKGROUND COLOR CHOSEN FROM THE PALETTE
const paletteColors = document.querySelectorAll("#palette .color")
paletteColors.forEach((color)=> {
  color.addEventListener("click", (event) => {
    currentColor.setAttribute("style", `background: ${color.style.background}`);
  });
})

// PIXELS CANVAS

const cells = document.querySelectorAll(".cell");

// DISPLAY COLOR IN THE CELL TO MATCH BACKGROUND OF CURRENT COLOR
cells.forEach((cell)=> {
  cell.addEventListener("click", (event)=> {
    cell.setAttribute("style", `background: ${currentColor.style.background}`);
  });
});