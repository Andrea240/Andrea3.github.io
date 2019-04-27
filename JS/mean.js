$(".scroll").click(function() { 
$("html, body").animate({ 
scrollTop: $($(this).attr("href")).offset().top - 0 + "px" 
}, { 
duration: 1000 
}); 
return false; 
});


$(document).ready(function (){
	$('.romb__text').spincrement({
		duration: 4000
	});
});