// ==UserScript==
// @name           Little Better GSearch Results
// @namespace      http://atushiyamazaki.blogspot.com/
// @description    little better for google search results
// @include        http://www.google.*/search*
// @include        https://www.google.*/search*
// @version        0.0.02
// ==/UserScript==
myBody = document.getElementsByTagName("body")[0];
myBodyElements = myBody.getElementsByTagName("table");
this.scroll = function() { rsChange(); }
window.addEventListener("scroll", this.scroll, false);

function rsChange() {
  for (var i = 0; i < myBodyElements.length; i++) {
    if (myBodyElements[i].className == "" && myBodyElements[i].align != "center") {
      myBodyElements[i].width="60%";
    }
  }
}

rsChange();
