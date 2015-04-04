$(document).ready(function(){
	
	$('.lang-selector a').click(function(){
		var lang=$(this).attr('rel');
		if(lang == 'ru') {
			$(this).fadeOut(100,function(){
				$('.lang-selector a[rel=en]').fadeIn(100);
			});
			$('#container-en').fadeOut(200,function(){
				$('#container-ru').fadeIn(200);
			});			
		} else {
			$(this).fadeOut(100,function(){
				$('.lang-selector a[rel=ru]').fadeIn(100);
			});
			$('#container-ru').fadeOut(200,function(){
				$('#container-en').fadeIn(200);
			});	
		}
		
		return false;
	});
	
});