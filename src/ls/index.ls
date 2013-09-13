set-menu = (v,u) ->
  $ "\#navbar li:nth-child(#{v})" .addClass \active
  $ "\#menu > li:nth-child(#{u})" .addClass \active
