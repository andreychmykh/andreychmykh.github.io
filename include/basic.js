$(function() {
    $('.box').matchHeight(false);
    $('.spotlight').matchHeight(false);
});


$(window).resize(function () {
	$('#top').css({'height': window.innerHeight});
	$('.form-control').css({'min-width' : ((window.innerWidth)/2.2)});
});