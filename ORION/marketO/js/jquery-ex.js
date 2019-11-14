    var items = [];
    var startItem = 1;
    var position = 0;
    var autoWapWorking=false;
    var itemCount = 0;
    var leftpos = itemCount;
    var resetCount = itemCount;
    var rows_new = null;
    var $dot = $('.swiper_btn .btn span');
    var slideIndex = 0;
    var len = $(".carousel ul li").length;

$(function(){
    rows_new = $('#product .list ul').clone();
    
/* header*/
    
    $('#header .main-nav .gnb>li').mouseover(function(){
        $('#header .main-nav .gnb>li>a').removeClass('on');
        $(this).children().addClass('on');
    }).mouseleave(function(){
        $('#header .main-nav .gnb>li>a').removeClass('on');
    });

    $('#header .main-nav .gnb').mouseover(function(){
        $('#header .main-nav .gnb>li>a').css('color', '#2a271f');
        $('#header .sub-cover').css('height', '280px');
        $('#header .main-nav .gnb>li .lnb').show();
    })
    $('#header .sub-cover').mouseleave(function(){
        $('#header .main-nav .gnb>li>a').css('color', '#2a271f');
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
    
    /* section 1 */
        $('#section1 h1').hide();
        $('#section1 h1').fadeIn(2000);
    
    /* story */
    $(window).scroll(function(){
        $('.story .left h1, .story .left h2').each(function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if(bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1', 'margin-top':'0px'}, 800);
            } 
        });
        $('.story .right').each(function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if(bottom_of_window > bottom_of_element/1.5){
                $(this).animate({'opacity':'1', 'margin-top':'0px'}, 800);
            }
        });
    });
    
  /* new */
    
    itemCount = $('.new .carousel ul li.items').length;
    function setCarseoulInterval(func, itr)
    {

      console.log("setCarseoulInterval()");
      intervalObj=setInterval(func, itr);
      setAutoWapWorking(true);
      console.log(" setCarseoulInterval() --> ", intervalObj);
      return intervalObj;
    }

    function clearCarouselInterval(timer){
      console.log(" clearCarouselInterval <-- ",timer);
      if(getAutoWapWorking()==true)
      {
        clearInterval(timer);
      }
      setAutoWapWorking(false);
    }

    function timeout(){

      console.log("====> timeout  ");
      if(getAutoWapWorking()==false)
      {
        autoSwap = setCarseoulInterval(swap,3500);
      }
      setAutoWapWorking(true);
    }


    function setAutoWapWorking(flag){
        // console.log("autoWapWorking before-> ", autoWapWorking);
        autoWapWorking=flag;
        // console.log("autoWapWorking after-> ", autoWapWorking);
    }

    function getAutoWapWorking(){
        // console.log("getAutoWapWorking -> ", autoWapWorking);
        return autoWapWorking;
    }
    
    setAutoWapWorking(false);

      var autoSwap = setCarseoulInterval(swap, 3500);
      // var autoSwap = setInterval(swap, 3500);

    // $('ul, span').hover(
    //     function(){
    //         clearCarouselInterval(autoSwap);
    //         setAutoWapWorking(false);
    //     },
    //     function(){
    //         autoSwap = setCarseoulInterval(swap, 3500);
    //         setAutoWapWorking(true);
    // });

    /*$('.swiper_btn .btn span').click(function(){
        var index = $(this).index();
        btn(index);
        
        function btn(idx){
        $('.swiper_btn .btn span').removeClass('on');
        $('.swiper_btn .btn span').eq(idx).addClass('on');
    }
	});*/
    
          

          $(".back").on("click", function(){
            slideIndex -= 1; 
            if( slideIndex < 0 ) { slideIndex = len - 1; }
            if( slideIndex >= len ) { slideIndex = 0 ;} 
            console.log(slideIndex);
            $(".carousel ul").animate({marginLeft:-553 * slideIndex });
            $dot.css({background:"#fff"});
            $dot.eq(slideIndex).css({background:"#ffc453"});
          });

          $(".next").on("click", function(){
            slideIndex += 1; 
            if( slideIndex < 0 ) { slideIndex = len - 1; }
            if( slideIndex >= len ) { slideIndex = 0 ;} 
            $(".carousel ul").animate({marginLeft:-553 * slideIndex});
             $dot.css({background:"#fff"});
            $dot.eq(slideIndex).css({background:"#ffc453"});
          });

            $dot.on("click", function(){
            $('.carousel ul').animate({marginLeft:-553 * $(this).index()});
            $dot.css({"background":"#fff"});
            $(this).css({"background":"#ffc453"});
            slideIndex = $(this).index();
            console.log(slideIndex);
           });

        function swap(action) {
        var direction = action;
        if(direction == 'counter-clockwise'){
            console.log('---- counter-clockwise ----');
            var leftitem = $('.left-pos').attr('id') -1;
            console.log('leftitem : ', leftitem);
            if(leftitem == 0){
                leftitem = itemCount;
            }
         $('.right-pos').removeClass('right-pos').addClass('back-pos');
         $('.main-pos').removeClass('main-pos').addClass('right-pos');
         $('.left-pos').removeClass('left-pos').addClass('main-pos');
         $('#'+leftitem+'').removeClass('back-pos').addClass('left-pos');
        }
        else {
            console.log('---- clockwise ----');
            var rightitem = parseInt($('.right-pos').attr('id')) +1;
            console.log('rightitem : ', rightitem);

            if(rightitem > 5) {
                rightitem = 1;
            }

            $('.left-pos').removeClass('left-pos').addClass('back-pos');
            $('.main-pos').removeClass('main-pos').addClass('left-pos');
            $('.right-pos').removeClass('right-pos').addClass('main-pos');
            $('#'+rightitem+'').removeClass('back-pos').addClass('right-pos');
            }
        }

        $('.next').click(function() {
            clearCarouselInterval(autoSwap);
            swap('clockwise');
            setTimeout(timeout, 3000);
            console.log(slideIndex);
            $('.carousel ul').animate({marginLeft:-553 * slideIndex});
            $dot.css({"background":"#fff"});
            $dot.eq(slideIndex).css({"background":"#ffc453"});
        });

        $('.back').click(function() {
            clearCarouselInterval(autoSwap);
            swap('counter-clockwise');
            setTimeout(timeout, 3000);
            console.log(slideIndex);
            $('.carousel ul').animate({marginLeft:-553 * slideIndex});
            $dot.css({"background":"#fff"});
            $dot.eq(slideIndex).css({"background":"#ffc453"});
        });
    
        /* product */
        $('#product .container .tab a').eq(1).click(function(){
            $('#product .container .tab a').removeClass('on');
            $(this).addClass('on');
            sortTable();
            
            function sortTable(){
                var table, rows, switching, i, x, y, shouldSwitch;
                table = $('#product .list');
                switching = true;
                
                while(switching){
                    switching = false;
                    rows = $('#product .list ul li');
                    console.log(rows.length);
                    
                    for (i = 0; i < (rows.length); i++){
                        shouldSwitch = false;
                        
                        x = rows[i];
                        y = rows[i+1];
                        
                        if (x.attributes.name.value.toLowerCase() > y.attributes.name.value.toLowerCase()) {
                            shouldSwitch = true;
                            break;
                        }
                    }
                    if (shouldSwitch) {
                      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                      switching = true;
                    }
                }
            }
        });
    
        $('#product .container .tab a').eq(0).click(function(){
            $('#product .container .tab a').removeClass('on');
            $(this).addClass('on');
            resetTable();
            
            function resetTable() {
                var new_li = rows_new;
                $('#product .list ul').replaceWith(new_li)
            }
            
            $('.list li .info').each(function(i){
                    $(this).one().animate({'opacity':'1', 'margin-top':'0px'}, 800);
                    
                    $('.product2').delay(100);
                    $('.product3').delay(110);
                    $('.product4').delay(115);
                    $('.product5').delay(120);
                    $('.product6').delay(125);
                    $('.product7').delay(130);
                    $('.product8').delay(135);
            });
        });
        
        function checkVisible( elm ) {

          var viewportHeight = $(window).height();
          scrolltop = $(window).scrollTop();
          currentBottom = $(elm).offset().top;

          console.log(viewportHeight, scrolltop, currentBottom);
          if((currentBottom < (viewportHeight + scrolltop)))
            return true;
      }
        
        $(window).scroll(function(){
            if (checkVisible($('.list li .info'))) {
                  $('.list li .info').each(function(i){
                    $(this).one().animate({'opacity':'1', 'margin-top':'0px'}, 800);
                    
                    $('.product2').delay(100);
                    $('.product3').delay(110);
                    $('.product4').delay(115);
                    $('.product5').delay(120);
                    $('.product6').delay(125);
                    $('.product7').delay(130);
                    $('.product8').delay(135);
                });
             }
        });
});