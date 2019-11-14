$(document).ready(function(){
    var delta=10;
    var lastScrollTop=0;
    var navbarHeight=$('#header').outerHeight();
    var winHeight=$(window).height();
    
    $(window).scroll(function(){
        var nowScroll=$(this).scrollTop();
        /*@@@@@탑버튼@@@@@*/
        var mainScroll=$('#section2').offset().top;
        
        if(nowScroll>mainScroll){
            $('.top-btn-wrap').fadeIn(500);
        }else{
            $('.top-btn-wrap').hide();
        }
        /*@@@@@header-nav@@@@@*/
        
        if(Math.abs(lastScrollTop-nowScroll)<= delta){return;}
        
        if(nowScroll>lastScrollTop && nowScroll>navbarHeight){
            $('#header').removeClass('on');
            $('.header-logo h1 a img').hide();
        }else{
            if(nowScroll<=navbarHeight+50){
                $('#header').removeClass('on');
                $('.header-logo h1 a img').hide();
            }else{
                $('#header').addClass('on');
                $('.header-logo h1 a img').show();
            }
        }
        lastScrollTop=nowScroll;
        
        /*@@@@@section2@@@@@*/
        if(nowScroll>=winHeight/4){
            $('.section2 h2').css({opacity:1, top:'50%'});
            $('.section2>p').css({opacity:1, top:'90%'});
            $('.section2 span').css({opacity:1, top:'115%'});
        }else{
            $('.section2 h2').css({opacity:0, top:'150%'});
            $('.section2>p').css({opacity:0, top:'190%'});
            $('.section2 span').css({opacity:0, top:'215%'});
        }
        
        if(nowScroll>=winHeight/3){
            $('.section2 .tefal-intro .intro-img01').css({opacity:1, left:0});
            $('.section2 .tefal-intro .intro-img02').css({opacity:1, top: '160%'});
            $('.section2 .tefal-intro .intro-img03').css({opacity:1, right:0});
        }else{
            $('.section2 .tefal-intro .intro-img01').css({opacity:0, left:'-100%'});
            $('.section2 .tefal-intro .intro-img02').css({opacity:0, top: '460%'});
            $('.section2 .tefal-intro .intro-img03').css({opacity:0, right:'-100%'});
        }
        
        /*@@@@@section3@@@@@*/
        var boxScroll1=$('.box1').offset().top;
        var boxScroll2=$('.box2').offset().top;
        var boxScroll3=$('.box3').offset().top;
        var boxScroll4=$('.box4').offset().top;
        var boxScroll5=$('.box5').offset().top;
        
        if(nowScroll+winHeight > boxScroll1){
            $('.cont-left .cont-box.box1').css('left',0);
        }
        if(nowScroll+winHeight > boxScroll2){
            $('.cont-left .cont-box.box2').css('left',0);
        }
        if(nowScroll+winHeight > boxScroll3){
            $('.cont-right .cont-box.box3').css('right',0);
        }else{
            $('.cont-left .cont-box').css('left','-110%');
            $('.cont-right .cont-box').css('right','-110%');
        }
        if(nowScroll+winHeight > boxScroll4){
            $('.cont-right .cont-box.box4').css('right',0);
        }
        if(nowScroll+winHeight > boxScroll5){
            $('.cont-right .cont-box.box5').css('right',0);
        }
        
        /*@@@@@section4@@@@@*/
        var recpScroll=$('.section4 .video-wrap').offset().top;
        
        if(nowScroll+winHeight > recpScroll+100){
            $('.section4 .txt-wrap a').css('left', 0);
            $('.section4 .video-bg').css({right:'-4vw', top:'18vw'});
        }else{
            $('.section4 .txt-wrap a').css('left', '-200%');
            $('.section4 .video-bg').css({right:'4.5vw', top:'13vw'});
        }
    });
    
    /*@@@@@header-nav@@@@@*/
    $('.header-nav ul li a').mouseover(function(){
        $(this).addClass('on').siblings().removeClass('on');
    }).mouseleave(function(){
        $('.header-nav ul li a').removeClass('on');
    });
    /*@@@@@section1@@@@@*/
    $('.video-txt a').mouseover(function(){
        $(this).addClass('on').siblings().removeClass('on');
    }).mouseleave(function(){
        $('.video-txt a').removeClass('on');
    });
    /*@@@@@section2@@@@@*/
    $('.section2 .tefal-intro .intro-img').mouseenter(function(){
        $(this).children('.hover').show(300).siblings().hide();
        $(this).find('.plus').addClass('on').siblings().removeClass('on');
    }).mouseleave(function(){
        $('.section2 .tefal-intro .intro-img').children('.hover').hide();
        $('.section2 .tefal-intro .intro-img').find('.plus').removeClass('on');
    });
    /*@@@@@section3@@@@@*/
    $('.cont-box').mouseenter(function(){
        $(this).addClass('on');
        $(this).find('.cont-txt').fadeIn(500);
    }).mouseleave(function(){
        $('.cont-box').removeClass('on');
        $('.cont-box').find('.cont-txt').hide();
    });  
    /*@@@@@section5@@@@@*/
    $('.section5 ul li').mouseenter(function(){
        $('.section5 ul li a').removeClass('on');
        $(this).children().addClass('on');
    }).mouseleave(function(){
        $('.section5 ul li a').removeClass('on');
    });
    /*@@@@@탑버튼@@@@@*/
    $('.top-btn-wrap').click(function(){
        $('body, html').animate({scrollTop:0}, 500);
    });
});