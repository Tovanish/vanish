$(document).ready(function(){ 
	$('.c-child').mouseenter(function(){
		$(this).css({border:'1px  solid blue'}).siblings().css({border:'1px  solid #fff'});
	})
	$('.content-top>li').mouseenter(function(){
		$(this).css({Color:'green'}).siblings().css({Color:'blue'});
	})
  $('.car-sm-box>div>img').mouseenter(function(){
		$(this).css({border:'1px solid red'})
		var url = $(this).attr('src')
		$(this).parent().parent().prev().children('img').attr('src',url)
	})
})