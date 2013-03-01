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
		'jquery': 'vendor/jquery/jquery-1.8.0.min',
		'easyloader': 'vendor/easyui/easyloader',
		'indexApp': 'app/js/apps/easyui/main/indexApp',
		'common': 'app/js/apps/easyui/common',
		'backbone': 'vendor/backbone/backbone',
		'underscore': 'vendor/underscore/underscore'
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
	console.log("I came late , am I");
		console.log(event);
		//去除加载mask效果
		var isInArray = (typeof(event) !== 'string' && $.inArray("tree",event) !== -1);
		console.log(isInArray);
		if(event === 'parser' || isInArray){
			console.log("onComplete");
			$.parser.onComplete = function (context) {
				console.log("completed on complete");
				console.log($("#divLoading_Main"));
				if($("#divLoading_Main").length > 0){
					console.log("remove it");
					indexApp.removeLoadingDiv();
				}
			};
		}
	
		//监听点击左侧树状目录后打开右侧tab事件		
		if(typeof(event) !== 'string' && $.inArray("tree",event) !== -1){
			$("#ulCatalogueTree_Main").tree({
				//单击后右侧tab现对应的界面
				onClick: function (node) {
					var boo = $("#ulCatalogueTree_Main").tree("isLeaf", node.target);
					if(boo){
						indexApp.openMainTab(node);
					}
				}
			});
		}	
		
		//当加载完tabs后，需要监听页面主tabs的事件	
		if(typeof(event) !== 'string' && $.inArray("tabs",event) !== -1){
			$("#divTab_Main").tabs({
				onAdd: function (title, index) {
				//	console.log("hello");
					//alert($.browser.version);
					//var tabs = $("#divTab_Main").tabs('tabs')[index];
					//$.parser.parse("#divTab_Main");
				},
				onClose: function (title, index){ 
					 //var tabCount = $("#divTab_Main").tabs('tabs').length;
					 // alert(tabCount);
				}
			});
			
		}
	
	// easyloader.load('parser', function(){
				// console.log("I am parser a parser~&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& load parser");
				// //jQuery.parser.parse();
			// });
});
