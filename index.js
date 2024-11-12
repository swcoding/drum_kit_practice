// document.querySelector("button").addEventListener("click", () => {
//   alert("I'm hungry");
// });

var w = new Audio("sounds/tom-1.mp3");
var a = new Audio("sounds/tom-2.mp3");
var s = new Audio("sounds/tom-3.mp3");
var d = new Audio("sounds/tom-4.mp3");
var j = new Audio("sounds/kick.mp3");
var k = new Audio("sounds/snare.mp3");
var l = new Audio("sounds/crash.mp3");

document.addEventListener("keydown", (keydown) => {
  switch (keydown.key) {
    case "w":
      w.play();
      break;
    case "a":
      a.play();
      break;
    case "s":
      s.play();
      break;
    case "d":
      d.play();
      break;
    case "j":
      j.play();
      break;
    case "k":
      k.play();
      break;
    case "l":
      l.play();
      break;
  }
});

document.addEventListener("keydown", (keydown) => {
  console.log(`Play ${keydown.key}`);
  var activeButton = document.querySelector(`.${keydown.key}`);
  activeButton.classList.add("pressed");

  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
});
