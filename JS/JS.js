$( document ).ready(function(){console.log( "Ready!" );
  var div = $("#footer");
  var pos = div.position();
  $(window).scroll(function () {
   var windowpos = $(window).scrollTop();
   if (windowpos >= (pos.top - 100)) {
	 div.removeClass("bfrScroll");
     div.addClass("afrScroll");
   }
   else {
     div.removeClass("afrScroll");
   }
 });
 
});
