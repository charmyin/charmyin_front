
requirejs.config({
	baseUrl: "../../../../",
	paths: {
		'jquery': './vendor/jquery/jquery',
		'easyloader': './vendor/easyui/easyloader',
		'indexApp': './app/js/apps/easyui/main/indexApp',
		'common': './app/js/apps/easyui/common',
		'backbone': './vendor/backbone/backbone',
		'underscore': './vendor/underscore/underscore'
	},
	shim: {
		'easyloader': {
			deps: ['jquery'],
			exports: 'EasyLoader'
		},
		'backbone': {
			deps: ['underscore'],
			exports: 'Backbone'
		},
		'underscore': {
			exports: '_'
		}
	}

});

require(['jquery', 'indexApp', 'common', 'backbone', 'underscore'], function ($, indexApp, common, backbone, _) {
	//监听easyloader事件，即easyload载入某一个js模块后触发
	easyloader.onLoad = function (event) {
		console.log(event);
		if(event === 'parser'){
			//第一次加载完parser就要完成parser事件的注册
			//设置主题和语言
			common.configEasyUI(event);
			//获取parser事件，用于在渲染后执行操作
			$.parser.onComplete = function () {
				indexApp.removeLoadingDiv();
			}
		}
		
		if(typeof(event) === 'object'){
			
			$("#ulCatalogueTree_Main").tree({
				//单击后右侧tab现对应的界面
				onClick: function (node) {
					var boo = $("#ulCatalogueTree_Main").tree("isLeaf", node.target);
					if(boo){
						
						
						
						
						
					}
				}
			});
		}
		
	};
	
	//页面dom加载完成后触发
	$(function () {
		
		//防止有的时候一直加载，页面不出现，此处注释保留
		// if($.parser){
				// $.parser.parse();
			// }
	});
});
