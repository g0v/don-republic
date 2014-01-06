ctrl.simpletab = ($scope) ->
  $scope.tab = 2
  $scope.active = (a,b) -> if a==b => \active else ""

ctrl.simplebase = ($scope, DataService) ->
  angular.element \body .scope!tab = 2
  angular.element \#current-proposal .scope!cur = ([[k,v] for k,v of DataService.proposal.ref]0 or [])1 or {}
  $scope.proposal = do
    ref: DataService.proposal.ref
    s: -> angular.element \#current-proposal .scope!
  $scope.color = d3.scale.category20!
  $scope.$watch 'proposal.ref', ->
    $scope.id = $scope.proposal.ref.$getIndex!0 or null
    s = $scope.proposal.s!
    s.prop-cur = if $scope.id => $scope.proposal.ref[$scope.id] else {}
    s.cs = s.choice-state s.prop-cur
    $scope.prop-cur = s.prop-cur
  , true
