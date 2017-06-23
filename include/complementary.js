
var lightest ='#ddd';
var light ='#aaa';
var darker ='#555';
var darkest ='#222';



function do_onload() {
	//add the weird background thing here
	$('body').css({'background-color': darker, 'color': lightest});
	
	
	$('#about').css({'background-color': darkest, 'color': lightest});
	$('#education').css({'background-color': light, 'color': darkest});
	$('#experiences').css({'background-color': darkest, 'color': lightest});
	$('#portfolio').css({'background-color': light, 'color': darkest});
	$('#skills').css({'background-color': darkest, 'color': lightest});
	$('#projects').css({'background-color': darkest});
	$('#contact').css({'background-color': light, 'color': darkest});
	$('label').css({'border-color': darkest, 'color': darkest});
	//window resizing
	$('#top').css({'height': window.innerHeight});
	$('.form-control').css({'width' : ((window.innerWidth)/2.2)});
}
