// ==UserScript==
// @name         YTSidechat
// @namespace    AT
// @version      0.0.4
// @description  Reorder content panels and resize panels into a scrollable panel
// @author       Andy T.
// @include      *://www.youtube.com/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// @downloadURL  https://github.com/AndyLTang/Youtube-Sidechat/raw/master/YTSidechat.user.js
// @noframes
// ==/UserScript==

function main(){
    
	// Check if current page is a video page
    if($("#page").hasClass("watch")){
        var $upnext = $("#watch7-sidebar-contents");
        var $comments = $("#watch-discussion");
        var $description = $("#action-panel-details");
        
		// Reorder content panels
        $upnext.before($comments);
        $comments.after($upnext);
        $upnext.after($comments);
        
		// CSS modifications (could be put in CSS using Stylish instead)
        $upnext.css({"height":"auto", 
                     "min-height":"153px", 
                     "max-height":"153px", 
                     "overflow":"auto"});
        $comments.css({"height":"auto", 
                       "max-height":"550px", 
                       "overflow":"auto", 
                       "overflow-x":"hidden"});
        $description.css({"height":"auto", 
                          "max-height":"550px", 
                          "overflow":"auto"});
		
        // Prevent page scroll when textbox scrolls to bottom
        $upnext.bind( 'mousewheel DOMMouseScroll', function ( e ) {
            var e0 = e.originalEvent,
                delta = e0.wheelDelta || -e0.detail;

            this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
            e.preventDefault();
        });
        $comments.bind( 'mousewheel DOMMouseScroll', function ( e ) {
            var e0 = e.originalEvent,
                delta = e0.wheelDelta || -e0.detail;

            this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
            e.preventDefault();
        });

	}

}
//main
main();
$(document).on("spfdone", main);

