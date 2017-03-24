"use strict";

const checkboxes = document.querySelectorAll(".checkbox");

for (var i = checkboxes.length - 1; i>=0; i--) {
  var checkbox = checkboxes[i];
  checkAction(checkbox);
}

function checkAction(checkbox) {
  checkbox.addEventListener("click", function(e) {
    e.preventDefault();
    (this.classList.contains("checkbox--checked") === true) ? this.classList.remove("checkbox--checked") : this.classList.add("checkbox--checked");
  });
}
