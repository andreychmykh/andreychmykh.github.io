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
			message : $("textarea#message").val() + "\n"
					+ $('input#phone').val()
		},
		dataType : "json",
		error : onError,
		success : onSuccess
	});
}

function onSuccess() {
	$("input#name").val("");
	$("input#email").val("");
	$("input#phone").val("");
	$("textarea#mesage").val("");
	alert("Thank you for the message, I'll get back to you soon!");
}
function onError() {
	alert("Sorry, there was an error and your message failed to send. Feel free to contact me directly!");
}
