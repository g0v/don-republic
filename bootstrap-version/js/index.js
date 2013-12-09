var setMenu;
setMenu = function(v, u){
  $("#menu li:nth-child(" + v + ")").addClass('active');
  return $("#submenu li:nth-child(" + u + ")").addClass('active');
};