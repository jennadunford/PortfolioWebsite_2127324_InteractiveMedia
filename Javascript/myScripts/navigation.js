$(window).ready(function () {
  $(window).on("click", "#home", function () {
    $.ajax({
      type: "HEAD",
      url: "PortfolioWebsite_2127324_InteractiveMedia/index.html",
      success: function () {
        window.location.pathname =
          "PortfolioWebsite_2127324_InteractiveMedia/index.html";
        console.log("The home page existed on github");
      },
      error: function () {
        window.location.pathname = "../../index.html";
        console.log("home page not existing on github, assume on live server");
      },
    });
    window.location.pathname =
      "PortfolioWebsite_2127324_InteractiveMedia/index.html";
  });

  $(window).on("click", "#about", function () {
    $.ajax({
      type: "HEAD",
      url: "PortfolioWebsite_2127324_InteractiveMedia/1_About/about.html",
      success: function () {
        window.location.pathname =
          "PortfolioWebsite_2127324_InteractiveMedia/1_About/about.html";
      },
      error: function () {
        window.location.pathname = "../../1_About/about.html";
      },
    });

    window.location.pathname =
      "PortfolioWebsite_2127324_InteractiveMedia/1_About/about.html";
  });

  $(window).on("click", "#art", function () {
    $.ajax({
      type: "HEAD",
      url: "PortfolioWebsite_2127324_InteractiveMedia/2_Art/art.html",
      success: function () {
        window.location.pathname =
          "PortfolioWebsite_2127324_InteractiveMedia/2_Art/art.html";
      },
      error: function () {
        window.location.pathname = "../../2_Art/art.html";
      },
    });

    window.location.pathname =
      "PortfolioWebsite_2127324_InteractiveMedia/2_Art/art.html";
  });

  $(window).on("click", "#blogs", function () {
    $.ajax({
      type: "HEAD",
      url: "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blogHome.html",
      success: function () {
        window.location.pathname =
          "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blogHome.html";
      },
      error: function () {
        window.location.pathname = "../../3_Blogs/blogHome.html";
      },
    });

    window.location.pathname =
      "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blogHome.html";
  });

  $(window).on("click", "#design", function () {
    $.ajax({
      type: "HEAD",
      url: "PortfolioWebsite_2127324_InteractiveMedia/4_Design/designHome.html",
      success: function () {
        window.location.pathname =
          "PortfolioWebsite_2127324_InteractiveMedia/4_Design/designHome.html";
      },
      error: function () {
        window.location.pathname = "../../4_Design/designHome.html";
      },
    });

    window.location.pathname =
      "PortfolioWebsite_2127324_InteractiveMedia/4_Design/designHome.html";
  });

  $(window).on("click", "#contact", function () {
    $.ajax({
      type: "HEAD",
      url: "PortfolioWebsite_2127324_InteractiveMedia/5_Contact/contact.html",
      success: function () {
        window.location.pathname =
          "PortfolioWebsite_2127324_InteractiveMedia/5_Contact/contact.html";
      },
      error: function () {
        window.location.pathname = "../../5_Contact/contact.html";
      },
    });

    window.location.pathname =
      "PortfolioWebsite_2127324_InteractiveMedia/5_Contact/contact.html";
  });

  $(window).on("click", "#wireframes", function () {
    $.ajax({
      type: "HEAD",
      url: "PortfolioWebsite_2127324_InteractiveMedia/4_Design/wireframes.html",
      success: function () {
        window.location.pathname =
          "PortfolioWebsite_2127324_InteractiveMedia/4_Design/wireframes.html";
      },
      error: function () {
        window.location.pathname = "../../4_Design/wireframes.html";
      },
    });

    window.location.pathname =
      "PortfolioWebsite_2127324_InteractiveMedia/4_Design/wireframes.html";
  });

  $(window).on("click", "#decisions", function () {
    $.ajax({
      type: "HEAD",
      url: "PortfolioWebsite_2127324_InteractiveMedia/4_Design/designDecisions.html",
      success: function () {
        window.location.pathname =
          "PortfolioWebsite_2127324_InteractiveMedia/4_Design/designDecisions.html";
      },
      error: function () {
        window.location.pathname = "../../4_Design/designDecisions.html";
      },
    });

    window.location.pathname =
      "PortfolioWebsite_2127324_InteractiveMedia/4_Design/designDecisions.html";
  });

  $(window).on("click", "#inspirations", function () {
    $.ajax({
      type: "HEAD",
      url: "PortfolioWebsite_2127324_InteractiveMedia/4_Design/inspirations.html",
      success: function () {
        window.location.pathname =
          "PortfolioWebsite_2127324_InteractiveMedia/4_Design/inspirations.html";
      },
      error: function () {
        window.location.pathname = "../../4_Design/inspirations.html";
      },
    });

    window.location.pathname =
      "PortfolioWebsite_2127324_InteractiveMedia/4_Design/inspirations.html";
  });

  $(window).on("click", "#reflections", function () {
    $.ajax({
      type: "HEAD",
      url: "PortfolioWebsite_2127324_InteractiveMedia/4_Design/reflections.html",
      success: function () {
        window.location.pathname =
          "PortfolioWebsite_2127324_InteractiveMedia/4_Design/reflections.html";
      },
      error: function () {
        window.location.pathname = "../../4_Design/reflections.html";
      },
    });

    window.location.pathname =
      "PortfolioWebsite_2127324_InteractiveMedia/4_Design/reflections.html";
  });

  $(window).on("click", "#uxui", function () {
    $.ajax({
      type: "HEAD",
      url: "PortfolioWebsite_2127324_InteractiveMedia/4_Design/uxAndui.html",
      success: function () {
        window.location.pathname =
          "PortfolioWebsite_2127324_InteractiveMedia/4_Design/uxAndui.html";
      },
      error: function () {
        window.location.pathname = "../../4_Design/uxAndui.html";
      },
    });

    window.location.pathname =
      "PortfolioWebsite_2127324_InteractiveMedia/4_Design/uxAndui.html";
  });

  $(window).on("click", "#blog1", function () {
    $.ajax({
      type: "HEAD",
      url: "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog1.html",
      success: function () {
        window.location.pathname =
          "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog1.html";
      },
      error: function () {
        window.location.pathname = "../../3_Blogs/blog1.html";
      },
    });

    window.location.pathname =
      "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog1.html";
  });

  $(window).on("click", "#blog2", function () {
    $.ajax({
      type: "HEAD",
      url: "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog2.html",
      success: function () {
        window.location.pathname =
          "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog2.html";
      },
      error: function () {
        window.location.pathname = "../../3_Blogs/blog2.html";
      },
    });

    window.location.pathname =
      "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog2.html";
  });

  $(window).on("click", "#blog3", function () {
    $.ajax({
      type: "HEAD",
      url: "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog3.html",
      success: function () {
        window.location.pathname =
          "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog3.html";
      },
      error: function () {
        window.location.pathname = "../../3_Blogs/blog3.html";
      },
    });

    window.location.pathname =
      "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog3.html";
  });

  $(window).on("click", "#blog4", function () {
    $.ajax({
      type: "HEAD",
      url: "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog4.html",
      success: function () {
        window.location.pathname =
          "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog4.html";
      },
      error: function () {
        window.location.pathname = "../../3_Blogs/blog4.html";
      },
    });

    window.location.pathname =
      "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog4.html";
  });

  $(window).on("click", "#blog5", function () {
    $.ajax({
      type: "HEAD",
      url: "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog5.html",
      success: function () {
        window.location.pathname =
          "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog5.html";
      },
      error: function () {
        window.location.pathname = "../../3_Blogs/blog5.html";
      },
    });

    window.location.pathname =
      "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog5.html";
  });

  $(window).on("click", "#blog6", function () {
    $.ajax({
      type: "HEAD",
      url: "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog6.html",
      success: function () {
        window.location.pathname =
          "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog6.html";
      },
      error: function () {
        window.location.pathname = "../../3_Blogs/blog6.html";
      },
    });
    window.location.pathname =
      "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog6.html";
  });

  $(window).on("click", "#reflectionBlog", function () {
    $.ajax({
      type: "HEAD",
      url: "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blogReflect.html",
      success: function () {
        window.location.pathname =
          "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blogReflect.html";
      },
      error: function () {
        window.location.pathname = "../../3_Blogs/blogReflect.html";
      },
    });

    window.location.pathname =
      "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blogReflect.html";
  });
});

// $(window).on("click", "#home", function () {
//   $.ajax({
//     type: "HEAD",
//     url: "PortfolioWebsite_2127324_InteractiveMedia/index.html",
//     success: function () {
//       window.location.pathname =
//         "PortfolioWebsite_2127324_InteractiveMedia/index.html";
//       console.log("The home page existed on github");
//     },
//     error: function () {
//       window.location.pathname = "../../index.html";
//       console.log("home page not existing on github, assume on live server");
//     },
//   });
//   window.location.pathname =
//     "PortfolioWebsite_2127324_InteractiveMedia/index.html";
// });

// $(window).on("click", "#about", function () {
//   $.ajax({
//     type: "HEAD",
//     url: "PortfolioWebsite_2127324_InteractiveMedia/1_About/about.html",
//     success: function () {
//       window.location.pathname =
//         "PortfolioWebsite_2127324_InteractiveMedia/1_About/about.html";
//     },
//     error: function () {
//       window.location.pathname = "../../1_About/about.html";
//     },
//   });

//   window.location.pathname =
//     "PortfolioWebsite_2127324_InteractiveMedia/1_About/about.html";
// });

// $(window).on("click", "#art", function () {
//   $.ajax({
//     type: "HEAD",
//     url: "PortfolioWebsite_2127324_InteractiveMedia/2_Art/art.html",
//     success: function () {
//       window.location.pathname =
//         "PortfolioWebsite_2127324_InteractiveMedia/2_Art/art.html";
//     },
//     error: function () {
//       window.location.pathname = "../../2_Art/art.html";
//     },
//   });

//   window.location.pathname =
//     "PortfolioWebsite_2127324_InteractiveMedia/2_Art/art.html";
// });

// $(window).on("click", "#blogs", function () {
//   $.ajax({
//     type: "HEAD",
//     url: "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blogHome.html",
//     success: function () {
//       window.location.pathname =
//         "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blogHome.html";
//     },
//     error: function () {
//       window.location.pathname = "../../3_Blogs/blogHome.html";
//     },
//   });

//   window.location.pathname =
//     "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blogHome.html";
// });

// $(window).on("click", "#design", function () {
//   $.ajax({
//     type: "HEAD",
//     url: "PortfolioWebsite_2127324_InteractiveMedia/4_Design/designHome.html",
//     success: function () {
//       window.location.pathname =
//         "PortfolioWebsite_2127324_InteractiveMedia/4_Design/designHome.html";
//     },
//     error: function () {
//       window.location.pathname = "../../4_Design/designHome.html";
//     },
//   });

//   window.location.pathname =
//     "PortfolioWebsite_2127324_InteractiveMedia/4_Design/designHome.html";
// });

// $(window).on("click", "#contact", function () {
//   $.ajax({
//     type: "HEAD",
//     url: "PortfolioWebsite_2127324_InteractiveMedia/5_Contact/contact.html",
//     success: function () {
//       window.location.pathname =
//         "PortfolioWebsite_2127324_InteractiveMedia/5_Contact/contact.html";
//     },
//     error: function () {
//       window.location.pathname = "../../5_Contact/contact.html";
//     },
//   });

//   window.location.pathname =
//     "PortfolioWebsite_2127324_InteractiveMedia/5_Contact/contact.html";
// });

// $(window).on("click", "#wireframes", function () {
//   $.ajax({
//     type: "HEAD",
//     url: "PortfolioWebsite_2127324_InteractiveMedia/4_Design/wireframes.html",
//     success: function () {
//       window.location.pathname =
//         "PortfolioWebsite_2127324_InteractiveMedia/4_Design/wireframes.html";
//     },
//     error: function () {
//       window.location.pathname = "../../4_Design/wireframes.html";
//     },
//   });

//   window.location.pathname =
//     "PortfolioWebsite_2127324_InteractiveMedia/4_Design/wireframes.html";
// });

// $(window).on("click", "#decisions", function () {
//   $.ajax({
//     type: "HEAD",
//     url: "PortfolioWebsite_2127324_InteractiveMedia/4_Design/designDecisions.html",
//     success: function () {
//       window.location.pathname =
//         "PortfolioWebsite_2127324_InteractiveMedia/4_Design/designDecisions.html";
//     },
//     error: function () {
//       window.location.pathname = "../../4_Design/designDecisions.html";
//     },
//   });

//   window.location.pathname =
//     "PortfolioWebsite_2127324_InteractiveMedia/4_Design/designDecisions.html";
// });

// $(window).on("click", "#inspirations", function () {
//   $.ajax({
//     type: "HEAD",
//     url: "PortfolioWebsite_2127324_InteractiveMedia/4_Design/inspirations.html",
//     success: function () {
//       window.location.pathname =
//         "PortfolioWebsite_2127324_InteractiveMedia/4_Design/inspirations.html";
//     },
//     error: function () {
//       window.location.pathname = "../../4_Design/inspirations.html";
//     },
//   });

//   window.location.pathname =
//     "PortfolioWebsite_2127324_InteractiveMedia/4_Design/inspirations.html";
// });

// $(window).on("click", "#reflections", function () {
//   $.ajax({
//     type: "HEAD",
//     url: "PortfolioWebsite_2127324_InteractiveMedia/4_Design/reflections.html",
//     success: function () {
//       window.location.pathname =
//         "PortfolioWebsite_2127324_InteractiveMedia/4_Design/reflections.html";
//     },
//     error: function () {
//       window.location.pathname = "../../4_Design/reflections.html";
//     },
//   });

//   window.location.pathname =
//     "PortfolioWebsite_2127324_InteractiveMedia/4_Design/reflections.html";
// });

// $(window).on("click", "#uxui", function () {
//   $.ajax({
//     type: "HEAD",
//     url: "PortfolioWebsite_2127324_InteractiveMedia/4_Design/uxAndui.html",
//     success: function () {
//       window.location.pathname =
//         "PortfolioWebsite_2127324_InteractiveMedia/4_Design/uxAndui.html";
//     },
//     error: function () {
//       window.location.pathname = "../../4_Design/uxAndui.html";
//     },
//   });

//   window.location.pathname =
//     "PortfolioWebsite_2127324_InteractiveMedia/4_Design/uxAndui.html";
// });

// $(window).on("click", "#blog1", function () {
//   $.ajax({
//     type: "HEAD",
//     url: "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog1.html",
//     success: function () {
//       window.location.pathname =
//         "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog1.html";
//     },
//     error: function () {
//       window.location.pathname = "../../3_Blogs/blog1.html";
//     },
//   });

//   window.location.pathname =
//     "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog1.html";
// });

// $(window).on("click", "#blog2", function () {
//   $.ajax({
//     type: "HEAD",
//     url: "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog2.html",
//     success: function () {
//       window.location.pathname =
//         "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog2.html";
//     },
//     error: function () {
//       window.location.pathname = "../../3_Blogs/blog2.html";
//     },
//   });

//   window.location.pathname =
//     "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog2.html";
// });

// $(window).on("click", "#blog3", function () {
//   $.ajax({
//     type: "HEAD",
//     url: "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog3.html",
//     success: function () {
//       window.location.pathname =
//         "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog3.html";
//     },
//     error: function () {
//       window.location.pathname = "../../3_Blogs/blog3.html";
//     },
//   });

//   window.location.pathname =
//     "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog3.html";
// });

// $(window).on("click", "#blog4", function () {
//   $.ajax({
//     type: "HEAD",
//     url: "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog4.html",
//     success: function () {
//       window.location.pathname =
//         "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog4.html";
//     },
//     error: function () {
//       window.location.pathname = "../../3_Blogs/blog4.html";
//     },
//   });

//   window.location.pathname =
//     "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog4.html";
// });

// $(window).on("click", "#blog5", function () {
//   $.ajax({
//     type: "HEAD",
//     url: "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog5.html",
//     success: function () {
//       window.location.pathname =
//         "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog5.html";
//     },
//     error: function () {
//       window.location.pathname = "../../3_Blogs/blog5.html";
//     },
//   });

//   window.location.pathname =
//     "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog5.html";
// });

// $(window).on("click", "#blog6", function () {
//   $.ajax({
//     type: "HEAD",
//     url: "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog6.html",
//     success: function () {
//       window.location.pathname =
//         "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog6.html";
//     },
//     error: function () {
//       window.location.pathname = "../../3_Blogs/blog6.html";
//     },
//   });
//   window.location.pathname =
//     "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blog6.html";
// });

// $(window).on("click", "#reflectionBlog", function () {
//   $.ajax({
//     type: "HEAD",
//     url: "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blogReflect.html",
//     success: function () {
//       window.location.pathname =
//         "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blogReflect.html";
//     },
//     error: function () {
//       window.location.pathname = "../../3_Blogs/blogReflect.html";
//     },
//   });

//   window.location.pathname =
//     "PortfolioWebsite_2127324_InteractiveMedia/3_Blogs/blogReflect.html";
// });
