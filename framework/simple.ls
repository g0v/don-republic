ctrl.simpletab = ($scope) ->
  $scope.tab = 1
  $scope.active = (a,b) -> if a==b => \active else ""
