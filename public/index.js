"use strict";
const btnPurple = document.querySelector("#btn-purple");
btnPurple.addEventListener("click", (e) => {
  e.preventDefault();
  btnPurple.classList.add("border-orange-500", "border-4");
});
btnPurple.addEventListener("mouseout", (e) => {
  e.preventDefault();
  setTimeout(() => {
    btnPurple.classList.remove("border-orange-500", "border-4");
  }, 1000);
});
