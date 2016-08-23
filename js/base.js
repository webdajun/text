
$(function(){	
	//banner 代码
	var oan=$(".slider-page span");
	var ul=$(".slider-sliders");
	var time="";
	var num=0;
	//自动轮播
	time=setInterval(function(){
		left();
	},3000)
	
	//鼠标悬浮事件
	ul.hover(function(){
		clearInterval(time);
	},function(){
		time=setInterval(function(){
			left();
		},3000)
	});	
	//左滚动事件函数
	function left(){
		var first=ul.find("li:first");
		//ul.find("li:animated").stop(true,true);
		//.css("margin-left","-1226px");
		if(ul.find("li:animated").length>0){
			return;						
		}
		num++;
			if(num>=ul.find("li").length){
				num=0;
			}
			oan.removeClass("on");
			oan.eq(num).addClass("on");
			
		first.animate({"margin-left":"-746px"},1000,function(){
			ul.append(ul.find("li:first"));
			first.css("margin-left","0");
		})					
	}
//-------------------- 二维码---------------------------------------------
		$("#codeA1").qrcode({
			render: "table", //table方式
			width: 200, //宽度
			height:200, //高度
			text: "http://www.zanmeishi.com/" //任意内容
		});
		$(".rightFixed .a1").mouseover(function(){
			$("#codeA1").stop();
			$("#codeA1").animate({ left:"-205px" }, 1000 );
		});
		$(".rightFixed .a1").mouseout(function(){
			$("#codeA1").stop();
			/*$(".rightFixed .a1").unbind('animate');*/
			$("#codeA1").animate({ left:"100px" }, 1000 );
		});
	/*var foo=function(){
		$("#codeA1").animate({ left:"-205px" }, 1000 );
	};
	var fooOut=function(){
		$("#codeA1").animate({ left:"100px" }, 1000 );
	};
	$(".rightFixed .a1").bind("mouseover",foo);
	$(".rightFixed .a1").bind("mouseout",fooOut);*/

//------------------首页选项卡--------------------------------------------
		$(".tabbtn").click(function(){
			$(this).addClass("on").siblings().removeClass("on");
			$(".contAA").eq($(this).index()).show().siblings().hide();
		});

//-------------------------------------------------------


		$(function(){
			//一次滚动一屏
			$('#slider').kxbdSuperMarquee({
				distance:746,//移动的距离
				time:4,//多少时间
				navId:'#slider_page',//按钮盒子
				direction:'left'//方向
			});
			
		});
});