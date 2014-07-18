###
	global define, Modernizr, $
### 
define [
  "jquery"
  "app"
  "ui"
  "jqueryConfig"
], ($, app, ui, jc) ->
  "use strict"
  app.init()
  jc.init()
  ui.init()
  return
