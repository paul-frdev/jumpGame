let character = document.getElementById('character');
let block = document.getElementById('block');

function jump() {
  character.classList.add('animate');
  if (character.classList != 'animate') {
    character.classList.add('animate')
  }
  setTimeout(function () {
    character.classList.remove('animate');
  }, 500)
}

document.querySelector('html').onclick = jump;

let checkDead = setInterval(() => {
let characterTop = parseInt (window.getComputedStyle(character).getPropertyValue('top'));
let blockLeft = parseInt (window.getComputedStyle(block).getPropertyValue('left'));
 if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
   block.style.animation = 'none';
   block.style.display = 'none';
   alert ('you loser')
 }
}, 10);