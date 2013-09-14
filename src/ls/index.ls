set-menu = (v,u) ->
  $ "\#navbar li:nth-child(#{v})" .addClass \active
  $ "\#menu > li:nth-child(#{u})" .addClass \active

qa-func-resize = ->
  $(\#qa-func-panel)height -> $(this)prev!height!

window.onresize = ->
  qa-func-resize!

<- $ document .ready 
qa-func-resize!
