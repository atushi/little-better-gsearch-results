// ==UserScript==
// @name           Little Better GSearch Results
// @namespace      http://atushiyamazaki.blogspot.com/
// @description    little better for google search results
// @include        http://www.google.*/search*
// @include        https://www.google.*/search*
// @version        0.0.01
// ==/UserScript==
myBody = document.getElementsByTagName("body")[0]; 
myBodyElements = myBody.getElementsByTagName("table");
for (var i=0; i<myBodyElements.length-4; i++) {
  if (myBodyElements[i].className=="") {myBodyElements[i].width="60%";}
}
