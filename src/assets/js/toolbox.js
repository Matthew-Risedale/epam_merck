"use strict";

const toolboxItems = document.querySelectorAll(".toolbox__item > a");

for (let i = toolboxItems.length - 1; i>=0; i--) {
  let toolboxItem = toolboxItems[i];
  toolAction(toolboxItem);
}

function toolAction(toolboxItem) {
  toolboxItem.addEventListener("click", function(e) {
    e.preventDefault();
    (this.parentElement.classList.contains("toolbox__item--active") === true) ? this.parentElement.classList.remove("toolbox__item--active") : this.parentElement.classList.add("toolbox__item--active");
  });
}
