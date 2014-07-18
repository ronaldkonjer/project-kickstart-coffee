###
  global define, 'Modernizr', '$', '_', 'Fastclick', 'Foundation', 
  'imagesLoaded', 'Enquire', 'Skrollr', 'REMfill'
###
###
  jshint indent:4 
###

###
This demo was prepared for you by Petr Tichy - Ihatetomatoes.net
Want to see more similar demos and tutorials?
Help by spreading the word about Ihatetomatoes blog.
Article URL: http://ihatetomatoes.net/how-to-make-parallax-website-responsive/
###
define [
  "jquery"
  "modernizr"
  "underscore"
  "fastclick"
  "foundation"
  "imagesloaded"
  "enquire"
  "skrollr"
  "remfill"
], ($, Modernizr, Foundation, imagesLoaded, Enquire, Skrollr, REMfill) ->
  
  # Setup variables
  console.log Foundation
  console.log Modernizr
  console.log $
  console.log imagesLoaded
  console.log Enquire
  console.log Skrollr
  console.log REMfill
  #$('#myModal').foundation('reveal', 'open');
  
  #var self = {};
  init = ->
    #console.log Enquire;
    if $slide.length > 0
      #FadeIn all sections
      $body.imagesLoaded ->
        setTimeout (->
          
          # Resize sections
          adjustWindow()
          
          # Fade in sections
          $body.removeClass("loading").addClass "loaded"
          return
        ), 800
        return

      enquire.register "screen and (min-width : 43em;)", initAdjustWindow(), false
    return
  adjustWindow = ->
    
    # Get window size
    winH = $window.height()
    winW = $window.width()
    
    # Keep minimum height 550
    winH = 550  if winH <= 550
    
    # Init Skrollr for 768 and up
    if winW >= 768
      
      # Init Skrollr
      s = skrollr.init(forceHeight: false)
      
      # Resize our slides
      $slide.height winH
      s.refresh $(".homeSlide")
    else
      
      # Init Skrollr
      s = skrollr.init()
      s.destroy()
    
    # Check for touch
    if Modernizr.touch
      
      # Init Skrollr
      s = skrollr.init()
      s.destroy()
    return
  initAdjustWindow = ->
    match: ->
      adjustWindow()
      return

    unmatch: ->
      adjustWindow()
      return
  "use strict"
  $window = $(window)
  $slide = $(".homeSlide")
  $body = $("body")
  $(document).foundation {}
  init: init
