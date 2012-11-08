$(document).ready(function(){

	$(document).find('.field').each(function(i, field) {

		if (i === 0) {
			var input = $(field).find('input');
			$(field).find('.close').click(function() {
				$(input).val('');
			})
		} else {
			$(field).find('h2').click(function(){
				console.log('expand');
				$(field).addClass('expanded');
			});
			
			$(field).find('.close').click(function(){
				console.log('collapse');
				$(field).removeClass('expanded');
			});
		}
	});
})