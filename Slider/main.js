const photoArray = new Array();
photoArray[0] = "./img/img1.jpg";
photoArray[1] = "./img/img2.jpg";
photoArray[2] = "./img/img3.jpg";

let slideNumber = 0;
let isMouseOver = false;

const slider = document.querySelector(".slider");

for (let index = 0; index < photoArray.length; index++) {
  const slide = document.createElement("div");
  slide.classList.add("slide");
  slider.appendChild(slide);

  const img = document.createElement("img");
  img.src = photoArray[index];
  slide.appendChild(img);
}

for (let index = 0; index < photoArray.length; index++) {
  const btn = document.createElement("button");
  btn.classList.add(
    "btn",
    "changePictureBtn",
    `btn-picture-${index + 1}`,
    `${index + 1}`
  );

  slider.appendChild(btn);
}

const btns = document.querySelectorAll(".changePictureBtn");
btns[0].addEventListener("click", () => {
  slideNumber = -1;
  buttonNext.click();
});
btns[1].addEventListener("click", () => {
  slideNumber = 0;
  buttonNext.click();
});
btns[2].addEventListener("click", () => {
  slideNumber = 1;
  buttonNext.click();
});

const buttonNext = document.createElement("button");
buttonNext.classList.add("btn", "btn-next");

const buttonBack = document.createElement("button");
buttonBack.classList.add("btn", "btn-back");

slider.appendChild(buttonBack);
slider.appendChild(buttonNext);

const slides = document.querySelectorAll(".slide");

slides.forEach((element, index) => {
  element.style.transform = `translateX(${index * 100}%)`;
});

let maxSlideNumber = slides.length - 1;

buttonNext.addEventListener("click", () => {
  if (slideNumber === maxSlideNumber) {
    slideNumber = 0;
  } else {
    slideNumber++;
  }

  slides.forEach((element, index) => {
    element.style.transform = `translateX(${(index - slideNumber) * 100}%)`;
  });
});

buttonBack.addEventListener("click", () => {
  if (slideNumber === 0) {
    slideNumber = maxSlideNumber;
  } else {
    slideNumber--;
  }

  slides.forEach((element, index) => {
    element.style.transform = `translateX(${(index - slideNumber) * 100}%)`;
  });
});

function autoChange() {
  if (isMouseOver) {
  } else {
    buttonNext.click();
    console.log("auto Change start");
    checkMouseOver();
  }
}

function checkMouseOver() {
  if (!isMouseOver) {
    setTimeout("autoChange()", 5000);
  }
}

slider.addEventListener("mouseover", () => {
  isMouseOver = true;
  console.log(isMouseOver);
});

slider.addEventListener("mouseleave", () => {
  isMouseOver = false;
  console.log(isMouseOver);
  setTimeout("autoChange()", 5000);
});
