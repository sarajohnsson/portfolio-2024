"use strict";

// SHOW MENU
// Validate if constant exists
var navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", function () {
    navMenu.classList.add("show-menu");
  });
} // HIDE MENU
// Validate if constanst exists


if (navClose) {
  navClose.addEventListener("click", function () {
    navMenu.classList.remove("show-menu");
  });
} // REMOVE MENU FOR MOBILE


var navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  var navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach(function (n) {
  return n.addEventListener("click", linkAction);
});