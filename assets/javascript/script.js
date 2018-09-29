var divs = $('div[id^="content-"]').hide(),
  i = 0;

(function cycle() {
  divs
    .eq(i)
    .fadeIn(400)
    .delay(3000)
    .fadeOut(400, cycle);

  i = ++i % divs.length;
})();
