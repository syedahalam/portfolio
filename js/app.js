$(document).ready(function () {
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll >= 50) {
			$('.sticky').addClass('stickyadd');
		} else {
			$('.sticky').removeClass('stickyadd');
		}
	});
	var typed = new Typed('.element', {
		strings: ['Syeda Alam', 'a software-engineer', 'a FullStackDeveloper '],
		smartBackspace: true,
		typeSpeed: 100,
		backSpeed: 100,
		loop: true,
		loopCount: Infinity,
		startDelay: 1000,
	});
});
