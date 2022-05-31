$(window).ready(function () {
  $("#portfolio").turn({
    display: "double",
    acceleration: true,
    gradients: false,
  });
});

$(window).bind("keydown", function (e) {
  if (e.keyCode == 37) $("#portfolio").turn("previous");
  else if (e.keyCode == 39) $("#portfolio").turn("next");
});

//$(window).bind("start", function (event, pageObject, corner) {
//if (corner == "tl" || corner == "tr" || corner == "bl" || corner == "br") {
//event.preventDefault();
//}
//});
