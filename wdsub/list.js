//These are the checkboxes for the <li>'s
const UNCHECK_ICON = '<svg onclick="crossOut(this)" viewBox="0 0 448 512" width="2em" title="square-uncheck"> <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z" /> </svg>';
const CHECK_ICON = '<svg onclick="uncrossOut(this)" viewBox="0 0 448 512" width="2em" title="square-check"> <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /> </svg>';

//This is the function which adds a new <li>.
function addNewItem() {
  let newItem;
  let myList;
  let newItemText;
  let input;
  
  //Getting input from input field for new <li>
  input = document.getElementById("new-item");
  newItemText = input.value;
  
//Doesn't allow for blank spaces to be added
  if (newItemText != "") {
    newItem = document.createElement("li");
    newItem.innerHTML = UNCHECK_ICON + "   " + newItemText;
    input.value = "";

    myList = document.getElementById("list-grp");

    myList.appendChild(newItem);
  }
}

//This clears all <li>'s in the list-grp
function clearList() {
  let theList = document.getElementById("list-grp");
  theList.innerHTML = "";
}

//This crosses out <li>'s
function crossOut(_icon) {
  let thisItem = _icon.parentElement;
  thisItem.style.textDecoration = "solid 2px line-through";
  thisItem.style.color = "gray";
  thisItem.innerHTML = CHECK_ICON + "   " + thisItem.innerText;
}

function uncrossOut(_icon) {
  let thisItem = _icon.parentElement;
  thisItem.style.textDecoration = "none";
  thisItem.style.color = "black";
  thisItem.innerHTML = UNCHECK_ICON + "   " + thisItem.innerText;
}

//This is the code which enables the addNewItem to run when "Enter" is pressed on the keyboard.
window.addEventListener("keydown", (_key) => {
  if (_key.code == "Enter") addNewItem();
});
