$(document).ready(function(){
	for(i = 0; i < 5000; i++) {
		$("body").append($('<div></div>').addClass("sketch"));
	}
	$(".sketch").mouseover(function(){
		$(this).css("background-color", "#FF0000");
	});
});
