"use strict";

const SubheaderButton = document.querySelectorAll(".subheader__menu_button");
const SubheaderMenu = document.querySelectorAll(".subheader__menu");

function toggleSubheader(toggle, window_up) {
  toggle.addEventListener( "click", function(e) {
    e.preventDefault();
    (window_up.classList.contains("subheader__menu_active") === true) ? window_up.classList.remove("subheader__menu_active") : window_up.classList.add("subheader__menu_active");
  });
}

toggleSubheader(SubheaderButton[0], SubheaderMenu[0]);
