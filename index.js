// DETECTING BUTTON PRESS
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",

    function () {
      var buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
    }
  );
}


// DETECTING KEYBOARD PRESS
document.addEventListener("keydown",

  function (event) {
    makeSound(event.key);
  }
);


// PLAYING SOUND DEPENDING ON LETTER SENT BY EVENT LISTENERS
function makeSound(key) {

  switch (key) {
    case "a":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "z":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "e":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "r":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "t":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "y":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "u":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default: console.log(buttonInnerHTML);
  }
}
