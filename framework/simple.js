// Generated by LiveScript 1.2.0
angular.module('simple', ['ui.bootstrap.datetimepicker', 'main']);
ctrl.simpletab = function($scope){
  $scope.tab = 2;
  return $scope.active = function(a, b){
    if (a === b) {
      return 'active';
    } else {
      return "";
    }
  };
};
ctrl.simplebase = function($scope, $location, DataService){
  var k, v, s;
  angular.element('body').scope().tab = 2;
  angular.element('#current-proposal').scope().cur = ((function(){
    var ref$, results$ = [];
    for (k in ref$ = DataService.proposal.ref) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }())[0] || [])[1] || {};
  $scope.proposal = {
    ref: DataService.proposal.ref,
    s: function(){
      return angular.element('#current-proposal').scope();
    }
  };
  $scope.color = d3.scale.category20();
  $scope.updatePropCur = function(p){
    var x$, s, y$;
    x$ = s = $scope.proposal.s();
    x$.propCur = p;
    x$.cs = s.choiceState(s.propCur);
    y$ = $scope;
    y$.propCur = p;
    y$.id = p.id;
    y$.tab = 3;
    return $location.search({
      proposal: p.id
    });
  };
  s = $scope.proposal.s();
  return $scope.$watch('proposal.ref', function(){
    var that, x$, s;
    $scope.proposal.ref = DataService.proposal.ref;
    if (that = $scope.proposal.ref[$location.search()['proposal']]) {
      $scope.updatePropCur(that);
    }
    x$ = s = $scope.proposal.s();
    if (s.propCur) {
      x$.propCur = $scope.proposal.ref[s.propCur.id];
    }
    x$.cs = s.choiceState(s.propCur);
    return x$;
  }, true);
};