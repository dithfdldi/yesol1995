$(document).ready(function(){
	var $aside = $('aside'),
		$button = $aside.find('button'),
		$duration = 300;
		
	/*$button.click(function(){
	$aside.stop().animate({left:'0px'},$duration);
	});*/
	
	/*$button.click(function(){
	$aside.stop().animate({left:'-300px'},$duration);
	}); ->같은요소에서 같은 이벤트는 2번이상 발생x
	toggleClass('클래스'); 사용 -> addClass('클래스')와 removeClass('클래스')를	
	상황에 맞춰 번갈아가며 수행하는 메소드
	-hasClass('클래스') -> 결과값이 true/false로 반환,if()문에만 사용 가능
	*/
	$button.click(function(){
	$aside.toggleClass('active');
	
	if($aside.hasClass('active')){
		$aside.stop().animate({left:'-70px'},$duration,'easeOutBack');
		$button.find('img').attr('src','image/right_btn.png');
	} else{
		$aside.stop().animate({left:'-300px'},$duration,'easeOutBack');
		$button.find('img').attr('src','image/left_btn.png');
	}
	});
})