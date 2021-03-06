$(window).scroll(function () {
if ($(window).scrollTop() >= 1) {
$('header').css('background', 'rgba(256,256,256, 0.9)');
} else {
$('header').css('background', 'transparent');
$('.nav-toggle').removeClass('open');
$('.menu-left').removeClass('collapse');
}
});

$(function() {
   $(window).unload(function() {
      var scrollPosition = $("section").scrollTop();
      localStorage.setItem("scrollPosition", scrollPosition);
   });
   if(localStorage.scrollPosition) {
      $("section").scrollTop(localStorage.getItem("scrollPosition"));
   }
});




// NAVIGATION LOGO SCROLL TOP
$('.logo').on('click', function(e) {
  e.preventDefault();
  $('.nav-toggle').removeClass('open');
  $('.menu-left').removeClass('collapse');
  $('html, body').animate({
    scrollTop: 0
  }, 750, 'easeInOutQuad')
});
$('.hem').on('click', function(e) {
  e.preventDefault();
  $('.nav-toggle').removeClass('open');
  $('.menu-left').removeClass('collapse');
  $('html, body').animate({
    scrollTop: 0
  }, 750, 'easeInOutQuad')
});
// LINKS TO ANCHORS



$(document).ready(function(){
  $('.click-popup-call-contact').on('click', function(){
    $('.popup-call-contact').toggleClass('popup-call-contact-show');
  });
});

$(document).ready(function(){
  $('.close-contact').on('click', function(){
    $('.popup-call-contact').toggleClass('popup-call-contact-show');
  });
});



$(document).ready(function(){
  $('.meddelande').on('click', function(){
    $('.popup-call-contact').toggleClass('popup-call-contact-show');
  });
});

$(document).ready(function(){
  $('.click-popup-call-read').on('click', function(){
    $('.popup-call-read').toggleClass('popup-call-read-show');
  });
});

$(document).ready(function(){
  $('.close-read').on('click', function(){
    $('.popup-call-read').toggleClass('popup-call-read-show');
  });
});



function watchForHover() {
    var hasHoverClass = false;
    var container = document.body;
    var lastTouchTime = 0;

    function enableHover() {
        // filter emulated events coming from touch events
        if (new Date() - lastTouchTime < 500) return;
        if (hasHoverClass) return;

        container.className += ' hasHover';
        hasHoverClass = true;
    }

    function disableHover() {
        if (!hasHoverClass) return;

        container.className = container.className.replace(' hasHover', '');
        hasHoverClass = false;
    }

    function updateLastTouchTime() {
        lastTouchTime = new Date();
    }

    document.addEventListener('touchstart', updateLastTouchTime, true);
    document.addEventListener('touchstart', disableHover, true);
    document.addEventListener('mousemove', enableHover, true);

    enableHover();
}

watchForHover();