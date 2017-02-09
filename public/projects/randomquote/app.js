document.addEventListener('DOMContentLoaded', getQuote, false);

var bgColors = ["SkyBlue", "PowderBlue", "Pink", "PaleGreen", "PaleTurquoise", "LightPink", "LightCyan", "LightBlue", "Cyan", "Aquamarine", "Aqua"];

$('.get-quote').click(getQuote);

$('.tweet').click(function() {
  var twtText = $('.quote').text() + " " + $('.quote-author').text();
  var twtLink = 'http://twitter.com/home?status=' + twtText;
  
 window.open(twtLink,'_blank');
});

function getQuote() {
  $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
    .done(update)
    .fail(handleErr);  
}

function update(response) {
  $('.quote').html("");
  $('.quote').html(response.quoteText);
  $('.quote-author').html("~ " + response.quoteAuthor);
  changeBGColor();
}

function handleErr(jqxhr, textStatus, err) {
  console.log("Request Failed: " + textStatus + ", " + err);
}

function changeBGColor() {
  var color = bgColors[Math.floor(Math.random() * bgColors.length)];
  $('body').css('background-color', color);
}

