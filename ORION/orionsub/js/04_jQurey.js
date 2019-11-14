$(document).ready(function(){
	var $duration = 300,
		$image = $('#images p');
		
		/*1.마우스를 올리면 캡션(strong)과 span이 보이도록 animate를 구현
		  -> $image.mouseover(function(){실행문});
		  -> find('요소')=하위요소를 찾을때  find()사용
		  ->filter('요소') = 요소들 중에 특정된 요소를 찾을때 filter()사용
			ex)$images p .child  {} ->$('#images p').find('.child')
			   $images p.child   {} ->$('#images p').filter('child')
		*/
		$image.mouseover(function(){
			$(this).find('strong,span').animate({opacity:1},$duration);
			
			
			
		});
		/*2.마우스가 out되면 원상복귀*/
		/*mouseover / mouseleave*/
		/*mouseenter/ mouseout*/

		/*$image.mouseleave(function(){
			$(this).find('strong,span').animate({opacity:0},$duration);
		});*/
		
		$image.on('mouseout',function(){
			$(this).find('strong,span').stop().animate({opacity:0},$duration);
		});
		
		/*3.두번째 이미지 동작*/
		
			$image.filter(':nth-child(2)').mouseover(function(){
				$(this).find('strong').stop().animate({opacity:1,left:0},$duration);
				$(this).find('span').stop().animate({opacity:1},$duration);
			
	});
			$image.filter(':nth-child(2)').mouseout(function(){
				$(this).find('strong').stop().animate({opacity:0,left:'-300px'},$duration);
				$(this).find('span').stop().animate({opacity:0},$duration);
	});
	
		/*네번째 이미지 동작*/
			$image.filter(':nth-child(3)').mouseover(function(){
				$(this).find('strong').stop().animate({opacity:1,bottom:0},$duration);
				$(this).find('span').stop().animate({opacity:1},$duration);
			
	});
			$image.filter(':nth-child(3)').mouseout(function(){
				$(this).find('strong').stop().animate({opacity:0,bottom:'-100px'},$duration);
				$(this).find('span').stop().animate({opacity:0},$duration);
	});
	
});










