define(["text!./mine.html","css!./mine.css"], function(homePage){
	return {
		init:function(){
			// if($(".home").chssildren().size()>0) return;
			$(".mine").html(homePage).show().siblings("div").hide();
		}

	}
});