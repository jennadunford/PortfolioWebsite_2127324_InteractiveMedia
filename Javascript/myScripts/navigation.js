console.log(window.location.pathname);

$(window).on("click", "#home", function () {
  window.location.assign("/../../index.html");
});

$(window).on("click", "#about", function () {
  window.location.pathname = "../../1_About/about.html";
});

$(window).on("click", "#art", function () {
  window.location.pathname = "../../2_Art/art.html";
});

$(window).on("click", "#blogs", function () {
  window.location.pathname = "../../3_Blogs/blogHome.html";
});

$(window).on("click", "#design", function () {
  window.location.pathname = "../../4_Design/designHome.html";
});

$(window).on("click", "#contact", function () {
  window.location.pathname = "../../5_Contact/contact.html";
});

$(window).on("click", "#wireframes", function () {
  window.location.pathname = "../../4_Design/wireframes.html";
});

$(window).on("click", "#decisions", function () {
  window.location.pathname = "../../4_Design/designDecisions.html";
});

$(window).on("click", "#inspirations", function () {
  window.location.pathname = "../../4_Design/inspirations.html";
});

$(window).on("click", "#reflections", function () {
  window.location.pathname = "../../4_Design/reflections.html";
});

$(window).on("click", "#uxui", function () {
  window.location.pathname = "../../4_Design/uxAndui.html";
});

$(window).on("click", "#blog1", function () {
  window.location.pathname = "../../3_Blogs/blog1.html";
});

$(window).on("click", "#blog2", function () {
  window.location.pathname = "../../3_Blogs/blog2.html";
});

$(window).on("click", "#blog3", function () {
  window.location.pathname = "../../3_Blogs/blog3.html";
});

$(window).on("click", "#blog4", function () {
  window.location.pathname = "../../3_Blogs/blog4.html";
});

$(window).on("click", "#blog5", function () {
  window.location.pathname = "../../3_Blogs/blog5.html";
});

$(window).on("click", "#blog6", function () {
  window.location.pathname = "../../3_Blogs/blog6.html";
});

$(window).on("click", "#reflectionBlog", function () {
  window.location.pathname = "../../3_Blogs/blogReflect.html";
});
