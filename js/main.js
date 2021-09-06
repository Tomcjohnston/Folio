//    $( ".open-close-btn" ).on('click touchstart', function(e) {
//		// prevent default anchor click 
//		e.preventDefault();
//		$(".overlay").toggleClass("overlay-open");
//	});
//
//
//
////  ------------- SECTION & LOGO FADE -------------
//
//$(window).scroll(function(){
//    $(".fadeaway").css("opacity", 1 - $(window).scrollTop() / 145);
//  });
//
////  ------------- SECTION & LOGO FADE -------------
//
//


$('button').click(function(e){
    $('#myDiv').toggleClass('fullscreen'); 
});


$('button').click(function(e){
    $('body').toggleClass('stop'); 
});

$('button').click(function(e){
    $('#contact').toggleClass('see'); 
});


$('button').click(function(e){
    $('#pink').toggleClass('tester'); 
});

$('button').click(function(e){
    $('#information').toggleClass('exit'); 
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}