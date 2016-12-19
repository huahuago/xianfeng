define(["text!./home.html","css!./home.css"], function(homePage){
		
	return {
		init:function(){
			if($(".home").children().length>0){
				$(".home").show().siblings("div").hide();				
			}else{
				$(".home").html(homePage).show().siblings("div").hide();
			}
			//添加商品动画
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
			
			$(function(){
				$.ajax({
					url:"data/home.json",
					async:"true",
					data:{name:"fenlei"},
					success:function(data){
						getData(data);
					}
				})
			});
			window.item;
			function getData(data){
				$("#hometmp").load("tmp/homeload.html",function(){
				 	var fenlei=baidu.template("homedel",data); 
					 $(".main").html(fenlei);
					 $("#fenlei").remove();	
					 //点击添加商品
					$(".acts_item_goodsListone").on("click",".product_operates_item",function(){
						var img=$(this).closest("li").find(".one_inner_topimg");//原来的图片
						var li=$(this).closest("li");
						select(img,$(".navs_item_bubble"),li,"fly");
						$(".navs_item_bubble_num").css({display:"block"});
						var num=Number($(".navs_item_bubble_num").text())
						$(".navs_item_bubble_num").text(num+1);
						
						item=$(this).attr("itemId");
						console.log($(this).attr("itemId"));
						localStorage[item]=JSON.stringify({
							name:$(this).attr("itemName"),
							price:$(this).attr("itemPrice"),
							pic:$(this).attr("itemPic")
						})
						// console.log(localStorage[item])
						// localStorage.itemName=$(this).attr("itemName");
						// localStorage.itemPrice=$(this).attr("itemPrice");
						// localStorage.itemPic=$(this).attr("itemPic");
						
						// console.log(localStorage.itemName)
						
					});
					//轮播图
					 var mySwiper = new Swiper('.swiper-container', {
		                autoplay: 1000,//可选选项，自动滑动(时间:毫秒)
		                loop : true,//循环
		                pagination : '.swiper-pagination',//分页器
		                autoplayDisableOnInteraction : false,
		                mousewheelControl : true,
		             })
					
				})
			}
		}
	}
})