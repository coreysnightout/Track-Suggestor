$(function() {
  $("form#survey").submit(function(event){
    $(".coding").hide();
    var age = parseInt($("input#age").val());
    var creative = $("select#creative").val();
    var php = $("select#php").val();
    var ruby = $("select#ruby").val();
    var backEnd = ($('input[name=select]:checked').val());

    if (age > 50 && creative === "yes" && php === "no" && ruby === "apple" && backEnd = "no" ) {
      $(".css").show();
    } else if (age < 50 && creative === "yes" && php === "yes" && ruby === "apple" && backEnd = "yes") {
      $(".php").show();
    } else if (age < 50 && creative === "no" && php === "no" && ruby === "android" && backEnd = "yes") {
      $(".ruby").show();
    } else if (age > 50 && creative === "yes" && php === "no" && ruby === "apple" && backEnd = "yes") {
      $(".cSharp").val();
    }



    event.preventDefault();
  });







    // $(".coding").hide();
    // var selector = ($('input[name=select]:checked').val());
    // var age = parseInt($("input#age").val());
