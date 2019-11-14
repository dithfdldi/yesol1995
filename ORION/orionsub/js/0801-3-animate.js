$(document).ready(function(){
	$('#typo .inner').click(function(){
		/*선택자.animate({속성:값,속성:값...},시간,이징(ease),콜백함수());
		  콜백함수란, 애니메이션이 끝나고난후에 할일들..
		  지시대명사(this)
		*/
		$(this).animate({opacity:0,fontSize:'0px'},1500,'easeInOutElastic',function(){
			$(this).animate({opacity:1, fontSize:'110px'},500);		
		});
		
		
		
		
	});
})
