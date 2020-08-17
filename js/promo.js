$(function(){
	$('.fanh').click(function(){
		let num=$(window).scrollTop();
	var time=setInterval(function(){
			num-=100;
			if(num<=0){
				clearInterval(time)
			}
			$(window).scrollTop(num);
		},10)
	}) 
	var flg=true;
	$("nav>ul.navul>img").click(function(){
		if(flg){
			$('.box').css('margin-left','-90%')
			$('.box1').css('right','0%')
			$("nav>ul.navul>img").attr('src','img/4.png')
			$("nav>ul.navul>img").css('right','95%')
			flg=false;
			return
		}else{
			$('.box').css('margin-left','0')
			$('.box1').css('right','-100%')
			$("nav>ul.navul>img").attr('src','img/1.png')
			$("nav>ul.navul>img").css('right','5%')
			flg=true;
			return
		}
		console.log(1)
	})
	$('.indbut').click(function(){
		console.log(1)
		window.open('./index.html')
	})
	$(window).scroll(function(){
	 let num=$(window).scrollTop();
	  let hig=$('nav').height();
	 if(num>hig){
	   $('.jtnav').css('opacity','1')
	 }else{
	    $('.jtnav').css('opacity','0')
	 }
	  if(num>hig){
		    $('.fanh').css('display','block')
	  }else{
		   $('.fanh').css('display','none')
	  }
	})
	$(document).ready(function(){
		console.log(1)
		let i=0;
		 var time=setInterval(function(){
					if(i>$('.Promo> ul>li').length-3){
						i=1;
						clearInterval(time)
					}
					$('.Promo>ul>li>.wek').eq(i).css('transform','translateY(0)');
					 $('.Promo>ul>li>.wek').eq(i).css('opacity','1') ;
					 i++;
					},100)
	})
	$(window).scroll(function(){
	 let num=$(window).scrollTop();
	console.log(num);
	if(num>500){
		let i=2;
		 var time=setInterval(function(){
					if(i>$('.Promo> ul>li').length){
						i=3;
						clearInterval(time)
					}
					$('.Promo>ul>li>.wek').eq(i).css('transform','translateY(0)');
					 $('.Promo>ul>li>.wek').eq(i).css('opacity','1') ;
					 i++;
					},100)
	}
	 })
})