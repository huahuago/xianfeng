define(["text!./market.html","css!./market.css"], function(homePage){

	return {
		init:function(){
			if($(".market").children().length>0){
				$(".market").show().siblings("div").hide();
			} else{
				$(".market").html(homePage).show().siblings("div").hide();
				$.ajax({
					url:"data/market.json",
					async:"true",
					data:{"name":"market"},
					success:function(data){
						// 加载整个模板
						$(".marketmp").load("tmp/marketload.html",function(){
							var market=baidu.template("marketdel",data);
							$(".mainlist").html(market);
							$("#marketdel").remove();
							// 左面侧边栏第一个默认边框样式有黄边
							$(".categories_item:first").addClass("categories_color");
							add();
							//点击左侧边栏切换右侧内容
							$(".categories").on("click","li",function(){
								var con=$(this).attr("change");
								// 点击侧边栏请求新的模板
								$(".marketmp").load("tmp/marketload.html",function(){
									var marketChange=baidu.template("change",{newdata:data.data.products[con],newId:con});
									//去重，若存在，则不加载
									if($("."+con).length>0){
										$("."+con).show().siblings().hide();
									}else{
										$(".productlist").append(marketChange);
										$("."+con).siblings().hide();
									}	
									$("#change").remove();
									add();
									
								})
								//侧边栏边框颜色位置变换 
								$(this).addClass("categories_color").siblings().removeClass("categories_color");
							});
							// 点击全部分类/部分分类出现对应的框
							$(".filter_titles").on("click",".filter_news",function(){
								$($(".new .choose")[$(this).index()]).show().siblings().hide();
							});
						
							//增加商品
							function add(){
								$(".market_product_operates").off().on("click","span span",function(e){				
								var numCar=Number($(".navs_item_bubble_num").text());
								if(numCar>0){
									$(".navs_item_bubble_num").css({
										display:"block"
									});
								}else{
									$(".navs_item_bubble_num").css({
										display:"none"
									});
								}
								
								switch(e.target.className){
									case "add_inner":
										$(this).closest(".add").siblings().show();
										console.log($(this).closest("div").find(".num").text())
										var num=Number($(this).closest("div").find(".num").text());
										$(this).closest("div").find(".num").text(num+1);
										$(".navs_item_bubble_num").text(numCar+1);
										break;
									case "jq_inner":
										var num=Number($(this).closest("div").find(".num").text());
										$(".navs_item_bubble_num").text(numCar-1);
										if(num>1){
											$(this).closest("div").find(".num").text(num-1);
										}else{									
											$(this).closest(".jq").hide();
											$(this).closest("div").find(".num").text(0);
//											$(".navs_item_bubble_num").css({display:"none"});
										};
										break;
									default:
										break;
								}
							})

							}
							
							
							
							


						})

					}
				})
			}
		}
	}
});