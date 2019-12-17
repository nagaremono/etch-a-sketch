"use strict"

const container = document.querySelector('.grid');

load()

function load(size = 16) {
  for (let i = 0; i < (size*size); i++) {
    var box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
  }
  
  const boxes = Array.from(document.querySelectorAll('.box'))
  boxes.forEach((box) => {
    box.addEventListener('mouseenter', (e) => {
      e.target.style.backgroundColor = '#1e1e1e'
    });
  });
} 

function clear() {
  const boxes = Array.from(document.querySelectorAll('.box'))
  boxes.forEach((box) => {
      box.style.backgroundColor = '#dfdede';
  });
}

function createNewGrid() {
  var size = prompt('Input size for new grid', 0)
  while (container.firstChild) {
    container.removeChild(container.firstChild)
  }

  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`

  load(size)
}

const newButton = document.querySelector('.new')
newButton.addEventListener('click', createNewGrid)

const clearButton = document.querySelector('.clear')
clearButton.addEventListener('click', clear)

