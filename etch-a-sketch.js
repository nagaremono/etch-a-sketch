"use strict"

const container = document.querySelector('.grid');

for (let i = 0; i < (16*16); i++) {
  var box = document.createElement('div');
  box.classList.add('box');
  container.appendChild(box);
}

const boxes = Array.from(document.querySelectorAll('.box'))
boxes.forEach((box) => {
  box.addEventListener('mouseenter', (e) => {
    e.target.style.backgroundColor = '#1e1e1e'
  })
})

