angular.module \simple, <[ui.bootstrap.datetimepicker main]>

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
  $scope.update-prop-cur = (p) ->
    s = $scope.proposal.s!
      ..prop-cur = p
      ..cs = s.choice-state s.prop-cur
    $scope
      ..prop-cur = p
      ..id = p.id
      ..tab = 3
  $scope.$watch 'proposal.ref', ->
    console.log \ok
    s = $scope.proposal.s!
      ..cs = s.choice-state s.prop-cur
  , true
