//$('.ui.dropdown').dropdown({'on':'hover'});
$('.ui.dropdown').dropdown();

$('#header>.menu>.right>.dropdown>.menu>.relation').on('click tap',function(){
  $('#content .category .relation, #header>.menu>.right>.dropdown>.relation').show();
  $('#content .category .tag, #header>.menu>.right>.dropdown>.tag').hide();
  $('#content .category .board, #header>.menu>.right>.dropdown>.board').hide();
  $('#header>.menu>.right>.dropdown>.no.category').hide();
})

$('#header>.menu>.right>.dropdown>.menu>.tag').on('click tap',function(){
  $('#content .category .relation, #header>.menu>.right>.dropdown>.relation').hide();
  $('#content .category .tag, #header>.menu>.right>.dropdown>.tag').show();
  $('#content .category .board, #header>.menu>.right>.dropdown>.board').hide();
  $('#header>.menu>.right>.dropdown>.no.category').hide();
})

$('#header>.menu>.right>.dropdown>.menu>.board').on('click tap',function(){
  $('#content .category .relation, #header>.menu>.right>.dropdown>.relation').hide();
  $('#content .category .tag, #header>.menu>.right>.dropdown>.tag').hide();
  $('#content .category .board, #header>.menu>.right>.dropdown>.board').show();
  $('#header>.menu>.right>.dropdown>.no.category').hide();
})

$('#header>.menu>.right>.dropdown>.menu>.no.category').on('click tap',function(){
  $('#content .category .relation, #header>.menu>.right>.dropdown>.relation').hide();
  $('#content .category .board, #header>.menu>.right>.dropdown>.board').hide();
  $('#content .category .tag, #header>.menu>.right>.dropdown>.tag').hide();
  $('#header>.menu>.right>.dropdown>.no.category').show();
})
