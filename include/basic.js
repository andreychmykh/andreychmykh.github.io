$(function() {
	$('.box').matchHeight(false);
	$('.spotlight').matchHeight(false);
});

$(window).resize(function() {
	$('#top').css({
		'height' : window.innerHeight
	});
	$('.form-control').css({
		'min-width' : ((window.innerWidth) / 2.2)
	});
});

function submitForm() {
	$.ajax({
		url : "https://formspree.io/achmykh@andrew.cmu.edu",
		method : "POST",
		data : {
			_subject : "Message from Website: " + $("input#name").val(),
			email : $("input#email").val(),
			message : $("textarea#message").val() + "\n" + $('input#phone').val()
		},
		dataType : "json"
	});
}
