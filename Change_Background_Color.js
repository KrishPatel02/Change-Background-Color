const button = document.querySelector(".btn");
const background = document.querySelector(".backgroundsec");

const bgcolor = [
  "lightcoral",

  "lightblue",

  "lightcyan",

  "cornflowerblue",

  "cadetblue",

  "tomato",

  "peru",

]

background.style.backgroundColor = bgcolor[parseInt(Math.random() * bgcolor.length)];

const changebgFunction = () => {
  const colorindex = parseInt(Math.random() * bgcolor.length);
  background.style.background = bgcolor[colorindex];
};

button.addEventListener("click", () => {
  changebgFunction();
});
