// ==UserScript==
// @auther         Atushi Yamazaki
// @name           Little Better GSearch Results
// @namespace      http://atushiyamazaki.blogspot.com/
// @description    little better for google search results
// @include        http://www.google.*/search*
// @include        https://www.google.*/search*
// @version        0.0.03
// ==/UserScript==

myBody = document.getElementsByTagName("body")[0];
myBodyElements = myBody.getElementsByTagName("table");
myDivElements = myBody.getElementsByTagName("div");
this.scroll = function() { rsChange(); }
window.addEventListener("scroll", this.scroll, false);


function rsChange() {
  // navbar
  if (myDivElements) {
    lastNavbar = 0;
    for (var i = 0; i < myDivElements.length; i++) {
      if (myDivElements[i].id == "navbar") {
        lastNavbar = i;
      }
    }
    if (lastNavbar > 0) { myDivElements[lastNavbar].id = "lastnavbar"; }
  }
  deleteElement("navbar");

  // width
  for (var i = 0; i < myBodyElements.length; i++) {
    if (myBodyElements[i].className == "" && myBodyElements[i].align != "center") {
      myBodyElements[i].width="60%";
    }
  }
}


function deleteElement(idName) {
  myDivElements = document.getElementById(idName);
  if (myDivElements) {
    myDivElements.parentNode.removeChild(myDivElements);
  }
}

rsChange();
