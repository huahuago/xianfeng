define(["text!./find.html","css!./find.css"], function(homePage){
	console.log(homePage)
	return {
		init:function(){
			console.log("haaaaa")
			// if($(".home").chssildren().size()>0) return;
			$(".findA").html(homePage).show().siblings("div").hide();

		}
	}
})