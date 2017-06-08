
function zhuce(user){
	"use strict";
	var user = document.getElementById('text').value;
	var passw = document.getElementById('password').value;
	var passw2 = document.getElementById('password2').value;
	
	var reg = /^[a-zA-Z][a-zA-Z0-9]{4,11}$/;
   if(user.length > 4){
	  if(reg.test(user)){
		   document.getElementById('inline-span').innerHTML = ''
		   return false;
	   }else if(!reg.test(user)){
		   document.getElementById('inline-span').innerHTML = '账号格式不正确';
		  document.getElementById('inline-span').style.color="red";
		   return false;
	 }
	   
   }
	
	 if(passw.length > 6){
	   var reg2 = /^[a-zA-Z0-9]{6,12}$/;
	  if(reg2.test(passw)){
		   document.getElementById('inline-span2').innerHTML = ''
		   return false;
	   }else if(!reg2.test(passw)){
		   document.getElementById('inline-span2').innerHTML = '密码格式不正确';
		  document.getElementById('inline-span2').style.color="red";
		   return false;
	 }
   }
//	 if(user.length == 0|| passw.length==0|| passw2.length==0){
//		alert('注册失败');
//		return false;
//	}
//	return false;
}   zhuce();