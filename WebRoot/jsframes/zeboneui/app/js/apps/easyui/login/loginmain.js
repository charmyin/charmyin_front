/***
 * author: charmyin
 * datetime: 2013-2-22 21:00
 * title: config the login
 ***/

requirejs.config({
	baseUrl: "../../../../",//此处根目录为引用requirejs所对应的根目录，由于使用了base标签，所以根目录为zeboneui文件夹
	paths: {
		'jquery' : './vendor/jquery/jquery',
		'easyloader': './vendor/easyui/easyloader',
		'cookiejs': './vendor/cookiejs/cookie.min',
		'loginapp': './app/js/apps/easyui/login/loginapp',
		'domReady': './vendor/domReady/domReady',
		'validRules': './vendor/utils/easyui/validRules',
		'common': './app/js/apps/easyui/common'
	},
	shim: {
		'easyloader': {
			deps: ['jquery'],
			exports: 'EasyLoader'
		}
	}
});

//记录countParser加载次数
var countParser = 0;
require(['domReady', 'loginapp', 'cookiejs', 'validRules', 'common'], function (domReady, loginapp, cookiejs, validRules, common) {
	
	//监视easyloader加载组件完成的事件
	easyloader.onLoad = function (event) {
		if($.parser != undefined){
			//第一次加载完parser就要完成parser事件的注册
			countParser = countParser + 1;
			if(countParser === 1){
				//设置主题和语言
				common.configEasyUI(event);
				//获取parser事件，用于在渲染后执行操作
				$.parser.onComplete = function () {
					//移除loading，并同时聚焦初始化的控件
					loginapp.removeLoadingDiv();
				}
			}
			if(countParser === 2){
				//全部渲染完成后附加验证规则
				validRules();
			}
		}
	};
	//页面加载完成后，执行以下操作
	domReady(function () {
		//获取cookie中的用户名和密码
		loginapp.getUserInfoFromCookie();
		//载入easyui,form框架
		using('./plugins/jquery.form.js');
		//重置表单
		$('#aResetForm').click(function (event) {
			$('#authForm').form('reset');
			//设置authForm首个控件焦点
			document.authForm.username.focus();
		});
		//提交表单
		$('#aSubmitForm').click(function () {
			loginapp.submitLoginForm();
		});
		//设定enter按钮事件
		loginapp.setEnterPressEvent(loginapp);
		
	});
	

});