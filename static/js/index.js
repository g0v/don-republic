var setMenu, qaFuncResize;
setMenu = function(v, u){
  $("#navbar li:nth-child(" + v + ")").addClass('active');
  return $("#menu > li:nth-child(" + u + ")").addClass('active');
};
qaFuncResize = function(){
  return $(".qa-func-panel").height(function(){
    return $(this).prev().height();
  });
};
window.onresize = function(){
  return qaFuncResize();
};
$(document).ready(function(){
  return qaFuncResize();
});