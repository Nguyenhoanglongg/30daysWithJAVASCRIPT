const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const btnLike = $(".btn-like");
const btnSize = $$(".size");
const COLOR_BTN = document.querySelectorAll(".color");
COLOR_BTN.forEach((color) => {
  color.addEventListener("click", () => {
    let colorNameClass = color.className;
    if (!color.classList.contains("active-color")) {
      let colorName = colorNameClass.slice(
        colorNameClass.indexOf("-") + 1,
        colorNameClass.length
      );
      console.log(colorName);
      resetActiveBtn();
      color.classList.add("active-color");
      setNewColor(colorName);
    }
  });
});

function resetActiveBtn() {
  COLOR_BTN.forEach((color) => {
    color.classList.remove("active-color");
  });
}

function setNewColor(color) {
  document.querySelector(
    ".card__img img"
  ).src = `images/Nike Zoom KD 12 ${color}.png`;
}

// Like button functionality

btnLike.addEventListener("click", () => {
  btnLike.classList.toggle("active");
});

//Size button func

btnSize.forEach((size) => {
  size.addEventListener("click", () => {
    let sizeNameClass = size.className;
    if (!size.classList.contains("active-size")) {
      let sizeName = sizeNameClass.slice(
        sizeNameClass.indexOf("-") + 1,
        sizeNameClass.length
      );
      resetActiveSizeBtn();
      size.classList.add("active-size");
      setNewSize(sizeName);
    }
  });
});
function resetActiveSizeBtn() {
  btnSize.forEach((size) => {
    size.classList.remove("active-size");
  });
}
