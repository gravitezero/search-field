$(document).ready(function(){

	$(document).find('.field').each(function(i, field) {
		$(field).find('h2').click(function(){
			console.log('expand');
			$(field).addClass('expanded');
		});
		
		$(field).find('.close').click(function(){
			console.log('collapse');
			$(field).removeClass('expanded');
		});
	});

})