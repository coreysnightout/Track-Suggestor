////Front end Logic////
$(function() {
  $("form#survey").submit(function(event){
    event.preventDefault();
    //$(".codeImages").hide();
    var age = parseInt($("input#age").val());
    var creative = $("select#creative").val();
    var php = $("select#php").val();
    var ruby = $("select#ruby").val();
    var backEnd = $('input:radio[name=select]:checked').val();


    if ((age > 50) && (creative === "yes") && (php === "no") && (ruby === "apple") && (backEnd = "no")) {
      $(".css").show();
    } else if ((age < 50) && (creative === "yes") && (php === "yes") && (ruby === "apple") && (backEnd = "yes")) {
      $(".php").show();
    } else if ((age < 50) && (creative === "no") && (php === "no") && (ruby === "android") && (backEnd = "yes")) {
      $(".ruby").show();
    } else if ((age > 50) && (creative === "yes") && (php === "no") && (ruby === "apple") && (backEnd = "yes")) {
      $(".cSharp").show();
    } else if ((age < 50) && (creative === "no") && (php === "yes") && (ruby === "android") && (backEnd = "maybe")) {
      $(".ruby").show();
    } else {
      $(".css").show();
    }
  });
  // $("#reset").click(function(event) {
  //   form.reset();
  // });
});







    // $(".coding").hide();
    // var selector = ($('input[name=select]:checked').val());
    // var age = parseInt($("input#age").val());
