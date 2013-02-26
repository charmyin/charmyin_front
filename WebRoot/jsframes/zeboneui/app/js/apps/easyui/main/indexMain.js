
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

//全局变量，计算load文件的次数
var countParser = 0;
require(['jquery', 'indexApp', 'common', 'backbone', 'underscore'], function ($, indexApp, common, backbone, _) {
	//监听easyloader事件，即easyload载入某一个js模块后触发
	easyloader.onLoad = function (event) {
		if($.parser != undefined){
			//第一次加载完parser就要完成parser事件的注册
			countParser = countParser + 1;
			if(countParser === 1){
				//设置主题和语言
				common.configEasyUI(event);
				//获取parser事件，用于在渲染后执行操作
				$.parser.onComplete = function () {
					indexApp.removeLoadingDiv();
				}
			}
		}
	};
	
	//页面dom加载完成后触发
	$(function () {
		
		//当窗口变化时候，布局整体随着窗口变化，不发生scroll
		//由于每次resize会引发多次的resize事件，所以如果未来性能不行则此处可以优化
		$(window).resize(function () {
			
			$("#divLayout_Main").attr('style','height:'+($(window).height()-6)+'px; width:100%;margin:0;');
			 
			$("#divAccordion_main").attr('style','height:'+($(window).height()-159)+"px;");
			console.log("dddd" + $("#divAccordion_main").attr('style'));
			if($.parser){
				$.parser.parse("body");
			}
		});
		
		
		// $(window).resize(_.debounce(function () {
// 						
			// $("#divLayout_Main").attr('style','height:'+($(window).height()-6)+'px; width:100%;margin:0;');
// 			 
			// $("#divAccordion_main").attr('style','height:'+($(window).height()-159)+"px;");
			// console.log("dddd" + $("#divAccordion_main").attr('style'));
			// if($.parser){
				// $.parser.parse();
			// }
// 			
		// }, 500));
		//初始化窗体长宽（自适应）
		$("#divLayout_Main").attr('style','height:'+($(window).innerHeight()-6)+'px; width:100%;margin:0;');
		$("#divAccordion_main").attr('style','height:'+($(window).height()-159)+"px;");
		console.log($("#divAccordion_main").attr('style'));
	});
});
