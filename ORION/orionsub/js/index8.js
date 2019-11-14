$(function(){
    $('.tab .tab-menu dl dd ').hide().first().show();
    
    $('.tab .tab-menu dl dt').click(function(){
        $('.tab .tab-menu dl dd').hide();
        $(this).next().show();
        $('.tab .tab-menu dl dt').removeClass('on');
        $(this).addClass('on');
    });
})