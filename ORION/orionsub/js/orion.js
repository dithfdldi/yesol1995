$(function(){
    
    $('#header .main-nav .gnb>li').mouseover(function(){
        $('#header .main-nav .gnb>li>a').removeClass('on');
        $(this).children().addClass('on');
    }).mouseleave(function(){
        $('#header .main-nav .gnb>li>a').removeClass('on');
    });
    
    $('#header .main-nav .gnb').mouseover(function(){
        $('#header .main-nav .gnb>li>a').css('color', '#000');
        $('#header .sub-cover').css('height', '280px');
        $('#header .main-nav .gnb>li .lnb').show();
    })
    $('#header .sub-cover').mouseleave(function(){
        $('#header .main-nav .gnb>li>a').css('color', '#fff');
        $('#header .sub-cover').css('height', 0);
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
    
    $(function(){
        $('#header .main-nav .ham-menu span.bar1').click(function(){
            $('#section2').css('z-index','0');
        })
    });
    
     $(function(){
        $('#header .main-nav .ham-menu span.bar2').click(function(){
            $('#section2').css('z-index','0');
        })
    });
    
    $(function(){
        $('#header .main-nav .ham-menu span.bar2 , span.bar1').click(function(){
            $('.section3 .info-cover').css('z-index','0');
        })
    });
    
     
    
    $(window).scroll(function(){
        
        $('.section3 h2, .section3 hr').each(function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if(bottom_of_window > bottom_of_object/2){
                $(this).animate({'opacity':'1'},500);
            }
        });
    });
    
    $(window).scroll(function(){
        
     $('.section3 h3').each(function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if(bottom_of_window > bottom_of_object/2){
                $(this).animate({'opacity':'1'},500);
            }
        });
    });
    
    
    $(window).scroll(function(){
        
        $('.section3 .info-cover .info-img').each(function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if(bottom_of_window > bottom_of_element){
                $(this).animate({'top':'28%','opacity':'1'},700);
            }
        });
    });
    
    $(window).scroll(function(){
        
        $('.section4 > h2').each(function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if(bottom_of_window > bottom_of_object){
                $(this).animate({'opacity':'1'},500);
            }
        });
    });
    
    $(window).scroll(function(){
        
        $('.section4 > h3').each(function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if(bottom_of_window > bottom_of_object){
                $(this).animate({'opacity':'1'},500);
            }
        });
    });
    
    $(window).scroll(function(){
        
        $('.section4 .radius').each(function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if(bottom_of_window > bottom_of_element){
                $(this).animate({'top':'4%','opacity':'1'},700);
            }
        });
    });
    
    $(window).scroll(function(){
        
        $('.section5 h2').each(function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if(bottom_of_window > bottom_of_element){
                $(this).animate({'top':'12%','opacity':'1'},500);
            }
        });
    });
    
    $(window).scroll(function(){
        
        $('.section5 .section5-first > .lord-image').each(function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if(bottom_of_window > bottom_of_object){
                $(this).animate({'opacity':'1'},500);
            }
        });
    });
   
     $(window).scroll(function(){
        
        $('.section5 .section5-second > .lord-image').each(function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if(bottom_of_window > bottom_of_object){
                $(this).animate({'opacity':'1'},500);
            }
        });
    });
   
     $(window).scroll(function(){
        
        $('.section5 .section5-third > .lord-image').each(function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if(bottom_of_window > bottom_of_object){
                $(this).animate({'opacity':'1'},500);
            }
        });
    });
    
     $(window).scroll(function(){
        
        $('.section5 .section5-first > .lord-text a > h3').each(function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if(bottom_of_window > bottom_of_object){
                $(this).animate({'opacity':'1'},500);
            }
        });
    });
    
     $(window).scroll(function(){
        
        $('.section5 .section5-second > .lord-text a > h3').each(function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if(bottom_of_window > bottom_of_object){
                $(this).animate({'opacity':'1'},500);
            }
        });
    });
    
     $(window).scroll(function(){
        
        $('.section5 .section5-third > .lord-text a > h3').each(function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if(bottom_of_window > bottom_of_object){
                $(this).animate({'opacity':'1'},500);
            }
        });
    });

    $(window).scroll(function(){
        
        $('.section6 .section6-left .section6-left-top > .ceo-image').each(function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if(bottom_of_window > bottom_of_element){
                $(this).animate({'opacity':'1','bottom':'50%'},500);
            }
        });
    });
    
        $(window).scroll(function(){
        
        $('.section6 .section6-left .section6-left-top > h2').each(function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if(bottom_of_window > bottom_of_object){
                $(this).animate({'opacity':'1'},500);
            }
        });
    });
    
    
    $(window).scroll(function(){
        
        $('.section6 .section6-left .section6-left-bottom > .way-to-come-text > h2').each(function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if(bottom_of_window > bottom_of_object){
                $(this).animate({'opacity':'1'},500);
            }
        });
    });
    
    $(window).scroll(function(){
        
        $('.section6 .section6-right > h2').each(function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if(bottom_of_window > bottom_of_object){
                $(this).animate({'opacity':'1'},500);
            }
        });
    });
    
    $('.section3 > h3 > .counter').counterUp({
    delay: 10,
    time: 1300
});
    
  
    $(function(){
        $('.section3 > .history-cover .history > ul > li').click(function(){
            $('.section3 > .history-cover .history > ul > li').removeClass('on');
            $(this).addClass('on');
        });
    });
    
    
    $(function(){
        $('.section3 > .history-cover .history > ul > #orion_0').mouseover(function(){
              $('.section3 > .history-cover .history > ul > li > div.bar-0').css('opacity','1');
        });
        $('.section3 > .history-cover .history > ul > #orion_0').mouseleave(function(){
            $('.section3 > .history-cover .history > ul > li > div.bar-0').css('opacity','0');
        })
    });
    
    
    $(function(){
        $('.section3 > .history-cover .history > ul > #orion_1').mouseover(function(){
              $('.section3 > .history-cover .history > ul > li > div.bar-1').css('opacity','1');
        });
        $('.section3 > .history-cover .history > ul > #orion_1').mouseleave(function(){
            $('.section3 > .history-cover .history > ul > li > div.bar-1').css('opacity','0');
        })
    });
    
    $(function(){
        $('.section3 > .history-cover .history > ul > #orion_2').mouseover(function(){
              $('.section3 > .history-cover .history > ul > li > div.bar-2').css('opacity','1');
        });
        $('.section3 > .history-cover .history > ul > #orion_2').mouseleave(function(){
            $('.section3 > .history-cover .history > ul > li > div.bar-2').css('opacity','0');
        })
    });
    
    $(function(){
        $('.section3 > .history-cover .history > ul > #orion_3').mouseover(function(){
              $('.section3 > .history-cover .history > ul > li > div.bar-3').css('opacity','1');
        });
        $('.section3 > .history-cover .history > ul > #orion_3').mouseleave(function(){
            $('.section3 > .history-cover .history > ul > li > div.bar-3').css('opacity','0');
        })
    });
    
    $(function(){
        $('.section3 > .history-cover .history > ul > #orion_4').mouseover(function(){
              $('.section3 > .history-cover .history > ul > li > div.bar-4').css('opacity','1');
        });
        $('.section3 > .history-cover .history > ul > #orion_4').mouseleave(function(){
            $('.section3 > .history-cover .history > ul > li > div.bar-4').css('opacity','0');
        })
    });
    
    $(function(){
        $('.section3 > .history-cover .history > ul > #orion_5').mouseover(function(){
              $('.section3 > .history-cover .history > ul > li > div.bar-5').css('opacity','1');
        });
        $('.section3 > .history-cover .history > ul > #orion_5').mouseleave(function(){
            $('.section3 > .history-cover .history > ul > li > div.bar-5').css('opacity','0');
        })
    });
    
    $(function(){
        $('.section3 > .history-cover .history > ul > #orion_6').mouseover(function(){
              $('.section3 > .history-cover .history > ul > li > div.bar-6').css('opacity','1');
        });
        $('.section3 > .history-cover .history > ul > #orion_6').mouseleave(function(){
            $('.section3 > .history-cover .history > ul > li > div.bar-6').css('opacity','0');
        })
    });
    
    
    
    $(function(){
        
        $('#orion_0').click(function () {
        $('.section3 .info-cover .info-img > ul > li > img').attr("src", "images/orion_0.png");
      });
        
      $('#orion_1').click(function () {
        $('.section3 .info-cover .info-img > ul > li > img').attr("src", "images/orion_1.png");
      });

      $('#orion_2').click(function () {
        $('.section3 .info-cover .info-img > ul > li > img').attr("src", "images/orion_2.png");
      });
        
        $('#orion_3').click(function () {
        $('.section3 .info-cover .info-img > ul > li > img').attr("src", "images/orion_3.png");
      });
        
        $('#orion_4').click(function () {
        $('.section3 .info-cover .info-img > ul > li > img').attr("src", "images/orion_4.png");
      });
        
        $('#orion_5').click(function () {
        $('.section3 .info-cover .info-img > ul > li > img').attr("src", "images/orion_5.png");
      });
        
        $('#orion_6').click(function () {
        $('.section3 .info-cover .info-img > ul > li > img').attr("src", "images/orion_6.png");
      });
        
        
    });
    
    $(document).ready(function() {
    var page = $('body');  // set to the main content of the page   
    $(window).mousewheel(function(event, delta, deltaX, deltaY){
        if (delta < 0) page.scrollTop(page.scrollTop() + 65);
        else if (delta > 0) page.scrollTop(page.scrollTop() - 65);
        return false;
    })
});


    
    

    
    
});





