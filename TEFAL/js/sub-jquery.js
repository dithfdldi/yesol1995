$(function(){
    $(window).scroll(function(){
        /*@@@@@탑버튼@@@@@*/
        var nowScroll=$(this).scrollTop();
        var mainScroll=$('#section1').offset().top;
        
        if(nowScroll>mainScroll){
            $('.top-btn-wrap').fadeIn(500);
        }else{
            $('.top-btn-wrap').hide();
        }
        
        /*@@@@@section2@@@@@*/
    });
    /*@@@@@탑버튼@@@@@*/
    $('.top-btn-wrap').click(function(){
        $('body, html').animate({scrollTop:0}, 500);
    });
    
    /*@@@@@header-nav@@@@@*/
    $('.header-nav ul li a').mouseover(function(){
        $(this).addClass('on').siblings().removeClass('on');
    }).mouseleave(function(){
        $('.header-nav ul li a').removeClass('on');
    });
    /*@@@@@section1@@@@@*/
    $('.sub-nav ul li').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
    });
    
    /*@@@@@section2@@@@@*/
    $('.section2 .select li').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
    });
    
    $('.section2 .content-wrap .content li').mouseenter(function(){
        $(this).addClass('on').siblings().removeClass('on');
    }).mouseleave(function(){
        $('.section2 .content-wrap .content li').removeClass('on');
    });
});