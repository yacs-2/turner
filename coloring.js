const enter = document.getElementById("enter");
const startScreen = document.getElementById("start-screen");
enter.addEventListener("click", function () {
   setTimeout(function () {
      startScreen.style.display = "none";
   }, 500);
});

const boxes = document.querySelectorAll(".box");
const box = document.querySelector(".box");
let currentColor = document.getElementById("color-picker").value;
let canvasColor = document.getElementById("canvas-color");
let currentIndex = 0;

let isMouseDown = false;

let canvasBackground = "rgb(0, 0, 0)";
canvasColor.value = "#ffffff";

canvasColor.addEventListener("input", () => {
   canvasBackground = canvasColor.value;
   document.getElementById("canvas-color").style.backgroundColor = canvasColor.value;
   boxes.forEach((box) => {
      box.style.backgroundColor = canvasColor.value;
   })
});

document.addEventListener("mousedown", () => {
   isMouseDown = true;
});

document.addEventListener("mouseup", () => {
   isMouseDown = false;
});

document.getElementById("color-picker").addEventListener("input", (e) => {
   currentColor = e.target.value;
});

boxes.forEach((box) => {
   box.addEventListener("mousedown", () => {
      box.style.backgroundColor = currentColor;
   });
   box.addEventListener("mouseenter", () => {
      if (isMouseDown) {
         box.style.backgroundColor = currentColor;
      }
   });
});

document.getElementById("color-picker").addEventListener("input", function (input) {
   document.getElementById("color-picker").style.backgroundColor = currentColor;
});

function cycleThrough() {
   for (let i = 0; i < boxes.length; i++) {
      boxes[i].style.border = "3px solid black";
      boxes[i].innerHTML = "";
   };
   boxes[currentIndex].style.border = "3px solid white";

   addEventListener("keydown", function (event) {
      if (event.code === "Space") {
         boxes[currentIndex].style.backgroundColor = currentColor;
      }
   });
   box.addEventListener("click", function () {
      box.style.backgroundColor = "white";
   });
}

cycleThrough();

addEventListener("keydown", function (event) {
   if (event.key === "ArrowRight") {
      currentIndex++;
      if (currentIndex === boxes.length) {
         currentIndex = 0;
      }
      cycleThrough();
   }
   if (event.key === "ArrowLeft") {
      currentIndex--;
      if (currentIndex < 0) {
         currentIndex = boxes.length - 1;
      }
      cycleThrough();
   }
   if (event.key === "ArrowUp") {
      currentIndex -= 25;
      if (currentIndex < 0) {
         currentIndex = boxes.length - 1;
      }
      cycleThrough();
   }
   if (event.key === "ArrowDown") {
      currentIndex += 25;
      if (currentIndex >= boxes.length) {
         currentIndex = 20;
      }
      cycleThrough();
   }
});

addEventListener("keydown", function (event) {
   if (event.ctrlKey && event.key === "Backspace" || event.key === "Tab" && event.key === "Shift") {
      boxes.forEach((box) => {
         box.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
      });
      cycleThrough()
   }
});
