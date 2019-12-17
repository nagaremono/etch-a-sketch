"use strict"

const container = document.querySelector('.grid');

for (let i = 0; i < (16*16); i++) {
  var box = document.createElement('div');
  box.classList.add('box');
  container.appendChild(box);
}

