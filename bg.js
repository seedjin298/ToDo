const body = document.querySelector("body");

const IMG_NUMBER = 5;

// function handleImgLoad() {
//   console.log("finished loading");
// }

function paintImage(imgNumber) {
  const image = document.createElement("img");
  image.src = `${imgNumber}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
  //   image.addEventListener("loadend", handleImgLoad);
}

function getRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER) + 1;
  return number;
}

function init() {
  const randomNumber = getRandom();
  paintImage(randomNumber);
}

init();
