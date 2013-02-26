require.config({
	baseUrl: '../../../',
	paths: {
		'jquery': './vendor/jquery/jquery',
		'underscore': './vendor/underscore/underscore',
		'backbone': './vendor/backbone/backbone',
		'app': './demo/js/easyui/accordion'
	},
	shim: {
		backbone: {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		},
		underscore: {
			deps: [],
			exports: '_'
		}
	}
});


require(['app'],function (app) {
	//alert("hello");
});
