(function() {
  $(function() {
    "use strict";
    return $(document).ready(function() {
      $(window).on("scroll", function() {
        var top;
        top = $(window).scrollTop();
        if (top < 0 || top > 1500) {
          return;
        }
        return $(".teaserimage-image").css("transform", "translate3d(0px, " + top / 3 + "px, 0px)").css("opacity", 1 - Math.max(top / 700, 0));
      });
      return $(window).trigger("scroll");
    });
  });

}).call(this);
