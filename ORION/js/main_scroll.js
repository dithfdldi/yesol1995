$(function(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
    /*############스크롤페이지이동##############*/
    var count=0;
    var scrollEvent=false;
    var sectionLength=$('#wrap>section').length;
    var sectionHeight=$('#wrap>section').outerHeight();
    var footerHeight=$('#wrap>footer').outerHeight();
    $('html, body').on('mousewheel DOMMouseScroll', function(e){
        e.preventDefault();
        
        var m=e.originalEvent;
        delta=0;
        if(m.detail){
            delta=m.detail* -40;
        }else{
            delta=m.wheelDelta;
        }
        
        if(delta>0 && scrollEvent==false && count>0){
            scrollEvent=true;
            count--;
            console.log(count);
                $('html, body').stop().animate({
                    scrollTop: sectionHeight*count
                }, 500, function(){ scrollEvent=false; });
            
            $('.dot-wrap .dot>li').eq(count).addClass('on').siblings().removeClass('on');
        }
        else if(delta<0 && scrollEvent==false && count<sectionLength){
            scrollEvent=true;
            count++;
            console.log(count);
            if(count==sectionLength){
                scrollEvent=true;
                $('html, body').stop().animate({
                    scrollTop: sectionHeight*(count-1) + footerHeight
                }, 500 ,function(){ scrollEvent=false; });
            }else{
                $('html, body').stop().animate({
                    scrollTop: sectionHeight*count
                }, 500, function(){ scrollEvent=false; });
            }
            
            $('.dot-wrap .dot>li').eq(count).addClass('on').siblings().removeClass('on');
        }
        
    });
    /*############dot##############*/
    $('.dot-wrap .dot>li').click(function(){
        var dotsIndex=$(this).index();
        console.log(dotsIndex); /*0부터*/
        count=parseInt(dotsIndex);
        $('.dot-wrap .dot>li').eq(count).addClass('on').siblings().removeClass('on');
        $('html, body').stop().animate({
            scrollTop: sectionHeight*count
        }, 500, function(){ scrollEvent=false; });
    });
    /*############header 고정##############*/
    
});