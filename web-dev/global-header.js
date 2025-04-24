/**
  This script will inject the global page header into the #gheader of each page
**/

const INJECT = '<div id="global-preheader"></div><h1 id="main-title">Zachary\'s Website</h1><div id="global-header"><ul id="nav-list"><li id="faves">Home<ul class="submenu"><li><a href="#">Name</a></li><li><a href="#">D.o.B.</a></li><li><a href="#">SSN</a></li><li><a href="#">Address</a></li></ul></li><li id="faves">Faves<ul class="submenu"><li><a href="#">Favorite Movie</a></li><li><a href="#">Favorite Show</a></li><li><a href="#">Favorite Book</a></li><li><a href="#">Favorite Song</a></li></ul></li><li id="photos">Photos<ul class="submenu"><li><a href="#">Album 1</a></li><li><a href="#">Album 2</a></li><li><a href="#">Album 3</a></li></ul></li><li id="web-dev">Web Development<ul class="submenu"><li><a href="#">Week 1</a></li><li><a href="#">Week 2</a></li><li><a href="#">Week 3</a></li><li><a href="#">Week 4</a></li><li><a href="#">Week 5</a></li><li><a href="#">Week 6</a></li><li><a href="#">Week 7</a></li><li><a href="#">Week 8</a></li><li><a href="#">Week 9</a></li></ul></li></ul></div>';

let _div = document.getElementById("gheader");

_div.innerHTML = INJECT
