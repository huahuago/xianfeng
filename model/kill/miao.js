define(["text!./miao.html","css!./miao.css"], function(homePage){
	return {
		init:function(){
			if($(".killA").children().length>0){
				$(".killA").show().siblings("div").hide();
			}else{
				$(".killA").html(homePage).show().siblings("div").hide();
			}
		}

	}
});