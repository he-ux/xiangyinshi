bannerListFn(
    $(".banner"),
    $(".img-btn-list"),
    $(".left-btn"),
    $(".right-btn"),
    2000,
    true
);
$(function(){
	$(window).scroll(function(){
	 let num=$(window).scrollTop();
	  let hig=$('nav').height();
	  if(num>hig){
	    $('.jtnav').css('opacity','1')
	  }else{
	     $('.jtnav').css('opacity','0')
	  }
	  if(num>100){
		    $('.fanh').css('display','block')
	  }else{
		   $('.fanh').css('display','none')
	  }
	  if(num>250){
		  let i=0;
		   var time=setInterval(function(){
			if(i>$('.hotel> ul>li').length){
				i=6;
				clearInterval(time)
			}
			$('.hotel> ul>li').eq(i).css('transform','translateY(0px)');
			 $('.hotel> ul>li').eq(i).css('opacity','1') ;
			 i++;
			},100)
	  }
	  if(num>864){
	  		  let i=0;
	  		   var time=setInterval(function(){
	  			if(i>$('.clocation> ul>li').length-4){
	  				i=2;
	  				clearInterval(time)
	  			}
				
	  			$('.clocation> ul>li').eq(i).css('transform','translateY(0px)');
	  			 $('.clocation> ul>li').eq(i).css('opacity','1') ;
	  			 i++;
	  			},100)
	  }
	  if(num>1400){
	  		  let i=3;
	  		   var time=setInterval(function(){
	  			if(i>$('.clocation> ul>li').length){
	  				i=6;
	  				clearInterval(time)
	  			}
	  			$('.clocation> ul>li').eq(i).css('transform','translateY(0px)');
	  			 $('.clocation> ul>li').eq(i).css('opacity','1') ;
	  			 i++;
	  			},100)
	  }
	  
	})
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
})
//表单验证
$(function(){
	    var flagmail=false
	    var flagnam=false
		 var flagenter=false
		 var flagtit=false
		//找到元素
		var mail=$('#mailbox')
		var xingm=$('#nam')
		var qye=$('#enter')
		var tit=$('#title')
		// 如果失去焦点，则进行检查判断用户名是否合法
		 //    phone.blur(function () {
		 //        // 封装函数 调用函数
		 //        fnCheckhone()
		 //    })
			// mm.blur(function () {
			//     // 封装函数 调用函数
			//     fnCheckmm()
			// })
			// yzm.blur(function () {
			//     // 封装函数 调用函数
			//     fnCheckyzm()
			// })
		    function fnCheckhone() {
		        // 获取用户输入的数据
		        var vals = mail.val()
		        // 正则，正则验证用户输入的数据是否合法
		        var re = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
		
		        if (vals == '') {
					$('.fge').show()
		         $('.fge').html('<i></i>邮箱不能为空')
		            flagmail=false
		            return
		        }
		        if (re.test(vals)) {
		            // 合法 -- 隐藏报错信息
		            $('.fge').hide()
		            flagmail=true
		        } else {
		            // 不合法 -- 报错 -- span标签显示
					$('.fge').show()
		             $('.fge').html('<i></i>请输入正确的邮箱')
		            flagmail=false
		        }
		    }
			
			function fnCheckmm(){
			        // 获取密码框输入的数据
			        var vals=xingm.val()
			        // 密码正则匹配表达式
			        var rePass =/^[\u4e00-\u9fa5]{2,6}$/
			        // 如果输入框为空，则提示不能为空并return
			        if (vals==''){
			            $('.fg').show()
			            $('.fg').html('<i></i>姓名不能为空')
			            flagnam=false
			            return
			        }
			        // 正则验证密码输入是否合法
			        if(rePass.test(vals))
			        {
			            // 如果匹配成功，则隐藏span标签
			           $('.fg').hide()
			            flagnam=true
			        }
			        else
			        {
			            // 如果匹配失败，则显示span标签，替换提示信息
			           $('.fg').show()
			            $('.fg').html('<i></i>请输入2~6位中文')
			            flagnam=false
			        }
			    }
				
				function fnCheckyzm(){
				        // 获取密码框输入的数据
				        var vals=qye.val()
				        // 如果输入框为空，则提示不能为空并return
				        if (vals==''){
				            $('.txxx').show()
				            $('.txxx').html('<i></i>企业不能为空')
				           flagenter=false
				            return
				        }else{
						$('.txxx').hide()	
						  flagenter=true
						}
				        
				    }
					
					function fnChecktit(){
					        // 获取密码框输入的数据
					        var vals=tit.val()
					        // 如果输入框为空，则提示不能为空并return
					        if (vals==''){
					            $('.bt').show()
					            $('.bt').html('<i></i>标题不能为空')
					           flagtit=false
					            return
					        }else{
							$('.bt').hide()	
							  flagtit=true
							}
					        
					    }
					// 所有输入框验证通过再登陆
					    $('.but').click(function(){
							fnCheckhone();
							fnCheckmm();
							fnCheckyzm();
							fnChecktit();
							if( flagenter&flagnam&flagenter&flagtit){
							alert("发送成功")	
					        }
					       
					    })
})