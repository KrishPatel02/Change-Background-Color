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

  "lightseagreen",
];

// Below Code work as : Change Background Color exactly after refresh

background.style.backgroundColor =
  bgcolor[parseInt(Math.random() * bgcolor.length)];

// Below Code work as : Change Background Color after clicking button

const changebgFunction = () => {
  const colorindex = parseInt(Math.random() * bgcolor.length);

  background.style.background = bgcolor[colorindex];
};

button.addEventListener("click", () => {
  changebgFunction();
});
