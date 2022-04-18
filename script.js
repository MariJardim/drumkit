const botoes = document.querySelectorAll('.drum')

function handleKey(e){
  makeSound(e.key)
  animateButton(e.key)
}
function handleClick(e){
  makeSound(e.target.innerText)
  animateButton(e.target.innerText)
}

window.addEventListener('keydown', handleKey)
botoes.forEach((botao)=> {botao.addEventListener('click', handleClick)})

function makeSound(key){
  switch(key){
    case "w":
      const tom1 = new Audio('./sounds/tom-1.mp3')
      tom1.play()
      break;
    case 'a':
      const tom2 = new Audio('./sounds/tom-2.mp3')
      tom2.play()
      break;
    case 's':
      const tom3 = new Audio('./sounds/tom-3.mp3')
      tom3.play()
      break;
    case 'd':
      const tom4 = new Audio('./sounds/tom-4.mp3')
      tom4.play()
      break;
    case 'j':
      const snare = new Audio('./sounds/snare.mp3')
      snare.play()
      break;
    case 'k':
      const crash = new Audio('./sounds/crash.mp3')
      crash.play()
      break;
    case 'l':
      const kickBass = new Audio('./sounds/kick-bass.mp3')
      kickBass.play()
      break;
      
  }
}

function animateButton(currentKey){
const btn = document.querySelector('.' + currentKey)

btn.classList.add('pressed')

setTimeout(()=>{
  btn.classList.remove('pressed')}, 100);
}