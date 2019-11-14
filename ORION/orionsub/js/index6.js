$(function(){
    $('#nav3 .nav3 .nav3-main > li > .nav3-sub').hide();
    
    $('#nav3 .nav3 .nav3-main > li > a').mouseenter(function(){
        $('#nav3 .nav3 .nav3-main > li > a').removeClass('on');
        $(this).addClass('on');
        $(this).parent().find('.nav3-sub').stop().slideDown(300);
    });
    $('#nav3 .nav3 .nav3-main > li').mouseleave(function(){
        $('#nav3 .nav3 .nav3-main > li a').removeClass('on');
        $('#nav3 .nav3 .nav3-main > li > .nav3-sub').stop().slideUp(300);
    });
    
    $('#nav3 .nav3 .nav3-main > li > .nav3-sub li > a').mouseenter(function(){
        $('#nav3 .nav3 .nav3-main > li > .nav3-sub >  li > a ').removeClass('on');
        $(this).addClass('on');
    }).mouseleave(function(){
        $('#nav3 .nav3 .nav3-main > li > .nav3-sub >  li > a').removeClass('on');
    });
})