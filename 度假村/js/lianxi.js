  function ShowMap(zuobiao, name, addrsee, phone, youxiang, zoom) {
        var arrzuobiao = zuobiao.split(',');
        var map = new BMap.Map("allmap");
        map.addControl(new BMap.OverviewMapControl());   
        map.centerAndZoom(new BMap.Point(arrzuobiao[0], arrzuobiao[1]), zoom);
        map.addControl(new BMap.NavigationControl());
        var marker = new BMap.Marker(new BMap.Point(arrzuobiao[0], arrzuobiao[1]));
        map.addOverlay(marker);
        var infoWindow = new BMap.InfoWindow('<p style="color: #bf0008;font-size:14px;">' + name + '</p><p>地址：' + addrsee + '</p><p>电话：' + phone + '</p><p>邮箱：' + youxiang + '</p>');
        marker.addEventListener("click", function () {
            this.openInfoWindow(infoWindow);
        });
        marker.openInfoWindow(infoWindow);
    }
	  
	  
	var loc;
    var isMapInit = false;
    //监听定位组件的message事件
    window.addEventListener('message', function(event) {
        loc = event.data; // 接收位置信息       
        //console.log('location', loc);
        if(loc  && loc.module == 'geolocation') { //定位成功,防止其他应用也会向该页面post信息，需判断module是否为'geolocation'
            var markUrl = 'https://apis.map.qq.com/tools/poimarker' +
                    '?marker=coord:' + loc.lat + ',' + loc.lng +
                    ';title:我的位置;addr:' + (loc.addr || loc.city) +
                    '&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&referer=myapp';
            //给位置展示组件赋值
           // document.getElementById('markPage').src = markUrl;
            var lng = 121.514263//经度
            var lat = 31.240165 //维度
            console.log(lng)
        ShowMap(''+lng+','+lat+'', '莱格斯酒店与度假村中国推广处', '上海世纪大道 100 号环球金融中心 28 楼','021-51167122', 'cbs112@126.com', '20');
        }else { 
            console.log('定位失败');
        }
    }, false);
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
	  $('.indbut').click(function(){
	  	console.log(1)
	  	window.open('./index.html')
	  })
   })
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