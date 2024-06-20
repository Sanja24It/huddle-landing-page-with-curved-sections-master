"use strict";
let form = document.querySelector(".form");

let email = document.querySelector(".email");

let mess = document.querySelector(".mess_err");

const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.setAttribute("novalidate", "");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (email.value === "" || !email.value.match(re)) {
    email.classList.add("error");
    mess.style.display = "block";
  } else {
    email.classList.remove("error");
    mess.style.display = "none";
  }
});
