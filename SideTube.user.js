// ==UserScript==
// @name         SideTube
// @namespace    dairful
// @version      0.0.1
// @description  Reorder content panels and resize panels into a scrollable panel
// @author       Dairful
// @include      *://www.youtube.com/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// @downloadURL  https://github.com/Dairful/SideTube/raw/master/SideTube.user.js
// ==/UserScript==

function main(){
    // Check if current page is a video page
    if($("#page").hasClass("watch")){
      // Reorder content panels
        $("#watch7-sidebar-contents").before($("#watch-discussion"));
        $("#watch-discussion").after($("#watch7-sidebar-contents"));
        $("#watch7-sidebar-contents").after($("#watch-discussion"));
      // CSS modifications
        $("#watch-discussion").css({"height":"auto", 
                                       "max-height":"550px", 
                                       "overflow":"auto", 
                                       "overflow-x":"hidden"});
        $("#action-panel-details").css({"height":"auto", 
                                           "max-height":"550px", 
                                           "overflow":"auto"});
        $("#watch7-sidebar-contents").css({"height":"auto", 
                                              "min-height":"153px", 
                                              "max-height":"153px", 
                                              "overflow":"auto"});
    }
}

main();
$(document).on("spfdone", main);