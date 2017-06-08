$(document).ready(function(){
		var a = 0;
	 var time = setInterval(move,2000);
            function move(){

                if(a<3){
                    a++;
                }
                else{
                    a=0;
                }
                bofang();
            }
	
	 function bofang(){
		 $('.image img:eq('+a+')').fadeIn(2000).siblings().fadeOut(2000);
	 }  
});

function form(){
	   var text = document.getElementById('text');
	   var passward = document.getElementById('password');
		if(text.value.length == 0 ){
		  document.getElementById('error').innerHTML =  '账号不能为空';
		  return false;
	  }else{
		   document.getElementById('error').innerHTML =  '';
	  }
	if(passward.value.length == 0){
		  document.getElementById('error2').innerHTML =  '密码不能为空';
		return false;
	  }
	else{
		 document.getElementById('error2').innerHTML =  '';
	}
	
	if(text.value.length > 0){
		var user = document.getElementById('text').value;
		var reg = /^[a-zA-Z][a-zA-Z0-9]{4,11}$/;
		if(reg.test(user)){
			document.getElementById('error').innerHTML =  '';
		}else{
			document.getElementById('error2').innerHTML =  '账号错误';
		}
	}
//    $('#haha').click(function(){
//		var text = document.getElementById('text');
//		var passward = document.getElementById('password');
//		alert('1111');
//		 if(text.value.length >0){
//			 alert('123');
//		window.location.href = "html/child.html";
//	}
//		else{
//		  return false;
//		}  
//	})
	 
	
  }
form();
