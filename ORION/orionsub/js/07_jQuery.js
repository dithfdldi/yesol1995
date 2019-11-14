$(document).ready(function(){
	
	var header = $('.page-header'),
		headerOffsetTop = header.offset().top; /*top:0에서부터 .page-header가 스크롤 된양*/
		
		console.log(headerOffsetTop);
		
		$(window).scroll(function(){
			
			var scroll = $(this).scrollTop();
			console.log(scroll);
			
			if($(this).scrollTop() > headerOffsetTop){
				header.addClass('sticky');
			} else{
				header.removeClass('sticky');
			}
		});
		
		
		
})