$(document).ready(function(){

  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');

  var topButton = $("#backToTop");
  topButton.on("click", function(){
    $("html, body").animate({ scrollTop: 0 }, "slow");




  });


});




var $animation_elements = $('.animation-elements');
var $window = $(window);

function check_if_in_view() {
  console.log("should work!");
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_top_position <= window_bottom_position) && (element_bottom_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }




  });
}
