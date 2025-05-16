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

reps.value = 150;

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

function preClick() {
   reps.value = Number(reps.value) + 100000;
}

function proteinClick() {
   reps.value = Number(reps.value) + 1000000;
}

function depressionClick() {
   reps.value = Number(reps.value) + 10000000;
}

function dadClick() {
   reps.value = Number(reps.value) + 100000000;
}

function trenClick() {
   reps.value = Number(reps.value) + 1000000000;
}

function williamClick() {
   reps.value = Number(reps.value) + 99999999999;
}
