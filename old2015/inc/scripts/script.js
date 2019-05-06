/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'inc/scripts/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

$(document).ready(function(){
  $('#banner .heading').fadeIn( 600, function(){});
  $('#banner .secondheading').fadeIn( 1000, function(){});
  $('#banner .thirdheading').fadeIn( 1400, function(){});
  $('#banner #links').fadeIn( 1400, function(){}).css("display","block");
  $('#prof').fadeIn( 1400, function(){}).css("display","block");
  $('#scroll').fadeIn({queue: false, duration: 1400}, function(){}).css("display","block");
  $('#scroll').animate({ top: "4%" }, 1400, function(){});


  $(window).scroll( function(){
        $('.fadeInScroll').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
            bottom_of_window = bottom_of_window - 500;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'}, 1400);
            }
        }); 

        $('.fadeInScrollFooter').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
            bottom_of_window = bottom_of_window + 100;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'}, 1400);
            }
        }); 


        $('.fadeInScrollInterest').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
            bottom_of_window = bottom_of_window - 500;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'}, 1400, function(){
                    $(this).css("transition","0.5s ease");
                });
            }
        }); 
    });

  $('.interest').hover(function(){
    $(this).children().toggleClass("hovered");
    $(this).children().fadeIn(100, function(){});
  });
  $('.interest').mouseleave(function(){
    $('.subtext').fadeOut(100, function(){});
  });
});