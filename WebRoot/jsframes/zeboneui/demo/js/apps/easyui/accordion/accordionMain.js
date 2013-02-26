require.config({
	baseUrl: '../../../',
	paths: {
		'jquery': './vendor/jquery/jquery',
		'easyloader': './vendor/easyui/easyloader',
		'app': './demo/js/apps/easyui/accordion/accordion'
	},
	shim: {
		'easyloader': {
			deps: ['jquery'],
			exports: 'easyloader'
		}
	}
});
//加载顺序查看
var countTemp = 0;

require(['easyloader','app'], function (EasyLoader, App) {
	countTemp = countTemp+1;
	console.log(countTemp + ':'+'AccordionMain.js');
	easyloader.theme = 'bootstrap';
	easyloader.locale = 'zh_CN';
	console.log(App.name+':'+App.age);
	//console.log(EasyLoader);
});

