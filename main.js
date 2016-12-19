//可配置文件
require.config({
	paths:{
		"jquery":"./js/jquery-3.1.1",
		"backbone":"./js/backbone",
		"underscore":"./js/underscore",
		"text":"./js/text",
		"css":"./js/css",
		"baidutmp":"./js/baiduTemplate",
		"swiper":"./js/swiper.min"	
	}

})

require(['jquery',"backbone","baidutmp",'rot.js',"swiper"],function($,Backbone){
	Backbone.history.start();

	// 点击切换页脚时换背景图
	$(".mod_nav").on("click","li",function(){
		var arr1=["url(images/nav1.png)","url(images/nav2.png)","url(images/nav3.png)","url(images/nav4.png)"];
		var arr2=["url(images/nav11.png)","url(images/nav22.png)","url(images/nav33.png)","url(images/nav44.png)"];
		$(this).css("background-image",arr2[$(this).index()])
		$(this).siblings().each(function(index,ele){
			$(this).css("background-image",arr1[$(this).index()]);
		})
	})

	//刷新回到首页
	var wordspace = new Backbone.Router();
    wordspace.navigate('home',{trigger: true});

	
	
});




