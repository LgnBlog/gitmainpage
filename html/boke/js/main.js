;$(function(){
	'use strict';

	 var sidebar = $('#sidebar'),
	      mask = $('.mask'),
	      backButton = $('.back_to_top');
	     sidebar_trigger = $('#sidebar_trigger');
	 function showSidebar()
	 {
	 	mask.fadeIn();
	    sidebar.css('right',0);/*或者动画 sidebar.animate({'right':0})*/

	 }


	 function hideSidebar(){
	 	mask.fadeOut();
	 	sidebar.css('right',-sidebar.width())
	 }
	 sidebar_trigger.on('click',showSidebar)
	 mask.on('click',hideSidebar)
	 backButton.on('click', function() {
	 		 /*console.log('nihao');*/
	 		 $('html,body').animate({scrollTop:0},900)
	 })

      $(window).on('scroll',function(){
            if($(window).scrollTop() > $(window).height())
                backButton.fadeIn();
            else
                backButton.fadeOut();
        })
        $(window).trigger('scroll');

})
//
