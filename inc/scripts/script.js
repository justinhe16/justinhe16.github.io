$(document).ready(function(){
  $('#banner .heading').fadeIn( 600, function(){});
  $('#banner .secondheading').fadeIn( 1000, function(){});
  $('#banner .thirdheading').fadeIn( 1400, function(){});
  $('#banner #links').fadeIn( 1400, function(){}).css("display","block");
  $('#prof').fadeIn( 1400, function(){}).css("display","block");
  $('#scroll').fadeIn({queue: false, duration: 1400}, function(){}).css("display","block");
  $('#scroll').animate({ top: "4%" }, 1400, function(){});
});