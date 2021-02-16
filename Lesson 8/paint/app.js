const colorArr = [
  "blue",
  "green",
  "red",
  "yellow",
  "gray",
  "brown",
  "tan",
  "lime",
  "pink",
  "cyan",
  "purple",
  "orange",
  "silver",
  "maroon",
  "olive",
  "cadetblue",
];

let colors = document.querySelector(".colors");
let reset = document.querySelector(".reset");
let select = document.querySelector("select");
let brush = document.querySelector(".brush");

let currentColor = "black";
const changeColor = (Event) => {
  if (previousShape == "triangle") {
    brush.style.borderBottomColor = Event.target.style.backgroundColor;
    brush.style.backgroundColor = "rgba(0, 0, 0, 0)";
    currentColor = Event.target.style.backgroundColor;
  } else {
    brush.style.backgroundColor = Event.target.style.backgroundColor;
    currentColor = Event.target.style.backgroundColor;
  }
};

const resetColor = () => {
  currentColor = "black";
  if (previousShape == "triangle") {
    brush.style.backgroundColor = "rgba(0, 0, 0, 0)";
    brush.style.borderBottomColor = "black";
  } else {
    brush.style.backgroundColor = "black";
  }
};

let previousShape = "poop";
const changeShape = () => {
  brush.classList.remove(previousShape);
  brush.classList.add(select[select.selectedIndex].value);
  previousShape = select[select.selectedIndex].value;
  if (select[select.selectedIndex].value == "triangle") {
    brush.style.backgroundColor = "rgba(0, 0, 0, 0)";
    brush.style.borderBottomColor = currentColor;
  } else {
    brush.style.backgroundColor = currentColor;
  }
};

colorArr.forEach((color) => {
  let colorTab = document.createElement("div");
  colorTab.style.backgroundColor = color;
  colorTab.style.cursor = "pointer";
  colorTab.classList.add("color");
  colorTab.addEventListener("click", changeColor);
  colors.appendChild(colorTab);
});

select.addEventListener("change", changeShape);
reset.addEventListener("click", resetColor);
