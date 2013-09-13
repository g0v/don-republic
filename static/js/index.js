var setMenu;
setMenu = function(v, u){
  $("#navbar li:nth-child(" + v + ")").addClass('active');
  return $("#menu > li:nth-child(" + u + ")").addClass('active');
};