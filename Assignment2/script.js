$(document).ready(function () {
	$('h2').fadeIn(2000);
	$('h1').delay(1500).fadeIn(2000, function() {
		$('#design, #studio, #about').show();
		$('footer').show()
	});

	$('#menu1').click(function() {

		$('#list1 li').addClass('dot');
		$('#list1 li:eq(0)').addClass('activeDot');

		$('#v1 > div').addClass('project');
		$('#v1 div:eq(0)').addClass('activeProj');

		$('#designGallery, #tracking1').show()

	});
	
	$('#menu2').click(function() {

		$('#list2 li').addClass('dot');
		$('#list2 li:eq(0)').addClass('activeDot');

		$('#v2 > div').addClass('project');
		$('#v2 div:eq(0)').addClass('activeProj');

		$('#studioGallery, #tracking2').show();

	})

	$('.x').click(function () {
		$('#designGallery, #studioGallery').hide()

		$('li').removeClass('dot activeDot');
		$('.viewer div').removeClass('project activeProj');
	})


	$('.arrowRight').click(function () {

		var actProj = $('.activeProj');
		var nextProj = actProj.next('.project');

		if (nextProj.length == 0) {
			nextProj = $('.project').first();
		}

		actProj.fadeOut(0).removeClass('activeProj');
		nextProj.fadeIn(0).addClass('activeProj');

		var actDot = $('.activeDot');
		var nextDot = actDot.next();

		if (nextDot.length == 0) {
			nextDot = $('.dot').first();
		}

		actDot.removeClass('activeDot');
		nextDot.addClass('activeDot');

	})


	$('.arrowLeft').click(function() {

		var actProj = $('.activeProj');
		var prevProj = actProj.prev('.project');

		if (prevProj.length == 0) {
			prevProj = $('.project').last();
		}

		actProj.fadeOut(0).removeClass('activeProj');
		prevProj.fadeIn(0).addClass('activeProj');

		var actDot = $('.activeDot');
		var	prevDot = actDot.prev();

		if (prevDot.length == 0) {
			prevDot = $('.dot').last();
		}

		actDot.removeClass('activeDot');
		prevDot.addClass('activeDot');

	})


	$('#design, #studio, #about').click(function() {
		event.preventDefault();
	})

});