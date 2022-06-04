$(window).ready(function () {
  $("#portfolio").turn({
    display: "double",
    acceleration: true,
    gradients: true,
  });
});

$(window).bind("keydown", function (e) {
  if (e.keyCode == 37) $("#portfolio").turn("previous");
  else if (e.keyCode == 39) $("#portfolio").turn("next");
});

$(window).on("click", "#content1", function () {
  $("#portfolio").turn("page", 2);
  console.log("clicked first button");
});

$(window).on("click", "#content2", function () {
  $("#portfolio").turn("page", 4);
});

$(window).on("click", "#content3", function () {
  $("#portfolio").turn("page", 10);
});

$(window).on("click", "#content4", function () {
  $("#portfolio").turn("page", 22);
});

$(window).on("click", "#content5", function () {
  $("#portfolio").turn("page", 27);
});

$(window).on("click", "#content6", function () {
  $("#portfolio").turn("page", 34);
});

$(window).on("click", "#content7", function () {
  $("#portfolio").turn("page", 40);
});

$(window).on("click", "#start", function () {
  $("#portfolio").turn("page", 1);
  console.log("clicked first button");
});

$(window).on("click", "#prev", function () {
  $("#portfolio").turn("previous");
});

$(window).on("click", "#next", function () {
  $("#portfolio").turn("next");
});
