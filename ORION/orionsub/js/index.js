$(function(){
    $('.nav .main-nav ul li').mouseover(function(){
        $('.nav .sub-nav').stop().slideDown();
        $('.nav .main-nav ul li').removeClass('on');
        $(this).addClass('on');
    })
    $('nav').mouseleave(function(){
        $('.nav .sub-nav').stop().slideUp();
        $('.nav .main-nav ul li').removeClass('on');
        $(this).addClass('on');
    })
    
    $('.nav .sub-nav ul').mouseover(function(){
        var index = $(this).index();
        
        $('.nav .main-nav ul li').removeClass('on');
        $('.nav .main-nav ul li').eq(index).addClass('on');
    })
    
    $('.nav .sub-nav ul li').mouseover(function(){
        $('.nav .sub-nav ul li').removeClass('on');
        $(this).addClass('on');
    })
    
     $('.nav .sub-nav ul li').mouseleave(function(){
        $('.nav .sub-nav ul li').removeClass('on');
        $(this).addClass('on');
    })
    
    /*slide*/
    
    
    var array = [0,-1200,-2400];
    var count = 0;
    var timer;
    
    setInterval(make,3000);
    
    function make(){
        count++;
        if(count==3){
            count=0;
        }
        banner();
    }
    
    function banner(){
        $('.slide .frame ul').animate({left:array[count]},300);
    }
    
    /*popup*/
    
    $('.section2 .notice dl dd p a').eq(0).click(function(){
        $('.popup').show();
    });
    
    $('.popup .popbg .layerpop .btn').click(function(){
        $('.popup').hide();
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})