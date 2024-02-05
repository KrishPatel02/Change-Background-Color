const button = document.querySelector(".btn");
const background = document.querySelector(".backgroundsec");

// const bgcolor = [
//   "lightblue",
//   "lightcoral",
//   "lightsalmon",
//   "lightseagreen",
//   "lightsteelblue",
//   "green",
// ];

const bgcolor = [
  "violet",
  "indigo",
  "blue",
  "green",
  "yellow",
  "orange",
  "red"

]

background.style.backgroundColor = bgcolor[parseInt(Math.random() * bgcolor.length)];

const changebgFunction = () => {
  const colorindex = parseInt(Math.random() * bgcolor.length);
  background.style.background = bgcolor[colorindex];
};

button.addEventListener("click", () => {
  changebgFunction();
});
