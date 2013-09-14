var mockup;
mockup = function($scope){
  $scope.tglNodes = {};
  $scope.tgl = function(g, n){
    var ref$;
    if ((ref$ = $scope.tglNodes[g]) != null) {
      ref$.hide();
    }
    $scope.tglNodes[g] = $("#" + g + "-" + n);
    return (ref$ = $scope.tglNodes[g]) != null ? ref$.show() : void 8;
  };
  $scope.isOptionOpen = false;
  $scope.toggleOption = function(){
    $scope.isOptionOpen = !$scope.isOptionOpen;
    if ($scope.isOptionOpen) {
      return $('#qa-option').show();
    } else {
      return $('#qa-option').hide();
    }
  };
  $scope.motionList = [
    {
      name: "苗栗大埔土地徵收",
      count: 451
    }, {
      name: "美麗灣飯店開發",
      count: 390
    }, {
      name: "兩岸服務貿易協議",
      count: 2900
    }
  ];
  $scope.proposeList = [
    {
      name: "集會遊行法修法",
      count: 37
    }, {
      name: "土地徵收條例修法",
      count: 60
    }, {
      name: "電力民營化",
      count: "22"
    }
  ];
  $scope.projectList = [
    {
      name: "公民1985行動串連",
      count: 12
    }, {
      name: "憲法113行動串連",
      count: 8
    }, {
      name: "服貿協議行動串連",
      count: 144
    }
  ];
  $scope.tagList = [
    {
      name: "醫療",
      count: 1000
    }, {
      name: "經濟",
      count: 19000
    }, {
      name: "開放政府資料",
      count: 98
    }, {
      name: "民主制度",
      count: 44
    }, {
      name: "房市泡沫",
      count: 188
    }
  ];
  return $scope.citizenList = [
    {
      name: "李茂生",
      count: 0
    }, {
      name: "黃國昌",
      count: 0
    }, {
      name: "酥餅",
      count: 0
    }, {
      name: "郝明義",
      count: 0
    }, {
      name: "clkao",
      count: 0
    }
  ];
};