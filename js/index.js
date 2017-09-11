function dropMenu() {
  $('#navbar').toggleClass('drop-menu');
}
$('a').click(function() {
  if ($('#navbar').hasClass('drop-menu')) {
    $('#navbar').removeClass('drop-menu');
  }
});