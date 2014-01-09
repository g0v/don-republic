var donApp=angular.module('donApp',[]);
var controllers={};

donApp.factory('data',function(){
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
controllers.timeline=function($scope,data){
  $scope.plans=data.getPlans();
  $scope.addPlan=function(){
    $scope.plans.push(
      {
        id: $scope.newPlan.id,
        name: $scope.newPlan.name
      })
  }
}
donApp.controller('timeline',controllers.timeline);
