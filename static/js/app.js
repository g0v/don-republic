var mockup;
mockup = function($scope){
  $scope.tglclsNodes = {};
  $scope.tglcls = function(g, p, n){
    var v;
    v = $scope.tglclsNodes[g]
      ? [n, p]
      : [p, n];
    $("." + g + "-" + v[0]).show();
    $("." + g + "-" + v[1]).hide();
    return $scope.tglclsNodes[g] = !$scope.tglclsNodes[g];
  };
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
  $scope.citizenList = [
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
  $scope.synonymList = [
    {
      title: "中國與台灣，出版、印刷、發行與零售產業，目前的交流現況為何？",
      desc: "台灣出版產業鏈目前在中國的發展狀況為何？中國與台灣，出版、印刷、發行與零售產業，目前的交流現況為何？",
      synonym: 6,
      similar: 1
    }, {
      title: "中國與台灣，出版、印刷、發行與零售產業，目前的交流現況為何？",
      desc: "台灣出版產業鏈目前在中國的發展狀況為何？中國與台灣，出版、印刷、發行與零售產業，目前的交流現況為何？",
      synonym: 6,
      similar: 1
    }, {
      title: "中國與台灣，出版、印刷、發行與零售產業，目前的交流現況為何？",
      desc: "台灣出版產業鏈目前在中國的發展狀況為何？中國與台灣，出版、印刷、發行與零售產業，目前的交流現況為何？",
      synonym: 6,
      similar: 1
    }
  ];
  return $scope.tagDetail = [
    {
      name: "領域",
      list: [
        {
          name: "醫療",
          count: 1000
        }, {
          name: "經濟",
          count: 19000
        }
      ]
    }, {
      name: "主題",
      list: [
        {
          name: "開放政府資料",
          count: 98
        }, {
          name: "民主制度",
          count: 44
        }, {
          name: "房市泡沫",
          count: 188
        }
      ]
    }, {
      name: "國家/地區",
      list: []
    }, {
      name: "組織/單位",
      list: [
        {
          name: "醫勞盟",
          count: 77
        }, {
          name: "公督盟",
          count: 140
        }
      ]
    }, {
      name: "行業/職位",
      list: []
    }, {
      name: "公眾人物",
      list: []
    }, {
      name: "族群",
      list: []
    }, {
      name: "自訂標籤",
      list: []
    }
  ];
};