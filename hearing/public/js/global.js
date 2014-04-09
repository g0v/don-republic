//$('.ui.dropdown').dropdown({'on':'hover'});
$('.ui.dropdown').dropdown();

$('.action .item.bookmark,.action .item.subscribe').on('click tap',function(){
  $(this).toggleClass('selected');
})

$('#header>.menu>.right>.dropdown>.menu>.relation').on('click tap',function(){
  $('#content .category .relation, #header>.menu>.right>.dropdown>.relation').css('display', 'inline-block');
  $('#content .category .tag, #header>.menu>.right>.dropdown>.tag').hide();
  $('#content .category .board, #header>.menu>.right>.dropdown>.board').hide();
  $('#header>.menu>.right>.dropdown>.no.category').hide();
})

$('#header>.menu>.right>.dropdown>.menu>.tag').on('click tap',function(){
  $('#content .category .relation, #header>.menu>.right>.dropdown>.relation').hide();
  $('#content .category .tag, #header>.menu>.right>.dropdown>.tag').css('display', 'inline-block');
  $('#content .category .board, #header>.menu>.right>.dropdown>.board').hide();
  $('#header>.menu>.right>.dropdown>.no.category').hide();
})

$('#header>.menu>.right>.dropdown>.menu>.board').on('click tap',function(){
  $('#content .category .relation, #header>.menu>.right>.dropdown>.relation').hide();
  $('#content .category .tag, #header>.menu>.right>.dropdown>.tag').hide();
  $('#content .category .board, #header>.menu>.right>.dropdown>.board').css('display', 'inline-block');
  $('#header>.menu>.right>.dropdown>.no.category').hide();
})

$('#header>.menu>.right>.dropdown>.menu>.no.category').on('click tap',function(){
  $('#content .category .relation, #header>.menu>.right>.dropdown>.relation').hide();
  $('#content .category .board, #header>.menu>.right>.dropdown>.board').hide();
  $('#content .category .tag, #header>.menu>.right>.dropdown>.tag').hide();
  $('#header>.menu>.right>.dropdown>.no.category').css('display', 'inline-block');
})

$('#header>.menu>.right>.filter').on('click tap',function(){
  $('#content .category.navigation').toggle();
  $(this).toggleClass('active')
})

$('#comparison .statistic').on('click tap',function(){
  $('#comparison .comparison').slideToggle();
})
