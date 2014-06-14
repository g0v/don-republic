
//var edemocracy=angular.module('edemocracy',[]);
var edemocracy=angular.module('edemocracy',['firebase']);

//var data = new Firebase("https://edemocracy.firebaseio.com");
//data.users = new Firebase("https://edemocracy.firebaseio.com/users");
//data.users.etblue = new Firebase("https://edemocracy.firebaseio.com/users/etblue");
//data.users.etblue.pins = new Firebase("https://edemocracy.firebaseio.com/users/etblue/pins");
//data.users.etblue.pins.issues = new Firebase("https://edemocracy.firebaseio.com/users/etblue/pins/issues");
//data.users.etblue.stream = new Firebase("https://edemocracy.firebaseio.com/users/etblue/stream");
//$(function(){
//  $('#inputName').on('keypress', function (e) {
//    if (e.keyCode == 13) {
//      var id = $('#inputId').val();
//      var name = $('#inputName').val();
//      $('#inputId').val('');
//      $('#inputName').val('');
//      data.users.etblue.pins.issues.push({name:name});
//    }
//  });
//});
//data.users.etblue.pins.on('child_added',function(snapshot){
//  var pin=snapshot.val();
//  showNewPin(pin.id,pin.name);
//});
//showNewPin=function(id,name){
//};

var controllers={};

controllers.index=function($scope,$firebase){
//  var data = new Firebase('https://edemocracy.firebaseio.com');
//  var data_types = ['users','issues','proposals','projects','groups','circles','tags','pads']
//  for(var i=0; i< data_types.length; i++){
//    var data_type=data_types[i];
//    data[data_type] = new Firebase("https://edemocracy.firebaseio.com/"+data_type);
//    console.log(data[data_type]);
//    $scope[data_type] = $firebase(data[data_type]);
//
//  }
  //data.users = new Firebase("https://edemocracy.firebaseio.com/users");
  //data.issues = new Firebase("https://edemocracy.firebaseio.com/issues");
  //data.proposals = new Firebase("https://edemocracy.firebaseio.com/proposals");
  //data.projects = new Firebase("https://edemocracy.firebaseio.com/projects");
  //data.tags = new Firebase("https://edemocracy.firebaseio.com/tags");
  //data.groups = new Firebase("https://edemocracy.firebaseio.com/groups");
  //data.circles = new Firebase("https://edemocracy.firebaseio.com/circles");
  //data.pads = new Firebase("https://edemocracy.firebaseio.com/pads");
  //data.users.etblue = new Firebase("https://edemocracy.firebaseio.com/users/etblue");
  //console.log(data.users);
  //data.users.etblue.pins = new Firebase("https://edemocracy.firebaseio.com/users/etblue/pins");
  //$scope.users = $firebase(data.users);
  //$scope.issues = $firebase(data.issues);
  //$scope.proposals = $firebase(data.proposals);
  //$scope.projects = $firebase(data.projects);
  //$scope.tags = $firebase(data.tags);
  //$scope.groups = $firebase(data.groups);
  //$scope.circles = $firebase(data.circles);
  //$scope.pads = $firebase(data.pads);
  //$scope.pins = $firebase(new Firebase("https://edemocracy.firebaseio.com/users/etblue/pins"));
  $scope.data = $firebase(new Firebase("https://edemocracy.firebaseio.com"));
  $scope.data.$on("change",function(){
    var data_types = ['users','issues','proposals','projects','groups','tags','pads'];
    for(var i=0; i< data_types.length; i++){
      var data_type=data_types[i];
      $scope[data_type] = $scope.data[data_type];
    }
    //$scope.pins = $scope.data.users.etblue.pins;
    //$scope.subscribtions = $scope.data.users.etblue.subscribtions;
  });
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
edemocracy.controller('index',controllers.index);

