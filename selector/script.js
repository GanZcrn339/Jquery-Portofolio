$(document).ready(function () {
  // selector tag
  $("h1").css("color", "red");
  $("p").css("color", "blue");
  //   selector class
  $(".judul").css("background-color", "red");
  $(".paragraf").css("color", "salmon");
  //   Selector id
  $("#judul").css("border", "2px solid blue");
  $("#paragraf").css("border", "2px solid green");

  //   selector all elemen
  $("*").css("background-color", "skyblue");
});
