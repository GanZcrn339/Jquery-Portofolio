$(document).ready(function () {
  // efek hide
  $("#hide").click(function () {
    $("#kotak").hide("fast");
  });
  //   efek show
  $("#show").click(function () {
    $("#kotak").show("1000");
  });
  //   efek fadeOut
  $("#fadeout").click(function () {
    $(".box1").fadeOut(1000);
    $(".box2").fadeOut(1000);
    $(".box3").fadeOut(1000);
  });
  //   efek fadeIn
  $("#fadein").click(function () {
    $(".box1").fadeIn(1000);
    $(".box2").fadeIn(1000);
    $(".box3").fadeIn(1000);
  });
  $("#fadetoggle").click(function () {
    $(".box1").fadeToggle(1000);
    $(".box2").fadeToggle(1000);
    $(".box3").fadeToggle(1000);
  });
  $("#fadeto").click(function () {
    $(".box1").fadeTo("slow", 1);
    $(".box2").fadeTo("slow", 0.3);
    $(".box3").fadeTo("slow", 0.4);
  });

  //  Efek SlideUP
  $("#slideup").click(function () {
    $("#slide").slideUp("slow");
  });

  // Efek SlideDown
  $("#slidedown").click(function () {
    $("#slide").slideDown(2000);
  });
  // Efek SlideToggle
  $("#slidetoggle").click(function () {
    $("#slide").slideToggle(2000);
  });

  // efek animate
  $("#kiri").click(function () {
    $("#animate-box").animate({ left: "-=50px" }, "slow");
  });
  $("#kanan").click(function () {
    $("#animate-box").animate({ right: "-=50px" }, "slow");
  });
  // efek clearqueue
  $("#start").click(function () {
    $("#clearQueue-Box").animate({ left: "+=600" }, 5000);
    $("#clearQueue-Box").queue(function () {});
  });
  $("#stop").click(function () {
    $("#clearQueue-Box").clearQueue();
    $("#clearQueue-Box").stop();
  });
  // efek delay
  $("#delay").click(function () {
    $("#kotak-satu").slideUp(4000).delay(6000).fadeIn(4000);
    $("#kotak-dua").slideUp(4000).fadeIn(4000);
  });
});
