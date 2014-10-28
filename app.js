
var main = function  () {
	"use strict";

	$(".comment-input button").on("click", function (event){
		//console.log("Hello world!");
		$(".comments").append("<p>This is a new comment</p>");
	});
};

$(document).ready(main);