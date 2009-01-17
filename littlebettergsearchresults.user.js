// ==UserScript==
// @auther         Atushi Yamazaki
// @name           Little Better GSearch Results
// @namespace      http://atushiyamazaki.blogspot.com/
// @description    little better for google search results
// @include        http://www.google.*/search*
// @include        https://www.google.*/search*
// @version        0.0.04
// ==/UserScript==
var body = document.getElementsByTagName("body")[0];
var table = body.getElementsByTagName("table");
var div = body.getElementsByTagName("div");
this.scroll = function() { rsChange(); }
window.addEventListener("scroll", this.scroll, false);

function rsChange() {
    // navbar
    if (div) {
        lastNavbar = 0;
        for (var i = 0; i < div.length; i++) {
            if (div[i].id == "navbar") lastNavbar = i;
        }
        if (lastNavbar > 0) div[lastNavbar].id = "lastnavbar";
    }
    deleteElement("navbar");

    // width
    for (var i = 0; i < table.length; i++) {
        if (table[i].className == "" && table[i].align != "center") table[i].width="60%";
    }
}

function deleteElement(idName) {
    div = document.getElementById(idName);
    if (div) div.parentNode.removeChild(div);
}

rsChange();
