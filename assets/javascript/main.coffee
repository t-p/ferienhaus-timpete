---
---

$ ->
  "use strict"
  $(document).ready ->
    # scroll effect on landing page
    $(window).on "scroll", ->
      top = $(window).scrollTop()
      return if top < 0 or top > 1500
      $(".teaserimage-image")
        .css("transform", "translate3d(0px, "+top/3+"px, 0px)")
        .css("opacity", 1 - Math.max(top / 700, 0))

    $(window).trigger "scroll"
