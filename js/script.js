$(function () {
	var nav = $(".nav").outerHeight(true);
	var link = $(".list-link");
	var drop = $(".dropmanu");
	$("body").css("padding-top",nav);
	link.on("click", function (e) {
		e.preventDefault();
		var top = $($(this).attr("href")).offset().top - nav;
		$("html,body").animate({
			scrollTop: top
		},400);
	$(this).parent().addClass('active').siblings().removeClass('active');
	});

	$(window).on("scroll", function () {
		link.each(function (i,e) {
			var top = $($(e).attr("href")).offset().top - nav;
			var windowtop = $(window).scrollTop();
			if (windowtop >= top)
			{
				$(e).parent().addClass('active').siblings().removeClass('active');
			}
		});
	});
	drop.hover(function() {
		$(this).find('.drop-item').slideDown("fast");
	}, function() {
		$(this).find('.drop-item').slideUp("fast");
	});
});