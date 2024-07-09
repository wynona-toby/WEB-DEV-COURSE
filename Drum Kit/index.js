 // MOUSE CLICK
 for (let i=0; i<document.querySelectorAll(".drum").length;i++)
 { 
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    let inner = this.innerHTML;
    sounds(inner);
    pressed(inner);
    }
  )
}

// KEYBOARD CLICK


document.addEventListener("keydown", function(event) {
  let key = event.key;
  sounds(key);
  pressed(key);
  
});
// SOUND FUNCTION

function sounds(key){
  switch(key){
    case ("w"):
      let w = new Audio("./sounds/crash.mp3");
      w.play();
      break;
    case ("a"):
      let a = new Audio("./sounds/kick-bass.mp3");
      a.play();
      break;
    case ("s"):
      let s = new Audio("./sounds/snare.mp3");
      s.play();
      break;
    case ("d"):
      let d = new Audio("./sounds/tom-1.mp3");
      d.play();
      break;
    case ("j"):
      let j = new Audio("./sounds/tom-2.mp3");
      j.play();
      break;
    case ("k"):
      let k = new Audio("./sounds/tom-3.mp3");
      k.play();
      break;
    case ("l"):
      let l = new Audio("./sounds/tom-4.mp3");
      l.play();
      break;
    default:
    console.log(inner);
  }
}

// BG SHADOW ON PRESS

function pressed(button){
  let press = document.querySelector("." + button);
  press.classList.add("pressed");
  press.classList.add("text-color");
  setTimeout(function (){
    press.classList.remove("pressed");
    press.classList.remove("text-color");
  }, 300);
}