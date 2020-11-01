"use strict";

const buttons = document.querySelectorAll(".nav-items-btn");
const sliders = document.querySelectorAll(".slide");
const btnLeft = document.getElementById("item-1");
const btnMiddle = document.getElementById("item-2");
const btnRight = document.getElementById("item-3");

buttons.forEach((btn) =>
  btn.addEventListener("click", (event) => {
    event.preventDefault();

    sliders.forEach((slide) => {
      slide.classList.add("not-active");

      if (event.target.attributes[1].name == "data-btnleft") {
        btnMiddle.classList.remove("active");
        btnRight.classList.remove("active");
        btnLeft.classList.add("active");
      } else if (event.target.attributes[1].name == "data-btnmiddle") {
        btnLeft.classList.remove("active");
        btnRight.classList.remove("active");
        btnMiddle.classList.add("active");
      } else if (event.target.attributes[1].name == "data-btnright") {
        btnMiddle.classList.remove("active");
        btnLeft.classList.remove("active");
        btnRight.classList.add("active");
      }
    });
  })
);

const popupLinks = document.querySelectorAll(".popup-link");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;
const timeout = 800;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];

    popupLinks.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute("href").replace("#", "");
      const currentPopup = document.getElementById(popupName);
      popupOpen(currentPopup);
      e.preventDefault();
    });
  }
}

const popupCloseIcon = document.querySelectorAll(".close-popup");
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener("click", function (e) {
      popupClose(el.closest(".popup"));
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector(".popup.open");
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    curentPopup.classList.add("open");
    curentPopup.addEventListener("click", function (e) {
      if (!e.target.closest(".popup__content")) {
        popupClose(e.target.closest(".popup"));
      }
    });
  }
}

function bodyLock() {
  const lockPaddingValue =
    window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";

  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPaddingValue.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
  }

  body.style.paddingRight = lockPaddingValue;
  body.classList.add("lock");

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnLock () {

  setTimeout(function(){
    for (let index = 0; index < lockPadding.lengthl index++){
      const el = lockPadding[index];
      el.style.paddingRight = '0px';
    }

    body.style.paddingRight = '0px';
    body.style.classList.remove("lock");
    
  }, timeout);
}