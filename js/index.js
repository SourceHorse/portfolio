function dropMenu() {
  $('#navbar').toggleClass('drop-menu');
}

$('a').click(function() {
  if ($('#navbar').hasClass('drop-menu')) {
    $('#navbar').removeClass('drop-menu');
  }
});

function scrollTo(tgt) {
  $('html,body').animate({
    scrollTop: $(tgt).offset().top
  }, 1000);
};

$(window).scroll(function() {
	if (($(window).scrollTop() < $('#portfolio').position().top) || ($(window).scrollTop() >= $('#contact').position().top)) {
    $('#navbar').children().css('color', 'white');
  } else {
    $('#navbar').children().css('color', 'black');
  };
});