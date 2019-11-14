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
    
    $('.nav sub-nav ul li').mouseover(function(){
        $('.nav sub-nav ul li').removeClass('on');
        $(this).addClass('on');
    })
    
     $('.nav sub-nav ul li').mouseleave(function(){
        $('.nav sub-nav ul li').removeClass('on');
        $(this).addClass('on');
    })
    
    



/*---------------------------------------------------------*/

   /* var array = [0,-300,-600];
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
        $('.slide .frame ul').animate({top:array[count]},300);
    }*/

/*fade in ,out*/
var slideli = $('.slide .frame ul li');
var count = 0;
var lilength = slideli.length;

slideli.first().show().siblings().hide();

setInterval(make,3000);



function make(){
    count++;
    if(count==lilength){
        count=0;
    }
    slide();
}
function slide(){
    slideli.eq(count).fadeIn(300).siblings().fadeOut(300);
    
}

/*-------------------------------------------------------------*/

var gallay = $('.section2 .gallay dl dd ul li');

gallay.mouseenter(function(){
    gallay.css('opacity', '1');
    $(this).css('opacity', '0.7');
    
});

gallay.mouseleave(function(){
    gallay.css('opacity', '1');
});





});





