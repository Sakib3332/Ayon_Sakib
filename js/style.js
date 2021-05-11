// heder scroll animation javascript hre ==========>
$(window).scroll(function(){
  if($(this).scrollTop() > 50){
    $("header").addClass("header-shrink");
  }else{
    $("header").removeClass("header-shrink");
  }
});

// AOS initialize javascript here =========>
AOS.init({
});

// counter UP javascript here ==========>
$('.count').counterUp({
  delay: 10,
  time: 1000,
});
// magnificPopup js here ==========>

$(document).ready(function() {
	$('.video-btn, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
});

// preloader js 
var preloader = document.getElementById("preloader");


function myFunction(){
	preloader.style.display = 'none';
}

