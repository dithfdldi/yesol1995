$(function(){
    /*############header##############*/
    $('#header .main-nav .gnb>li').mouseover(function(){
        $('#header .main-nav .gnb>li>a').removeClass('on');
        $(this).children().addClass('on');
    }).mouseleave(function(){
        $('#header .main-nav .gnb>li>a').removeClass('on');
    });
    
    $('#header .main-nav .gnb').mouseover(function(){
        $('#header .main-nav .gnb>li>a').css('color', '#000');
        $('#header .sub-cover').css('height', '280px');
        $('#header .main-nav').css('border-bottom', '1px solid #333');
        $('#header .main-nav .gnb>li .lnb').show();
    })
    $('#header .sub-cover').mouseleave(function(){
        $('#header .main-nav .gnb>li>a').css('color', '#fff');
        $('#header .sub-cover').css('height', 0);
        $('#header .main-nav').css('border-bottom', '1px solid #fff');
        $('#header .main-nav .gnb>li .lnb').hide();
    });
    
    $('#header .main-nav .gnb>li .lnb li').mouseover(function(){
        $('#header .main-nav .gnb>li .lnb li a').removeClass('on');
        $(this).children().addClass('on');
    }).mouseleave(function(){
        $('#header .main-nav .gnb>li .lnb li a').removeClass('on');
    });
    
    $('#header .main-nav .ham-menu').mouseover(function(){
        $('#header .main-nav .ham-menu span.bar2').addClass('hover');
    }).mouseleave(function(){
        $('#header .main-nav .ham-menu span.bar2').removeClass('hover');
    });
    
    $('#header .main-nav .ham-menu').click(function(){
        var btn=$('#header .main-nav .ham-menu');
        btn.toggleClass('active');
        if(btn.hasClass('active')){
            btn.find('span').animate({top:'50px'}, 300, function(){
                btn.find('span').addClass('on');
            });
            $('#header .all-menu').animate({left:0}, 300);
        }else{
            btn.find('.bar1').animate({top:'40px'}, 300, function(){
                btn.find('.bar1').removeClass('on');
            });
            btn.find('.bar2').animate({top:'60px'}, 300, function(){
                btn.find('.bar2').removeClass('on');
            });
            $('#header .all-menu').animate({left:'100%'}, 300);
        }
    });
    
    $('#header .all-menu .main-list>li').mouseover(function(){
        $('#header .all-menu .main-list>li>a').removeClass('on');
        $(this).children().addClass('on');
    }).mouseleave(function(){
        $('#header .all-menu .main-list>li>a').removeClass('on');
    });
    
    $('#header .all-menu .main-list>li .sub-list li a').mouseover(function(){
        $('#header .all-menu .main-list>li .sub-list li a').removeClass('on');
        $(this).addClass('on');
    }).mouseleave(function(){
        $('#header .all-menu .main-list>li .sub-list li a').removeClass('on');
    });
    
    /*############section3##############*/
    $('.section3 .relate-img li').mouseover(function(){
        $(this).addClass('on').siblings().removeClass('on');
    }).mouseleave(function(){
        $('.section3 .relate-img li').removeClass('on');
    });
    
    $('.section3 .btn .top').click(function(){
        $('html').scrollTop(0);
    });
});













