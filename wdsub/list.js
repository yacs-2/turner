//These are the checkboxes for the <li>'s
const UNCHECK_ICON = '<svg onclick="crossOut(this)" viewBox="0 0 448 512" width="2em" title="square-uncheck"> <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z" /> </svg>';
const CHECK_ICON = '<svg onclick="unmarkItem(this)" viewBox="0 0 448 512" width="2em" title="square-check"> <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /> </svg>';

//This is the function which adds a new <li>.
function addNewItem() {
  let newItem;
  let myList;
  let newItemText;
  let input;
  let listBorder;
  
  //Getting input from input field for new <li>
  input = document.getElementById("new-item");
  newItemText = input.value;
  
  if (newItemText != "") {
    newItem = document.createElement("li");
    newItem.innerHTML = UNCHECK_ICON + newItemText;
    newItem.style.listStyleType = "none";
    newItem.style.transform = "translate(0, 25px)";
    input.value = "";

    myList = document.getElementById("to-do-list");

    myList.appendChild(newItem);
    
    listBorder = document.getElementById("list-grp");
    listBorder.style.border = "solid black 3px";
  }
}

//This clears all <li>'s in the list-grp
function clearList() {
  let theList = document.getElementById("to-do-list");
  theList.innerHTML = "";
  listBorder = document.getElementById("to-do-list");
  listBorder.style.border = "";
}

function crossOut(_icon) {
  let thisItem = _icon.parentElement;
  thisItem.style.textDecoration = "solid 2px line-through";
  thisItem.innerHTML = CHECK_ICON + "   " + thisItem.innerText;
}

function unmarkItem(_icon) {
  let thisItem = _icon.parentElement;
  thisItem.style.textDecoration = "none";
  thisItem.innerHTML = UNCHECK_ICON + "   " + thisItem.innerText;
}

//This is the code which enables the addNewItem to run when "Enter" is pressed on the keyboard.
window.addEventListener("keydown", (_key) => {
  if (_key.code == "Enter") addNewItem();
});
