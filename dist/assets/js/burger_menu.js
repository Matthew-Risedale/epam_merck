"use strict";

var toggles = document.querySelectorAll(".burger_button");


function toggleHandler(toggle) {
  toggle.addEventListener( "click", function(e) {
    e.preventDefault();
    (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
  });
}

toggleHandler(toggles[0]);
