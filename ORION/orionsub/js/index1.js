$(function(){
    $('.nav .main-nav .main-nav2 li').mouseover(function(){
        $('.nav .sub-nav').stop().slideDown();
        $('.nav .main-nav .main-nav2 li').removeClass('on');
        $(this).addClass('on');
    })
    $('nav').mouseleave(function(){
        $('.nav .sub-nav').stop().slideUp();
        $('.nav .main-nav .main-nav2 li').removeClass('on');
        $(this).addClass('on');
    })
    $('.nav .sub-nav .sub').mouseover(function(){
        var index = $(index) = index();
        
        $('.nav .main-nav .main-nav2 li').removeClass('on');
        $('.nav .main-nav .main-nav2 li').eq(index).addClass('on');
    })
    
    $('.nav .sub-nav .sub li').mouseover(function(){
        $('.nav .sub-nav .sub li').removeClass('on');
        $(this).addClass('on');
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
    })
    
