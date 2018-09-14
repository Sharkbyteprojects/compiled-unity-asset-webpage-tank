// ==UserScript==
// @name         AntiGoogle
// @namespace    http://tampermonkey.net/
// @version      4.2
// @description  Delete Google
// @author       SharkSoft
// @match        https://www.google.de/*
// @match        https://www.google.com/*
// @match        https://news.google.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var stru = "Uebersetzer";
    var resultu = stru.link("https://www.deepl.com/translator");
    var strm = "Karte";
    var resultm = strm.link("https://www.openstreetmap.org");
    var str = "Suchmaschiene";
var result = str.link("https://duckduckgo.com/");
    document.write("<h1>Google ist eine Datenfressmaschine</h1><hr><h2>Hier Alternativen:</h2><Title>AntiGOOGLE</title><p><li>", result, "</li><li>", resultu, "</li><li>", resultm, "</li></p>" );
    window.stop();
})();
