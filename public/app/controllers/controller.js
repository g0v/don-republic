
//var edemocracy=angular.module('edemocracy',[]);
var edemocracy=angular.module('edemocracy',['firebase']);

var data = new Firebase("https://edemocracy.firebaseio.com");
data.users = new Firebase("https://edemocracy.firebaseio.com/users");
data.users.etblue = new Firebase("https://edemocracy.firebaseio.com/users/etblue");
data.users.etblue.pins = new Firebase("https://edemocracy.firebaseio.com/users/etblue/pins");
data.users.etblue.pins.issues = new Firebase("https://edemocracy.firebaseio.com/users/etblue/pins/issues");
data.users.etblue.stream = new Firebase("https://edemocracy.firebaseio.com/users/etblue/stream");
$(function(){
  $('#inputName').on('keypress', function (e) {
    if (e.keyCode == 13) {
      var id = $('#inputId').val();
      var name = $('#inputName').val();
      $('#inputId').val('');
      $('#inputName').val('');
      data.users.etblue.pins.issues.push({name:name});
    }
  });
});
data.users.etblue.pins.on('child_added',function(snapshot){
  var pin=snapshot.val();
  showNewPin(pin.id,pin.name);
});
showNewPin=function(id,name){
};

var controllers={};

controllers.sidebar=function($scope,$firebase){
  var data = new Firebase('https://edemocracy.firebaseio.com');
  data.users = new Firebase("https://edemocracy.firebaseio.com/users");
  data.users.etblue = new Firebase("https://edemocracy.firebaseio.com/users/etblue");
  data.users.etblue.pins = new Firebase("https://edemocracy.firebaseio.com/users/etblue/pins");
  $scope.pins = $firebase(data.users.etblue.pins);
}

edemocracy.factory('dataPlan',function(){
  var plans=[
    {
      user:{
        vote:{
          status:'selected yes',
          icon:'checkmark checked'
        },
        bookmark:'selected',
        subscribe:'selected',
        share:'selected'
      },
      status:'3 天後送交立法院',
      id:'方案 1',
      name:'政府 IT 委外制度，引入開源碼發展模式可能性研究既建議案',
      edited:{
        by:'clkao',
        at:'10 分鐘前'
      },
      color:'blue'
    },
    {
      user:{
        vote:{
          status:'selected no',
          icon:'remove'
        },
        bookmark:'',
        subscribe:'selected',
        share:''
      },
      status:'投票中',
      id:'方案 2',
      name:'政府 IT 委外制度，引入開源碼發展模式可能性研究既建議案',
      edited:{
        by:'tkirby',
        at:'14 分鐘前'
      },
      color:'orange'
    }
  ];
  var factory={};
  factory.getPlans=function(){
    return plans;
  }
  return factory;
});

controllers.timeline=function($scope,dataPlan){
  $scope.plans=dataPlan.getPlans();
  $scope.addPlan=function(){
    $scope.plans.push(
      {
        id: $scope.newPlan.id,
        name: $scope.newPlan.name
      });
  };
};
edemocracy.controller('timeline',controllers.timeline);
edemocracy.controller('sidebar',controllers.sidebar);

