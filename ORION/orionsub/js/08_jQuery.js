$(document).ready(function(){
	var $headerClone = $('.page-header').contents().clone(),
		$headerCloneContainer = $('<div class="page-header-clone"></div>'),
		$threshold = $('.page-header').offset().top + $('.page-header').outerHeight();
		
		console.log($threshold);
		
		/*A.append(B)->A요소 안에 새로운 요소인 B추가
		*B요소가 문서내에 있으면 A요소 뒤에 추가
		*/
		$headerCloneContainer.append($headerClone);
		
		/*위 코드를 body안에 삽입*/
		$headerCloneContainer.appendTo('body');
		
		$(window).scroll(function(){
			if($(this).scrollTop() > $threshold) {
				$headerCloneContainer.addClass('visible');
			}else{
				$headerCloneContainer.removeClass('visible');
			}
		});
		
		
})