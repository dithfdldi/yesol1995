$(function(){
    $('#nav4 .nav4 > .main-nav > li > .sub-nav').hide();
    
    $('#nav4 .nav4 > .main-nav > li > a').mouseenter(function(){
        
        $('#nav4 .nav4 > .main-nav > li > .sub-nav').fadeOut(300);
        
        $(this).parent().find('.sub-nav').fadeIn(300);
    });
    
    $('#nav4 .nav4 > .main-nav > li').mouseleave(function(){
        $('#nav4 .nav4 > .main-nav > li > .sub-nav').fadeOut(300);
    });
    
    
});

