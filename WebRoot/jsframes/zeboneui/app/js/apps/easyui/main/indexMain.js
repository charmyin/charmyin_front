/***
 * author: charmyin
 * datetime: 2013-2-26 21:00
 * title: The main page of this application~
 ***/

//记录parser载入次数，主要处理第一次载入parser时的事件
var parserCount = 0;

requirejs.config({
	waitSeconds: 0,
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
		
		//去除加载mask效果
		if($("#divLoading_Main").length > 0){
			$.parser.onComplete = function (context) {
				if($("#divLoading_Main").length > 0){
					indexApp.removeLoadingDiv();
				}
			};
		}
		//监听点击左侧树状目录后打开右侧tab事件		
		if($.inArray("tree",event) !== -1){
			$("#ulCatalogueTree_Main").tree({
				//单击后右侧tab现对应的界面
				onClick: function (node) {
					var boo = $("#ulCatalogueTree_Main").tree("isLeaf", node.target);
					if(boo){
						indexApp.openMainTab(node.attributes.url);
					}
				}
			});
		}
		
		// if(typeof(event) === 'object'){
			// var aaa = event['tree'];
			// $("#ulCatalogueTree_Main").tree({
				// //单击后右侧tab现对应的界面
				// onClick: function (node) {
					// var boo = $("#ulCatalogueTree_Main").tree("isLeaf", node.target);
					// if(boo){
						// indexApp.openMainTab(node.attributes.url);
					// }
				// }
			// });
		// }
		
	};
	
	//页面dom加载完成后触发
	$(function () {
		
		//防止有的时候一直加载，页面不出现，此处注释保留
		// if($.parser){
			// $.parser.parse();
		// }
	});
});
