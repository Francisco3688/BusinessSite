$(document).ready(function(){
 
	$("#popUpBox").hide();
	$("#pop").click(function(){
		$("#popUpBox").fadeIn(1000);
		$("#overlay").css("opacity", .05);
	});

	$(".button").click(function(){
		$("#popUpBox").fadeOut(1000);
		$("#overlay").css("opacity", 1);
	});

	$("#nav").hide();
	$("#menuB").click(function(){
		$("#nav").fadeIn(200);
		$("#menuB").click(function(){
			$("#nav").fadeOut(200);
		});
	});

	$("#popUpBox2").hide();
	$("#pop2").click(function(){
		$("#popUpBox2").fadeIn(1000);
		$("#overlay").css("opacity", .05);
	});

	$(".button").click(function(){
		$("#popUpBox2").fadeOut(1000);
		$("#overlay").css("opacity", 1);
	});

	$("#popUpBox3").hide();
	$("#pop3").click(function(){
		$("#popUpBox3").fadeIn(1000);
		$("#overlay").css("opacity", .05);
	});

	$(".button").click(function(){
		$("#popUpBox3").fadeOut(1000);
		$("#overlay").css("opacity", 1);
	});

	$("#popUpBox4").hide();
	$("#pop4").click(function(){
		$("#popUpBox4").fadeIn(1000);
		$("#overlay").css("opacity", .05);
	});

	$(".button").click(function(){
		$("#popUpBox4").fadeOut(1000);
		$("#overlay").css("opacity", 1);
	});

	$("#popUpBox5").hide();
	$("#pop5").click(function(){
		$("#popUpBox4").fadeIn(1000);
		$("#overlay").css("opacity", .05);
	});

	$(".button").click(function(){
		$("#popUpBox5").fadeOut(1000);
		$("#overlay").css("opacity", 1);
	});

	$("#popUpBox6").hide();
	$("#pop6").click(function(){
		$("#popUpBox6").fadeIn(1000);
		$("#overlay").css("opacity", .05);
	});

	$(".button").click(function(){
		$("#popUpBox6").fadeOut(1000);
		$("#overlay").css("opacity", 1);
	});

	$("#popUpBox7").hide();
	$("#pop7").click(function(){
		$("#popUpBox7").fadeIn(1000);
		$("#overlay").css("opacity", .05);
	});

	$(".button").click(function(){
		$("#popUpBox7").fadeOut(1000);
		$("#overlay").css("opacity", 1);
	});

	$("#popUpBox8").hide();
	$("#pop8").click(function(){
		$("#popUpBox8").fadeIn(1000);
		$("#overlay").css("opacity", .05);
	});

	$(".button").click(function(){
		$("#popUpBox8").fadeOut(1000);
		$("#overlay").css("opacity", 1);
	});

});