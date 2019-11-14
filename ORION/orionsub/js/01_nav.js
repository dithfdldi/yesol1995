$(function(){
    
    $('.nav1-sub').hide();
    
    $('#nav1 .nav1 .nav1-main ul li a').mouseenter(function(){
        $('#nav1 .nav1 .nav1-main ul li a').removeClass('on');
        $(this).addClass('on');
        $('.nav1-sub').stop().slideDown(300);
    });
    $('.nav1').mouseleave(function(){
        $('#nav1 .nav1 .nav1-main ul li a' ).removeClass('on');
        $('.nav1-sub').stop().slideUp(300);
    });
    $('#nav1 .nav1 .nav1-sub ul li a').mouseenter(function(){
        
        var index = $(this).parent() .parent() .index();
        
        $('#nav1 .nav1 .nav1-sub ul li a').removeClass('on');
        $(this).addClass('on');
        $('#nav1 .nav1 .nav1-main ul li a').removeClass('on');
        $('#nav1 .nav1 .nav1-main ul li a').eq(index).addClass('on');
    });
    $('#nav1 .nav1 .nav1-sub ul li a').mouseleave(function(){
        $('#nav1 .nav1 .nav1-sub ul li a').removeClass('on');
    })
})