// JavaScript Document
$(function(){
	
	$('#page .page-header button').click(function(){
		$('#page').toggleClass('page-closed');
	});
	$('#page .page-body section header').click(function(){
		$(this).parent().toggleClass('page-body-closed');
	});
});