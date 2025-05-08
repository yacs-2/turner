function pythag() {
  const _inputArr = document.querySelectorAll(".input");
  let _a = _inputArr[0];
  let _b = _inputArr[1];
  let _c = _inputArr[2];
  
  if (_a.value == "" && _b.value == "" || _b.value == "" && _c.value == "" || _c.value == "" && _a.value == "") {
    window.alert("We gotta get at least 20 bro.");
    _a.value = "";
    _b.value = "";
    _c.value = "";
  }
  if (_a.value == "" && _b.value != "" && _c.value != "") {
    _a.value = Math.sqrt(Math.pow(_c.value, 2) - Math.pow(_b.value, 2));
  }
  if (_b.value == "" && _a.value != "" && _c.value != "") {
    _b.value = Math.sqrt(Math.pow(_c.value, 2) - Math.pow(_a.value, 2));
  }
  if (_c.value == "" && _a.value != "" && _b.value != "") {
    _c.value = Math.sqrt(Math.pow(_a.value, 2) + Math.pow(_b.value, 2));
  }
}

document.getElementById("compute-button").addEventListener("click", pythag);

function clear() {
  const clearButton = document.getElementById("clear-button");
  const _inputArr = document.querySelectorAll(".input");
  let _a = _inputArr[0];
  let _b = _inputArr[1];
  let _c = _inputArr[2];
  
  _a.value = "";
  _b.value = "";
  _c.value = "";
}

document.getElementById("clear-button").addEventListener("click", clear);
