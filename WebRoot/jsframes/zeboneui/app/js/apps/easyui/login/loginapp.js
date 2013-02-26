/***
 * author: charmyin
 * datetime: 2013-2-22 21:00
 * title: make the login powerful
 ***/

define(['easyloader', 'jquery', 'cookiejs'], function (EasyLoader, $, cookiejs) {
	return {
		//移除加载页面
		removeLoadingDiv : function () {
			$("#loginwindow").window('close');
			$('#divLoading').fadeOut("slow", function () {
				$(this).remove();
				$("#loginwindow").window('open');
				document.authForm.username.focus();
			});
		},
		//从cookie获取用户信息
		getUserInfoFromCookie: function () {
			var userName = cookiejs.get('loginUserName');
			var password = cookiejs.get('loginUassword');
			$('#inputUsername').val(userName);
			$('#inputPassword').val(password);
		},
		//将光标移动到焦点上
		//参数为元素的id
		setEnterPressEvent: function (loginapp) {
			//监听enter按键事件
			//username文本框，enter后跳转下个文本框
			$('#inputUsername').bind('keypress', function (e) {
				var code = e.keyCode ? e.keyCode : e.which;
				if(code == 13){
					$('#inputPassword').focus();
				}
			});
			//密码文本框，enter后跳转下个文本框
			$('#inputPassword').bind('keypress', function (e) {
				var code = e.keyCode ? e.keyCode : e.which;
				if(code == 13){
					document.authForm.valiCode.focus();
				}
			});
			//验证码文本框，enter后提交表单
			$('#inputValiCode').bind('keypress', function (e) {
				var code = e.keyCode ? e.keyCode : e.which;
				if(code == 13){
					loginapp.submitLoginForm();
				}
			});
		},
		//提交表单
		submitLoginForm: function () {
			//验证所填入信息
			if(!$('#authForm').form('validate')){
				return;
			}			
			//保存cookie
			if($('#inputRememberMe').is(':checked')){
				var userName = $('#inputUsername').val();
				var password = $('#inputPassword').val();
				if(userName){
					cookiejs.set('loginUserName', userName);
				}
				if(password){
					//TODO 需要加密
					cookiejs.set('loginUassword', password);
				}
				window.location.href="../main/index.html";
				//alert("表单提交中，cookie中存入用户名密码，刷新后显示~");
			}else{
				window.location.href="../main/index.html";
			}
		}
	};
});