// ==UserScript==
// @name         Youtube Sidechat
// @namespace    AT
// @version      2.0
// @description  Reorder content panels and resize panels into a scrollable panel
// @author       Andy T.
// @include      *://www.youtube.com/*
// @grant        none
// @downloadURL  https://github.com/AndyLTang/YTSidechat/raw/master/YTSidechat.user.js
// @require      http://code.jquery.com/jquery-latest.js
// @noframes
// ==/UserScript==

function main(){
	var related = document.getElementById("related");
	var comments = document.getElementById("comments");

	related.insertAdjacentElement('afterend', comments);
}

$(window).one("yt-navigate-start", main);
$(window).one("click", main);