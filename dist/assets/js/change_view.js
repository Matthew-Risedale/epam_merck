"use strict";

const tableView = document.getElementById('view_1');
const cardView = document.getElementById('view_2');
const result = document.querySelectorAll('.card_wrapper');

function changeViewOnTable(view){
  view.addEventListener('click', function(e){
    e.preventDefault();
    if (result[0].classList.contains('card_wrapper--table') === false){
       result[0].classList.remove('card_wrapper--card');
       result[0].classList.add('card_wrapper--table');
    }
  })
};

changeViewOnTable(tableView);

function changeViewOnCard(view){
  view.addEventListener('click', function(e){
    e.preventDefault();
    if (result[0].classList.contains('card_wrapper--card') === false){
       result[0].classList.remove('card_wrapper--table');
       result[0].classList.add('card_wrapper--card');
    }
  })
};

changeViewOnCard(cardView);
