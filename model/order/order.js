define(["text!./order.html","css!./order.css"], function(homePage){
    return {
        init:function(){
           if($(".order").children().length>0){
           		$(".order").show().siblings("div").hide();
           }else{
           		$(".order").html(homePage).show().siblings("div").hide();
           }
				

        if(localStorage[item]){
          console.log(JSON.parse(localStorage[item]))
          var dataGet=JSON.parse(localStorage[item]);
            // var data={
            //       name:localStorage.itemName,
            //       price:localStorage.itemPrice,
            //       pic:localStorage.itemPic    
            //     }
       			$(".ordertmp").load("tmp/orderload.html",function(){
       				var orderItem=baidu.template("ordertmp",dataGet);  
    				 $(".list_content").append(orderItem);
    				 $("#ordertmp").remove();
    				 
       			})	
     		}
          
      }

    }
});

