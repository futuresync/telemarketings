//scrollto
var scrollTo = function(identifier, speed) {
    $('html, body').animate({
        scrollTop: $(identifier).offset().top
    }, speed || 800);
}
//$(document).scroll(function() {
//    var y = $(this).scrollTop();
//    if (y > 0) {
//        $('.menu').fadeOut(200);
//    } else {
//        $('.menu').fadeIn(200);
//    }
//});

function openMobile(){ $(".mobile").fadeIn(); }
function section1(){ scrollTo("#section1"); $(".mobile").fadeOut(); }
function section2(){ scrollTo("#section2"); $(".mobile").fadeOut(); }
function section3(){ scrollTo("#section3"); $(".mobile").fadeOut(); }
function section4(){ scrollTo("#section4"); $(".mobile").fadeOut(); }