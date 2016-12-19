<?php
require_once "jssdk.php";
// appId  和 秘钥
$jssdk = new JSSDK("wx71619156de973afc", "1816136d02ca31a98e3e7071204f3672");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
    <script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/swiper.min.css"> 
    <style class="move"></style>
    <script data-main = "main.js" type="text/javascript" src = "js/require.js"></script>
    <style>
		*{
			margin: 0;
			padding: 0;
			box-sizing:border-box;
		}
		ul,li{
			list-style: none;
		}
		html{
			font-size: 100px;
			height: 100%;
		}
		body{
			font: 16px/1.5 '微软雅黑',Helvetica,Tahoma,Arial,'华文细黑',sans-serif;
			color:#333;
			width:100%;
			height: 100%;
		}
		/*=========footer======*/
		.mod_nav{
			display: flex;
			width:100%;
			height: 0.6rem;
			position: fixed;
			z-index: 150;
			left: 0;
			bottom: 0;
			height: 0.6rem;
			background-color: rgba(246,246,246,.95);		
		}
		.navs_item{
			width: 25%;
			font-size: 0.14rem;
			color: #777;
			text-align: center;
			background: no-repeat center 0.08rem;
			background-size: 30%;
			padding-top: 0.4rem;
			position: relative;

		}
		.navs_item div{
			position: absolute;
			display: none;
			border-radius: 50%;
			left: 50%;
			top:0.05rem;
			margin-left:0.1rem;
		}
		.navs_item_bubble_num{
			background: #f40;
			color: #fff;
			line-height: 0.18rem;
			width:0.18rem;
		}
		.mod_nav a{
			display: inline-block;
			width: 100%;
			height: 100%;
			color: #333;
		}
		
    </style>
</head>
<body>

	<!-- 主体 -->
	<div class = "mainall">
		<div class = "home"></div>
		<div class = "market"></div>
		<div class = "order"></div>
		<div class = "mine"></div>
		<div class = "findA"></div>
		<div class = "killA"></div>	
	</div>

	<!-- footer -->
	<ul class="mod_nav">
        <li class="navs_item navs_item_home" style="background-image: url(images/nav11.png)">
        	<a href="#home">
	        	 <div></div>
	            首页
       		 </a>            
        </li>
        <li class="navs_item navs_item_store" style="background-image: url(images/nav2.png)">
        	<a href="#market">
        		<div></div>
            	闪送超市
        	</a>  
        </li>
        <li class="navs_item navs_item_bubble" style="background-image: url(images/nav3.png)">
        	<a href="#order">
        		 <div class="navs_item_bubble_num">0</div>
            	购物车
        	</a>
        </li>
        <li class="navs_item navs_item_min" style="background-image: url(images/nav4.png)">
        	<a href="#mine">
        		<div></div>
            	我的
        	</a>
        </li>
   </ul>   
</body>
<script type="text/javascript">
    document.documentElement.style.fontSize = innerWidth/4.14 +"px";
    window.onresize =function(){
      document.documentElement.style.fontSize = innerWidth/4.14 + "px";
    }
</script>
<script>

  wx.config({
    debug: true,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
     jsApiList: [
        'checkJsApi',
        'onMenuShareWeibo',
        'onMenuShareQZone',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'translateVoice',
        'startRecord',
        'stopRecord',
        'onVoiceRecordEnd',
        'playVoice',
        'onVoicePlayEnd',
        'pauseVoice',
        'stopVoice',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard'
      ]
  });
  wx.ready(function () {
    // 在这里调用 API

    wx.getLocation({
    success: function (res) {
        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
        var speed = res.speed; // 速度，以米/每秒计
        var accuracy = res.accuracy; // 位置精度
    },
    cancel: function (res) {
        alert('用户拒绝授权获取地理位置');
    }
});


  });
</script>
</html>