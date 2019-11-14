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
    /*############section2##############*/
    var count=0;
    var historyLength=$('.section2 .history-wrap .history').length;
    
    function move(idx){
        count=idx;
        
        $('.section2 .history-wrap .history').removeClass('on');
        $('.section2 .history-wrap .history').eq(idx).addClass('on');
    }
    
    $('.section2 .btn').click(function(){
        if($(this).hasClass('pre')){
            if(count==0){
                count=historyLength;
            }
            move(count-1);
        }else{
            if(count==historyLength-1){
                count=-1;
            }
            move(count+1);
        }
    });
    /*############section3##############*/
    $('.left-wrap .left .img-wrap a img').mouseover(function(){
        $(this).addClass('on');
        $('.left-wrap .left .img-wrap>img').addClass('on');
    }).mouseleave(function(){
        $('.left-wrap .left .img-wrap a img').removeClass('on');
        $('.left-wrap .left .img-wrap>img').removeClass('on');
    });
    $('.right-wrap .right .img-wrap a img').mouseover(function(){
        $(this).addClass('on');
        $('.right-wrap .right .img-wrap>img').addClass('on');
    }).mouseleave(function(){
        $('.right-wrap .right .img-wrap a img').removeClass('on');
        $('.right-wrap .right .img-wrap>img').removeClass('on');
    });
    /*############section4##############*/
    $('#section4 .content .small img').click(function(){
        var smallImg1=$(this).attr('src');
        var smallAlt1=$(this).attr('alt');
        var nowImg=$('#section4 .content .big img').attr('src');
        var nowAlt=$('#section4 .content .big img').attr('alt');
        
        $(this).attr({src:nowImg, alt:nowAlt});
        $('#section4 .content .big img').attr({src:smallImg1, alt:smallAlt1});
        
        nowAlt=$('#section4 .content .big img').attr('alt');
        
        if(nowAlt=='red'){
            $('#section4 .right .txt-wrap li.red').addClass('on').siblings().removeClass('on');
        }else if(nowAlt=='green'){
            $('#section4 .right .txt-wrap li.green').addClass('on').siblings().removeClass('on');
        }else{
            $('#section4 .right .txt-wrap li.blue').addClass('on').siblings().removeClass('on');
        }
    });
    
    $('#section4 .content .small img').mouseover(function(){
        $('#section4 .content .small').removeClass('on');
        $(this).parent().addClass('on');
    }).mouseleave(function(){
        $('#section4 .content .small').removeClass('on');
    });
    
    $('#section4 .right .btn').mouseover(function(){
        $(this).addClass('on');
    }).mouseleave(function(){
        $('#section4 .right .btn').removeClass('on');
    });
    /*############section5##############*/
    $('.section5 .box .hover').hide();
    $('.section5 .box .txt').hide();
    
    $('.section5 .top .box.box1').mouseover(function(){
        $(this).addClass('on');
        $('.section5 .top .box1 p').hide();
    }).mouseleave(function(){
        $('.section5 .top .box.box1').removeClass('on');
        $('.section5 .top .box1 p').show();
    });
    
    $('.section5 .box').mouseover(function(){
        $(this).find('.hover').fadeIn(100);
        $(this).find('.txt').fadeIn(100);
    }).mouseleave(function(){
        $('.section5 .box .hover').fadeOut(100);
        $('.section5 .box .txt').fadeOut(100);
    }); 
});