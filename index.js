$(function(){
//购物车函数
function select(ele,carIcon,container,csstyle){
	// 原图片ele
	// 克隆出来的图片
	var newImg=ele.clone();
	// container 克隆出来图片要放的父元素
	container.append(newImg);
	var left=ele.offset().left-$("body").scrollLeft(),
		top=ele.offset().top-$("body").scrollTop(),
		// 购物车图标
		cleft=carIcon.offset().left-$("body").scrollLeft()+10,
		ctop=carIcon.offset().top-$("body").scrollTop()+10;
		//添加fly 
	newImg.addClass(csstyle);
	$(".move").html("@keyframes move{0%{width:100px;height:100px;left:"+left
		+"px;top:"+top+"px;} 10%{width:80px;height:80px;opacity:0.8;left:"+(left-15)+"px;top:"+
		(top-15)+"px;} 100%{width:0px;height:0px;opacity:0;left:"+(cleft+10)+"px;top:"+(ctop+10)+"px}}");
	newImg.css({
		top:top,
		left:left,
		animation:"move 1s",
		animationTimingFunction:"linear",
		zIndex:100
	});
	setTimeout(function(){
		newImg.remove();
	},1000);
}

var n=1;
$(".acts_item_goodsListone").on("click",".product_operates_item",function(){
	var img=$(this).closest("li").find(".one_inner_topimg");//原来的图片
	var li=$(this).closest("li");
	select(img,$(".navs_item_bubble"),li,"fly");
	$(".navs_item_bubble_num").css({
		display:"block"
	})
	$(".navs_item_bubble_num").text(n++);
});

// 
$.ajax({
	url:"data/home.json",
	async:"true",
	data:{name:"fenlei"},
	success:function(data){
		console.log(data);
		console.log(data.data.act_info[1].act_rows[0].activity.name)
		 $("#tmpcon").load("tmp/home.html",function(){
		 	var fenlei=baidu.template("fenlei",data);	 	
		 	console.log(data)
		 	console.log(fenlei)
			 $(".main_icon").html(fenlei);
			 $("#fenlei").remove();	
		 });
	}
})


})