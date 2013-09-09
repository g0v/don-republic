set-menu = (v,u) ->
  $ "\#menu li:nth-child(#{v})" .addClass \active
  $ "\#submenu li:nth-child(#{u})" .addClass \active
