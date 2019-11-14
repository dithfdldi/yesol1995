$(document).ready(function(){
	var$duration = 300.
	   $button = $('#button2 button');

		/*
			javascript에서 특정 태그를 찾는 구문*/
			
			var $buttons= document.getElementsByTagName('button');
			
			/*$buttons[0].style.top = '-40px';
			$buttons[1].style.top = '0';
			$buttons[2].style.top = '40px';
			$buttons[3].style.top = '80px';
			
			java에서 요소마다 각각할일(for~)
			*/
		/*for(var i=0;i<$buttons.length;i++){
			console.log('test');
			$buttons[i].style.top = (i*40)-40 + 'px';
		}
			
		/*
			jquery에서 특정 태그를 찾는 구문
			javascript의 for문 대신에 jquery에서는 each~문 이용
		*/
		
	$button.each(function(idx){
		console.log(idx);
		var newTop = idx * 40 - 40 + 'px';
		$(this).css({top:newTop});
	})
	/*버튼요소에 마우스 올리면 배경색'yellow',글자색'black'
								이미지는'~_bl.png'가 보이게
	$('요소').css().css().css();
								*/
	.mouseover(function(){
	$(this).css({backgroundColor:'yellow',color:'#000'});
	$(this).find('img:first-child').stop().animate({opacity:0});
	$(this).find('img:nth-child(2)').stop().animate({opacity:1});
	
	})
	.mouseout(function(){
	$(this).css({backgroundColor:'#fff',color:'#01b169'});
	$(this).find('img:first-child').stop().animate({opacity:1});	
	$(this).find('img:nth-child(2)').stop().animate({opacity:0});
	});
	

})







