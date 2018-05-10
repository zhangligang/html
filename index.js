// JavaScript Document
$(function(){
	$('#navbar .row .header').click(function(){
		$(this).parent().toggleClass('active');
	});
	$('#navbar .row .body li').click(function(){
		var icon = $(this).parent().data('icon');
		var title = $(this).parent().data('title');
		var accent = $(this).parent().data('accent');
		var url = $(this).find('a').data('url');
		$('#navbar .row .body li').removeClass('active');
		$(this).addClass('active');
		$('#main h2').html(title);
		$('#main>div.header').find('i').remove();
		$('#main>div.header').prepend('<i class="icon fa ' + icon + '"></i>');
		$('#main').attr('data-accent', accent);
		$('#main').find('iframe').attr('src', url);
	});
	
});