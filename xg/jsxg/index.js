$(function(){
	// 轮播
	playbox('#playbox');
	playbox('#playbox2');
	playbox('.slider1');
	playbox('.slider2');
	playbox('.slider3');
	playbox('.slider4');
	playbox('.slider5');
	playbox('.slider6');
	playbox('.slider7');
	playbox('.slider8');
	playbox('.slider9');
	playbox('.slider10');
	playbox('.slider11');
	playbox('.slider12');
	playbox('.slider13');
	
	$('.gg button').click(function(){
		$('.gg').hide();
	})


//话费等
	$('.jdnew .tn li').mouseover(function(){
		$('.jdnew .tn li').removeClass('cur');
		$(this).addClass('cur');
		var ind=$(this).index()+1;
		// console.log(ind);
		$('.fourit .hf').hide();
		$('.fourit .f-'+ind+'').show();
	});

	$('.f-1 li').mouseover(function(){
		$('.f-1 li').removeClass('licur');
		$(this).addClass('licur');
		var ind=$(this).index()+1;
		$('.hfss .com').hide();
		$('.hfss .com:nth-child('+ind+')').show();
	});
	$('.f-2 li').mouseover(function(){
		$('.f-2 li').removeClass('licur');
		$(this).addClass('licur');
		var ind=$(this).index()+1;
		$('.air .com').hide();
		$('.air .com:nth-child('+ind+')').show();
	});
	$('.f-3 li').mouseover(function(){
		$('.f-3 li').removeClass('licur');
		$(this).addClass('licur');
		var ind=$(this).index()+1;
		$('.m-it .movies').hide();
		$('.m-it .movies:nth-child('+ind+')').show();
	});
		$('.f-4 li').mouseover(function(){
		$('.f-4 li').removeClass('licur');
		$(this).addClass('licur');
		var ind=$(this).index()+1;
		$('.g-div .cz-it').hide();
		$('.g-div .cz-it:nth-child('+ind+')').show();
	});




//楼层内容切换
	function floor(fl){
		$(fl+' .top-bar li').mouseover(function(){
			$(fl+' .top-bar li').removeClass('now');
			$(this).addClass('now');
			var i=$(this).index()+1;
			console.log(i);

			$(fl+' .main .cont').hide();
			$(fl+' .main .cont2').hide();
			$(fl+' .main .conts').hide();
			$(fl+' .main .contss').hide();
			$(fl+' .main .conts'+i).show();
			$(fl+' .main .contss'+i).show();
		});
	};
	floor('.floor1');
	floor('.floor2');




// 左侧楼层
	$('.louceng li').hover(function(){
		$(this).children('.ceng').hide();
		$(this).children('.c-name').css({display:'block'}).addClass('hoverfloor');
	},function(){
		$(this).children('.ceng').show();
		$(this).children('.c-name').css({display:'none'}).removeClass('hoverfloor');
	});

	$(document).scroll(function(){
		var sss=$(window).scrollTop();
		// console.log(sss);
		if (sss<1500) {
			$('.floor1 h2 i').css({backgroundPositionY:'-35px'});
			$('.louceng').css({display:'none'});
		}else if (sss>9600) {
			$('.louceng').css({display:'none'});
		}else{
			$('.louceng').css({display:'block'});
		}

		if (sss>=1500&&sss<=2000) {
			$('.floor1 .top h2 i').animate({backgroundPositionY:'0px'},500);
			$('.louceng li .ceng').show();
			$('.louceng li .c-name').css({display:'none'});
			$('.louceng li:nth-child(1) .ceng').hide();
			$('.louceng li:nth-child(1) .c-name').css({display:'block'});
		}else if (sss<=2900) {
			// $('.floors .top h2 i').css({backgroundPositionY:'-35px'});
			$('.floor2 .top h2 i').animate({backgroundPositionY:'0px'},500);
			$('.louceng li .ceng').show();
			$('.louceng li .c-name').css({display:'none'});
			$('.louceng li:nth-child(2) .ceng').hide();
			$('.louceng li:nth-child(2) .c-name').css({display:'block'});

		}else if (sss<=3600) {
			// $('.floors .top h2 i').css({backgroundPositionY:'-35px'});
			$('.floor3 .top h2 i').animate({backgroundPositionY:'0px'},500);
			$('.louceng li .ceng').show();
			$('.louceng li .c-name').css({display:'none'});
			$('.louceng li:nth-child(3) .ceng').hide();
			$('.louceng li:nth-child(3) .c-name').css({display:'block'});

		}else if (sss<=4200) {
			// $('.floors .top h2 i').css({backgroundPositionY:'-35px'});
			$('.floor4 .top h2 i').animate({backgroundPositionY:'0px'},500);
			$('.louceng li .ceng').show();
			$('.louceng li .c-name').css({display:'none'});
			$('.louceng li:nth-child(4) .ceng').hide();
			$('.louceng li:nth-child(4) .c-name').css({display:'block'});

		}else if (sss<=4900) {
			// $('.floors .top h2 i').css({backgroundPositionY:'-35px'});
			$('.floor5 .top h2 i').animate({backgroundPositionY:'0px'},500);
			$('.louceng li .ceng').show();
			$('.louceng li .c-name').css({display:'none'});
			$('.louceng li:nth-child(5) .ceng').hide();
			$('.louceng li:nth-child(5) .c-name').css({display:'block'});

		}else if (sss<=5500) {
			// $('.floors .top h2 i').css({backgroundPositionY:'-35px'});
			$('.floor6 .top h2 i').animate({backgroundPositionY:'0px'},500);
			$('.louceng li .ceng').show();
			$('.louceng li .c-name').css({display:'none'});
			$('.louceng li:nth-child(6) .ceng').hide();
			$('.louceng li:nth-child(6) .c-name').css({display:'block'});

		}else if (sss<=6100) {
			// $('.floors .top h2 i').css({backgroundPositionY:'-35px'});
			$('.floor7 .top h2 i').animate({backgroundPositionY:'0px'},500);
			$('.louceng li .ceng').show();
			$('.louceng li .c-name').css({display:'none'});
			$('.louceng li:nth-child(7) .ceng').hide();
			$('.louceng li:nth-child(7) .c-name').css({display:'block'});

		}else if (sss<=6800) {
			// $('.floors .top h2 i').css({backgroundPositionY:'-35px'});
			$('.floor8 .top h2 i').animate({backgroundPositionY:'0px'},500);
			$('.louceng li .ceng').show();
			$('.louceng li .c-name').css({display:'none'});
			$('.louceng li:nth-child(8) .ceng').hide();
			$('.louceng li:nth-child(8) .c-name').css({display:'block'});

		}else if (sss<=7600) {
			// $('.floors .top h2 i').css({backgroundPositionY:'-35px'});
			$('.floor9 .top h2 i').animate({backgroundPositionY:'0px'},500);
			$('.louceng li .ceng').show();
			$('.louceng li .c-name').css({display:'none'});
			$('.louceng li:nth-child(9) .ceng').hide();
			$('.louceng li:nth-child(9) .c-name').css({display:'block'});

		}else if (sss<=8200) {
			// $('.floors .top h2 i').css({backgroundPositionY:'-35px'});
			$('.floor10 .top h2 i').animate({backgroundPositionY:'0px'},500);
			$('.louceng li .ceng').show();
			$('.louceng li .c-name').css({display:'none'});
			$('.louceng li:nth-child(10) .ceng').hide();
			$('.louceng li:nth-child(10) .c-name').css({display:'block'});

		}else if (sss<=8800) {
			// $('.floors .top h2 i').css({backgroundPositionY:'-35px'});
			$('.floor11 .top h2 i').animate({backgroundPositionY:'0px'},500);
			$('.louceng li .ceng').show();
			$('.louceng li .c-name').css({display:'none'});
			$('.louceng li:nth-child(11) .ceng').hide();
			$('.louceng li:nth-child(11) .c-name').css({display:'block'});

		}else if (sss<=9400) {
			// $('.floors .top h2 i').css({backgroundPositionY:'-35px'});
			$('.floor12 .top h2 i').animate({backgroundPositionY:'0px'},500);
			$('.louceng li .ceng').show();
			$('.louceng li .c-name').css({display:'none'});
			$('.louceng li:nth-child(12) .ceng').hide();
			$('.louceng li:nth-child(12) .c-name').css({display:'block'});

		}else{
			$('.floors .top h2 i').css({backgroundPositionY:'-35px'});
			$('.louceng li .ceng').show();
			$('.louceng li .c-name').css({display:'none'});
		}


		// if (sss>=1600&&sss<=1900) {
		// 	$('.floor1 .top h2 i').animate({backgroundPositionY:'0px'},500);
		// 	$('.louceng li:nth-child(1) .ceng').hide();
		// 	$('.louceng li:nth-child(1) .c-name').css({display:'block'});
		// }else{
		// 	$('.floor1 h2 i').css({backgroundPositionY:'-35px'});
		// 	$('.louceng li:nth-child(1) .ceng').show();
		// 	$('.louceng li:nth-child(1) .c-name').css({display:'none'});
		// }
		// if (sss>=2300&&sss<=2600) {
		// 	$('.floor2 .top h2 i').animate({backgroundPositionY:'0px'},500);
		// 	$('.louceng li:nth-child(2) .ceng').hide();
		// 	$('.louceng li:nth-child(2) .c-name').css({display:'block'});
		// }else{
		// 	$('.floor2 h2 i').css({backgroundPositionY:'-35px'});
		// 	$('.louceng li:nth-child(2) .ceng').show();
		// 	$('.louceng li:nth-child(2) .c-name').css({display:'none'});
		// }
		// if (sss>=2900&&sss<=3200) {
		// 	$('.floor3 .top h2 i').animate({backgroundPositionY:'0px'},500);
		// 	$('.louceng li:nth-child(3) .ceng').hide();
		// 	$('.louceng li:nth-child(3) .c-name').css({display:'block'});
		// }else{
		// 	$('.floor3 h2 i').css({backgroundPositionY:'-35px'});
		// 	$('.louceng li:nth-child(3) .ceng').show();
		// 	$('.louceng li:nth-child(3) .c-name').css({display:'none'});
		// }
		// if (sss>=3400&&sss<=3700) {
		// 	$('.floor4 .top h2 i').animate({backgroundPositionY:'0px'},500);
		// 	$('.louceng li:nth-child(4) .ceng').hide();
		// 	$('.louceng li:nth-child(4) .c-name').css({display:'block'});
		// }else{
		// 	$('.floor4 h2 i').css({backgroundPositionY:'-35px'});
		// 	$('.louceng li:nth-child(4) .ceng').show();
		// 	$('.louceng li:nth-child(4) .c-name').css({display:'none'});
		// }
		// if (sss>=4300&&sss<=4500) {
		// 	$('.floor5 .top h2 i').animate({backgroundPositionY:'0px'},500);
		// 	$('.louceng li:nth-child(5) .ceng').hide();
		// 	$('.louceng li:nth-child(5) .c-name').css({display:'block'});
		// }else{
		// 	$('.floor5 h2 i').css({backgroundPositionY:'-35px'});
		// 	$('.louceng li:nth-child(5) .ceng').show();
		// 	$('.louceng li:nth-child(5) .c-name').css({display:'none'});
		// }
		// if (sss>=5000&&sss<=5300) {
		// 	$('.floor6 .top h2 i').animate({backgroundPositionY:'0px'},500);
		// 	$('.louceng li:nth-child(6) .ceng').hide();
		// 	$('.louceng li:nth-child(6) .c-name').css({display:'block'});
		// }else{
		// 	$('.floor6 h2 i').css({backgroundPositionY:'-35px'});
		// 	$('.louceng li:nth-child(6) .ceng').show();
		// 	$('.louceng li:nth-child(6) .c-name').css({display:'none'});
		// }
		// if (sss>=5600&&sss<=5800) {
		// 	$('.floor7 .top h2 i').animate({backgroundPositionY:'0px'},500);
		// 	$('.louceng li:nth-child(7) .ceng').hide();
		// 	$('.louceng li:nth-child(7) .c-name').css({display:'block'});
		// }else{
		// 	$('.floor7 h2 i').css({backgroundPositionY:'-35px'});
		// 	$('.louceng li:nth-child(7) .ceng').show();
		// 	$('.louceng li:nth-child(7) .c-name').css({display:'none'});
		// }
		// if (sss>=6300&&sss<=6600) {
		// 	$('.floor8 .top h2 i').animate({backgroundPositionY:'0px'},500);
		// 	$('.louceng li:nth-child(8) .ceng').hide();
		// 	$('.louceng li:nth-child(8) .c-name').css({display:'block'});
		// }else{
		// 	$('.floor8 h2 i').css({backgroundPositionY:'-35px'});
		// 	$('.louceng li:nth-child(8) .ceng').show();
		// 	$('.louceng li:nth-child(8) .c-name').css({display:'none'});
		// }
		// if (sss>=6900&&sss<=7200) {
		// 	$('.floor9 .top h2 i').animate({backgroundPositionY:'0px'},500);
		// 	$('.louceng li:nth-child(9) .ceng').hide();
		// 	$('.louceng li:nth-child(9) .c-name').css({display:'block'});
		// }else{
		// 	$('.floor9 h2 i').css({backgroundPositionY:'-35px'});
		// 	$('.louceng li:nth-child(9) .ceng').show();
		// 	$('.louceng li:nth-child(9) .c-name').css({display:'none'});
		// }
		// if (sss>=7500&&sss<=7800) {
		// 	$('.floor10 .top h2 i').animate({backgroundPositionY:'0px'},500);
		// 	$('.louceng li:nth-child(10) .ceng').hide();
		// 	$('.louceng li:nth-child(10) .c-name').css({display:'block'});
		// }else{
		// 	$('.floor10 h2 i').css({backgroundPositionY:'-35px'});
		// 	$('.louceng li:nth-child(10) .ceng').show();
		// 	$('.louceng li:nth-child(10) .c-name').css({display:'none'});
		// }
		// if (sss>=8200&&sss<=8500) {
		// 	$('.floor11 .top h2 i').animate({backgroundPositionY:'0px'},500);
		// 	$('.louceng li:nth-child(11) .ceng').hide();
		// 	$('.louceng li:nth-child(11) .c-name').css({display:'block'});
		// }else{
		// 	$('.floor11 h2 i').css({backgroundPositionY:'-35px'});
		// 	$('.louceng li:nth-child(11) .ceng').show();
		// 	$('.louceng li:nth-child(11) .c-name').css({display:'none'});
		// }
		// if (sss>=8800&&sss<=9200) {
		// 	$('.floor12 .top h2 i').animate({backgroundPositionY:'0px'},500);
		// 	$('.louceng li:nth-child(12) .ceng').hide();
		// 	$('.louceng li:nth-child(12) .c-name').css({display:'block'});
		// }else{
		// 	$('.floor12 h2 i').css({backgroundPositionY:'-35px'});
		// 	$('.louceng li:nth-child(12) .ceng').show();
		// 	$('.louceng li:nth-child(12) .c-name').css({display:'none'});
		// }
	});

// 右侧动画
	$('.sidebar li').hover(function(){
		$(this).addClass('cur');
		$(this).children('span').stop(true,false).animate({width:'62px'},'fast');
	},function(){
		$(this).removeClass('cur');
		$(this).children('span').stop(true,false).animate({width:'1px'},'fast');
	});
	$('.totop li').hover(function(){
		$(this).addClass('cur');
		$(this).children('span').stop(true,false).animate({width:'50px'},'fast');
	},function(){
		$(this).removeClass('cur');
		$(this).children('span').stop(true,false).animate({width:'1px'},'fast');
	});

	$('.rightbar .totop .tt').click(function(){
		// var st;
		// if ($(window).scrollTop()!=0) {
		// 	st=setInterval(function(){
		// 		var t=$(window).scrollTop()-100;
		// 		$(window).scrollTop(t);
		// 	},10);
		// }else{
		// 	clearInterval(st);
		// }
		// var t=$(window).scrollTop();
		
		// for(t;t>=0;t-=100){
		// 	st=setInterval((function(t) {
		// 		$(window).scrollTop(t);
		// 		console.log(t);
		// 	})(t), 100);
			
		// }
		
		
		// $(window).scrollTop(0);
		$('html,body').animate({scrollTop: '0px'}, 800);
	});



	function playbox(cont){
		var oDiv = $(cont);
	    var oPre = $(cont+' .pre');
	    var oNext =$(cont+' .next');
	    var oUlBig =$(cont+' .oUlplay');
	    var aBigLi =$(cont+' .oUlplay li');
	    var oDivSmall =$(cont+' .smalltitle');
	    var aLiSmall = $(cont+' .smalltitle li');
	    var now = 0;
	    aLiSmall.each(function(e){
	     	$(this).click(function(){
	     		now=e;
		     	tab();
	    	});
	    });
	    oPre.click(function(){
	    	now--
	        if (now < 0) {
	            now = aBigLi.length-1;
	        }
	        tab();
	    });
	    oNext.click(function(){
	    	now++
	        if (now == aBigLi.length) {
	            now = 0;
	        }
	        tab();
	    });
	    var timer = setInterval(function(){
	    	now++;
	    	if(now<4){
	    		tab();
	    	}else{
	    		now=0;
	    		tab();
	    	}
	    }, 4000); //滚动间隔时间设置
	    oDiv.mouseover(function() {
	        clearInterval(timer);
	    });
	    oDiv.mouseout(function() {
	        timer = setInterval(function(){
	    	now++;
	    	if(now<4){
	    		tab();
	    	}else{
	    		now=0;
	    		tab();
	    	}
	    }, 4000); ; //滚动间隔时间设置
	    });
	    function tab(){
	    	aLiSmall.each(function(){
	     		aLiSmall.removeClass();
	     	});
	     	$(cont+' .smalltitle li:eq('+now+')').addClass('thistitle');
	     	startMove(oUlBig, 'left', -(now * aBigLi[0].offsetWidth));
	    }
	    function startMove(obj, att, add) {
		    clearInterval(obj.timer)
		    obj.timer = setInterval(function() {
		        var cutt = Math.round(parseFloat(obj.css(att)));
		        // alert(cutt);
		        var speed = (add - cutt) / 8;
		        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		        if (cutt == add) {
		            clearInterval(obj.timer)
		        } else {
		             obj.css(att,cutt+speed+'px');
		        }
		    }, 30)
		}
	}
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
           if (this.readyState == 4 && this.status == 200) {
               var myArr = JSON.parse(this.responseText);
	       console.log(typeof  myArr);
               document.getElementById("item1").innerHTML = myArr.items1[0].items11;    
	       document.getElementById("item2").innerHTML = myArr.items2[0].items11;
	       document.getElementById("item3").innerHTML = myArr.items2[0].items12;
	       document.getElementById("item4").innerHTML = myArr.items2[0].items13;
	       document.getElementById("item5").innerHTML = myArr.items3[0].items11;
	       document.getElementById("item6").innerHTML = myArr.items3[0].items12;
	       document.getElementById("item7").innerHTML = myArr.items4[0].items11;
	       document.getElementById("item8").innerHTML = myArr.items4[0].items12;
	       document.getElementById("item9").innerHTML = myArr.items4[0].items13;
	       document.getElementById("item10").innerHTML = myArr.items4[0].items14;
	       document.getElementById("item11").innerHTML = myArr.items5[0].items11;
	       document.getElementById("item12").innerHTML = myArr.items5[0].items12;
	       document.getElementById("item13").innerHTML = myArr.items5[0].items13;
	       document.getElementById("item14").innerHTML = myArr.items5[0].items14;
	       document.getElementById("item15").innerHTML = myArr.items6[0].items11;
	       document.getElementById("item16").innerHTML = myArr.items6[0].items12;
	       document.getElementById("item17").innerHTML = myArr.items6[0].items13;
	       document.getElementById("item18").innerHTML = myArr.items7[0].items11;
	       document.getElementById("item19").innerHTML = myArr.items7[0].items12;
	       document.getElementById("item20").innerHTML = myArr.items7[0].items13;
	       document.getElementById("item21").innerHTML = myArr.items7[0].items14;
	       document.getElementById("item22").innerHTML = myArr.items8[0].items11;
	       document.getElementById("item23").innerHTML = myArr.items8[0].items12;
	       document.getElementById("item24").innerHTML = myArr.items9[0].items11;
	       document.getElementById("item25").innerHTML = myArr.items9[0].items12;
	       document.getElementById("item26").innerHTML = myArr.items9[0].items13;
	       document.getElementById("item27").innerHTML = myArr.items10[0].items11;
	       document.getElementById("item28").innerHTML = myArr.items10[0].items12;
	       document.getElementById("item29").innerHTML = myArr.items11[0].items11;
	       document.getElementById("item30").innerHTML = myArr.items11[0].items12;
	       document.getElementById("item31").innerHTML = myArr.items11[0].items13;
	       document.getElementById("item32").innerHTML = myArr.items11[0].items14;
	       document.getElementById("item33").innerHTML = myArr.items12[0].items11;
	       document.getElementById("item34").innerHTML = myArr.items13[0].items11;
	       document.getElementById("item35").innerHTML = myArr.items14[0].items11;
	       document.getElementById("item36").innerHTML = myArr.items14[0].items12;
	       document.getElementById("item37").innerHTML = myArr.items14[0].items13;
	       document.getElementById("item38").innerHTML = myArr.items14[0].items14;
	       document.getElementById("item39").innerHTML = myArr.items15[0].items11;
	       document.getElementById("item40").innerHTML = myArr.items15[0].items12;
	       document.getElementById("item41").innerHTML = myArr.items15[0].items13;
	       document.getElementById("item42").innerHTML = myArr.items15[0].items14;
               }
        };
        xmlhttp.open("GET", "/ajax/json_demo_array.json", true);
        xmlhttp.send();
});




