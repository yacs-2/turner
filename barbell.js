let hasPumpCover = false;
let hasWristStraps = false;
let hasElbowWrap = false;
let hasSmellingSalts = false;
let hasJuicyPre = false;
let hasProtein = false;
let hasDepression = false;
let hasDadMusic = false;
let hasTren = false;
let hasWilliam = false;

const pumpCover = document.getElementById("pump-cover");
const wristStraps = document.getElementById("wrist-straps");
const elbowWrap = document.getElementById("elbow-wrap");
const smellingSalts = document.getElementById("smelling-salts");
const preWorkout = document.getElementById("pre-workout");
const protein = document.getElementById("protein");
const depression = document.getElementById("depression");
const dadMusic = document.getElementById("dad-music");
const tren = document.getElementById("tren");
const william = document.getElementById("william");

const barbell = document.getElementById("barbell");

let reps = document.getElementById("reps");

reps.value = 999999999998;

//default upgrade
function barbellClick() {
   reps.value = Number(reps.value) + 1;
}
barbell.addEventListener("click", barbellClick)

function pumpClick() {
   reps.value = Number(reps.value) + 10;
}
pumpCover.addEventListener("click", function () {
   if (reps.value >= 150) {
      reps.value = reps.value - 150;
      pumpCover.id = "sold1";
      pumpCover.style.pointerEvents = "none";
      barbell.addEventListener("click", pumpClick);
      barbell.removeEventListener("click", barbellClick);
   }
});

function wristClick() {
   reps.value = Number(reps.value) + 100;
}
wristStraps.addEventListener("click", function () {
   if (reps.value >= 1000) {
      reps.value = reps.value - 1000;
      wristStraps.id = "sold2";
      wristStraps.style.pointerEvents = "none";
      barbell.addEventListener("click", wristClick);
      barbell.removeEventListener("click", pumpClick);
   }
});

function elbowClick() {
   reps.value = Number(reps.value) + 1000;
}
elbowWrap.addEventListener("click", function () {
   if (reps.value >= 10000) {
      reps.value = reps.value - 10000;
      elbowWrap.id = "sold3";
      elbowWrap.style.pointerEvents = "none";
      barbell.addEventListener("click", elbowClick);
      barbell.removeEventListener("click", wristClick);
   }
});

function smellingClick() {
   reps.value = Number(reps.value) + 10000;
}
smellingSalts.addEventListener("click", function () {
   if (reps.value >= 50000) {
      reps.value = reps.value - 50000;
      smellingSalts.id = "sold4";
      smellingSalts.style.pointerEvents = "none";
      barbell.addEventListener("click", smellingClick);
      barbell.removeEventListener("click", elbowClick);
   }
});

function preClick() {
   reps.value = Number(reps.value) + 100000;
}
preWorkout.addEventListener("click", function () {
   if (reps.value >= 100000) {
      reps.value = reps.value - 100000;
      preWorkout.id = "sold5";
      preWorkout.style.pointerEvents = "none";
      barbell.addEventListener("click", preClick);
      barbell.removeEventListener("click", smellingClick);
   }
});

function proteinClick() {
   reps.value = Number(reps.value) + 1000000;
}
protein.addEventListener("click", function () {
   if (reps.value >= 1000000) {
      reps.value = reps.value - 1000000;
      protein.id = "sold6";
      protein.style.pointerEvents = "none";
      barbell.addEventListener("click", proteinClick);
      barbell.removeEventListener("click", preClick);
   }
});

function depressionClick() {
   reps.value = Number(reps.value) + 10000000;
}
depression.addEventListener("click", function () {
   if (reps.value >= 5000000) {
      reps.value = reps.value - 5000000;
      depression.id = "sold7";
      depression.style.pointerEvents = "none";
      barbell.addEventListener("click", depressionClickClick);
      barbell.removeEventListener("click", proteinClick);
   }
});

function dadClick() {
   reps.value = Number(reps.value) + 100000000;
}
dadMusic.addEventListener("click", function () {
   if (reps.value >= 10000000) {
      reps.value = reps.value - 10000000;
      dadMusic.id = "sold8";
      dadMusic.style.pointerEvents = "none";
      barbell.addEventListener("click", dadClick);
      barbell.removeEventListener("click", depressionClick);
   }
});

function trenClick() {
   reps.value = Number(reps.value) + 1000000000;
}
tren.addEventListener("click", function () {
   if (reps.value >= 100000000) {
      reps.value = reps.value - 100000000;
      tren.id = "sold9";
      tren.style.pointerEvents = "none";
      barbell.addEventListener("click", trenClick);
      barbell.removeEventListener("click", dadClick);
   }
});

function williamClick() {
   reps.value = Number(reps.value) + 99999999999;
}
william.addEventListener("click", function () {
   if (reps.value >= 999999999) {
      reps.value = reps.value - 999999999;
      william.id = "sold9";
      william.style.pointerEvents = "none";
      barbell.addEventListener("click", williamClick);
      barbell.removeEventListener("click", trenClick);
   }
});

function endGame() {
	if (reps.value >= 999999999999) {
		document.getElementById("the-end").style.display = "block";
		document.getElementById("end-story").style.animation = "scrollDown 45s linear";
	} 
}
setInterval(endGame, 100);
