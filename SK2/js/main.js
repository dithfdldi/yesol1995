$(function(){
    /*-------------sub-nav--------------*/
    $('.ham-menu').click(function(){
        var ham=$('.ham-menu');
        $(this).toggleClass('active');
        if(ham.hasClass('active')){
            ham.find('.bar').stop().animate({top:'8px'}, 300,function(){
                ham.addClass('on');
            });
            $('.sub-nav').addClass('on');
        }else{
            ham.removeClass('on');
            setTimeout(function(){
                ham.find('.bar1').stop().animate({top:'0px'}, 300);
                ham.find('.bar3').stop().animate({top:'16px'}, 300);
            }, 200);
            $('.sub-nav').removeClass('on');
            $('.product-sub').removeClass('on');
            $('.service-sub').removeClass('on');
        }
    });
    /*-------------product-sub--------------*/
    $('.sub-nav>ul li').eq(0).click(function(){
        $('.service-sub').removeClass('on');
        $('.product-sub').toggleClass('on');
    });
    
    $('.product-sub .product-menu li a').mouseover(function(){
        $(this).parent().addClass('on').siblings().removeClass('on');
    }).mouseleave(function(){
        $('.product-sub .product-menu li').removeClass('on');
    });
    /*-------------service-sub--------------*/
    $('.sub-nav>ul li').eq(2).click(function(){
        $('.product-sub').removeClass('on');
        $('.service-sub').toggleClass('on');
    });
    
    $('.service-sub .service-menu li a').mouseover(function(){
        $(this).parent().addClass('on').siblings().removeClass('on');
    }).mouseleave(function(){
        $('.service-sub .service-menu li').removeClass('on');
    });
    /*-------------header---------------*/
    $('#header ul li').mouseover(function(){
        $(this).addClass('on').siblings().removeClass('on');
    }).mouseleave(function(){
        $('#header ul li').removeClass('on');
    });
    /*-------------sns-wrap---------------*/
    $('.sns-wrap .sns li').mouseover(function(){
        $(this).addClass('on').siblings().removeClass('on');
    }).mouseleave(function(){
        $('.sns-wrap .sns li').removeClass('on');
    });
    /*-------------slide-wrap---------------*/
    function windowResize(){
        $('.slide-wrap .slide:gt(0)').hide();

            var cnt=0;
            var nowNum=1;
            var slideLenght=$('.slide-wrap .slide').length;
            function fade_change(){
                $('.slide-wrap .slide').eq(cnt%slideLenght).fadeIn(800).siblings().fadeOut(800);
                $('.bar-wrap .bar .now-bar').stop().animate({left: (cnt%slideLenght)*33.33 +'%'}, 300);

                nowNum=(cnt%slideLenght)+1;
                $('.bar-wrap .now-num').text('0'+nowNum);

                cnt++;
                return nowNum;
            }
            var timer=setInterval(fade_change, 5000);

            $('.slide-wrap .slide .txt').hover(function(){
                clearInterval(timer);
            }, function(){
                timer=setInterval(fade_change, 5000);
            });

            $('.btn-wrap>div').click(function(){
                clearInterval(timer);
                if($(this).hasClass('prev')){
                    cnt=nowNum-2;
                    if(cnt<0){cnt=slideLenght-1;}
                }else{
                    cnt=nowNum;
                    if(cnt>=slideLenght){cnt=0;}
                }
                fade_change();
                timer=setInterval(fade_change, 5000);
            }); 
    }
    
    var windowWidth=$(window).width();
    if(windowWidth>768){windowResize();}
    
    $(window).resize(function(){
        var windowReWidth=$(window).width();
        if(windowReWidth>768){
            windowResize();
        }
    });
    
//    $('html, body').on('mousewheel DOMMouseScroll', function(e){
//        var E=e.originalEvent;
//        delta=0;
//        if(E.detail){
//            delta=E.detail * -40;
//        }else{
//            delta=E.wheelDelta;
//        }    
//    });
});