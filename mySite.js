
$(document).ready(function(){

	$(".nav a").on("click", function(e){
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing');
	});

	
	$(window).scroll(function() {

		var position = $(this).scrollTop() + 60;

		$('section').each(function() {
			var target = $(this).offset().top;
			var id = $(this).attr('id');
			
			if (position >= target) {
				$('.nav > li').removeClass('active');
				$('.nav > li > a[href=#' + id + ']').parent().addClass('active');
			}

		});
	});

});


