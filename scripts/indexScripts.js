
$(document).ready(function(){
  $(".fadeInNOut").click(function(){
    $("#indexTop").fadeToggle();
    $("#particles-js").fadeToggle();
    $(".bulk").fadeToggle();

    $("footer").toggle(function(){
      $("footer").addClass("footerShow");


    }, function(){
      $("footer").removeClass("footerShow");

    });

  });

});




var text = "Deanna Tran";
var i = 0;
window.onload = function typing(){
  setTimeout(typing, 400);
  var doc = document.getElementById("header_typing");

  if (i < text.length){
    document.getElementById("header_typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 300);
  }



};

// function myscroll(){
//   console.log("should work!");
//   document.querySelector(".secondaryHeader").scrollIntoView({behavior: "smooth"});
// }
