define(["backbone"], function(Backbone){
	var Router = Backbone.Router.extend({
		routes:{
			// href="#home" : home回调函数
			home: "home",
			market: "market",
			order: "order",
			mine: "mine",
			find :"find",
			back : "home",
			kill:"kill"
		},
		home: function(){
			console.log("backbone")
			require(["./model/home/home.js"],function(home){
				home.init();
				$(".navs_item").show();
			});
		},
		market: function(){
			require(["./model/market/market.js"],function(market){
				market.init();
			});
		},
		order: function(){
			require(["./model/order/order.js"],function(order){
				order.init();
			});
		},
		mine: function(){
			require(["./model/mine/mine.js"],function(mine){
				console.log(mine)
				mine.init();
			});
		},
		find:function(){
				console.log("ha")
			require(["./model/find/find.js"],function(find){
				find.init();
				$(".navs_item").hide();
			})
		},
		kill:function(){
			require(["./model/kill/miao.js"],function(kill){
				kill.init();
				$(".navs_item").hide();
			})
		}

	});
	//
	return new Router();
});