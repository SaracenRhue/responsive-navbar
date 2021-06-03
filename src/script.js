'use strict';

const burger = document.querySelector('i');
const nav = document.querySelector('nav');

burger.addEventListener('click', function () {
  nav.classList.toggle('show');
})

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((item, index, array) => {
  item.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
})
