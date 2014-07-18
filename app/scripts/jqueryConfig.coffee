###
  global define, $, owlCarousel
###
define [
  "jquery"
  "owlCarousel"
], ($, owlCarousel) ->
  "use strict"
  init = ->
    $(document).ready ->
      $("#owl-example").owlCarousel
        navigation: true
        slideSpeed: 300
        paginationSpeed: 400
        singleItem: true
        lazyLoad: true
      return
    return
  init: init
