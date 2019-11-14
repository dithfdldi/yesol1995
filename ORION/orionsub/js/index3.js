$(function(){
  $('.nav > ul > li').mouseenter(function(){
      
      $('.nav > ul > li').removeClass('on');
      $(this).addClass('on');
      $(this).parent().find('.nav > ul > li > .sub').stop().slideDown(300);
//      $('.nav > ul > li').children('ul').fadeOut(300);
//      $(this).children('ul').fadeIn(300);
      
  });
    
    $('.nav > ul > li').mouseleave(function(){
        $('.nav > ul >li >.sub').stop().slideUp();
        $('.nav > ul > li').removeClass('on');
//        $('.nav > ul > li').children('ul').fadeOut(300);
    });
    
    $('.nav > ul > li > .sub > li').mouseover(function(){
        var index = $('this').index();
        
        $('.nav > ul > li').stop().slideDown();
        $('.nav > ul > li').eq(index).addClass('on');
    })
    
    $('.nav > ul > li > .sub > li').mouseenter(function(){
        $('.nav > ul > li > .sub > li').removeClass('on');
        $(this).addClass('on');
   
    });
    $('.nav > ul > li > .sub > li').mouseleave(function(){
        $('.nav > ul > li > .sub > li').removeClass('on');  
    });
    
    
    var array = [0, -800, -1600];
    var count = 0;
    var lilength = $('.slide .frame ul li').length;
    
    setInterval(make, 3000);
    
    function make(){
        count++;
        if(count==lilength){
            count=0;
        }
        slide();
    }
    
    function slide(){
        $('.slide .frame ul').animate({left:array[count]},300);
    }
    
    $('.section2 .gall dl dd ul li').mouseenter(function(){
        $('.section2 .gall da dd ul li').css('opacity','1');
        $(this).css('opacity','0.8');
    });
    
    $('.section2 .gall dl dd ul li').mouseleave(function(){
        $('.section2 .gall da dd ul li').css('opacity','1');
       
    });
    
 
});


