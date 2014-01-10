angular.module \simple, <[ui.bootstrap.datetimepicker main]>

ctrl.simpletab = ($scope) ->
  $scope.tab = 2
  $scope.active = (a,b) -> if a==b => \active else ""

ctrl.simplebase = ($scope, $location, $interval, DataService) ->
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
    $location.search proposal: p.id
  s = $scope.proposal.s!
  $scope.$watch 'proposal.ref', ->
    $scope.proposal.ref = DataService.proposal.ref
    if $scope.proposal.ref[$location.search![\proposal]] => $scope.update-prop-cur that
    s = $scope.proposal.s!
      ..prop-cur = $scope.proposal.ref[s.prop-cur.id] if s.prop-cur
      ..cs = s.choice-state s.prop-cur
  , true
  update-progress = -> if $scope.prop-cur =>
    $scope.prop-cur.progress = $scope.proposal.s!get-progress $scope.prop-cur
    remains = parseInt(($scope.prop-cur.end - new Date!getTime!)/1000)
    $scope.prop-cur.remains =
      (if remains>86400 => "#{parseInt(remains/86400)} 天 " else "") +
      (if remains>3600 => "#{parseInt((remains % 86400)/3600)} 時 " else "") +
      (if remains>60 => "#{parseInt((remains % 3600)/60)} 分 " else "") +
      "#{parseInt(remains % 60)} 秒"
  $scope.$watch 'propCur', update-progress
  $interval update-progress, 1000
