$(document).ready(function () {
  // event click
  $("#click").click(function () {
    alert("Saya Sedang Membuat Project Jquery");
  });
  // event dblclick
  $("#dblclick").dblclick(function () {
    $(this).css("background-color", "red");
  });
  //   event mouse leave
  $(".mouse").mouseleave(function () {
    $(this).css("background-color", "skyblue");
  });
  //   event mouseenter
  $(".mouse").mouseenter(function () {
    $(this).css("background-color", "lime");
  });
  //   Event Keydown
  $("#keydown").keydown(function () {
    $("#pesan_keydown").text($(this).val());
  });
  //   Event Keyup
  $("#keyup").keyup(function () {
    $("#pesan_keyup").text($(this).val());
  });
});
