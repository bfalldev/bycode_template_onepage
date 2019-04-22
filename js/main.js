$(document).ready(function(){


	var p1 = $('.page1').offset().top;
	var p2 = $('.page2').offset().top;
	var p3 = $('.page3').offset().top;
	var p4 = $('.page4').offset().top;
	var up = $('#haut').offset().top;

	$("#item1").click(function(){
		$("html,body").animate({scrollTop:p1},1000);
		return false;
	});

	$("#item2").click(function(){
		$("html,body").animate({scrollTop:p2},1000);
		return false;
	});

	$("#item3").click(function(){
		$("html,body").animate({scrollTop:p3},1000);
		return false;
	});

	$("#item4").click(function(){
		$("html,body").animate({scrollTop:p4},1000);
		return false;
	});

	$("#cRetour").click(function(){
		$("html,body").animate({scrollTop:up},1000);
		return false;
	});




});