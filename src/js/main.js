"use strict";

const buttons = document.querySelectorAll(".nav-items-btn");
const sliders = document.querySelectorAll(".slide");
const btnLeft = document.getElementById("item-1")
const btnMiddle = document.getElementById("item-2")
const btnRight = document.getElementById("item-3")

buttons.forEach((btn) =>
  btn.addEventListener("click", (event) => {
    event.preventDefault();

    sliders.forEach((slide) => {
      slide.classList.add("not-active");

      if (event.target.attributes[1].name == "data-btnleft") {
        btnLeft.classList.add("active")
        btnMiddle.classList.remove("active");
        btnRight.classList.remove("active");
      } else if (event.target.attributes[1].name == "data-btnmiddle"){
        btnMiddle.classList.add("active")
        btnLeft.classList.remove("active")
        btnRight.classList.remove("active");
      } else if (event.target.attributes[1].name == "data-btnright"){
        btnRight.classList.add("active")
        btnMiddle.classList.remove("active")
        btnLeft.classList.remove("active")

      }

    });
  })
);