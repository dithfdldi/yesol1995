$(document).ready(function(){
	var $tabAnchor = $('.tabs-nav li a'),	/*클릭할 대상*/
		$tabPanel = $('.tabs-panel');		/*클릭에 반응할 대상*/
		
		$tabAnchor.click(function(e){
			e.preventDefault();			/*a링크기능 멈춤*/
			
			$('.tabs-nav li a').removeClass('active');
			$(this).addClass('active');
			
			$tabPanel.hide();
			
			var $target = $(this).attr('href');
			$($target).show();
		});
		
});