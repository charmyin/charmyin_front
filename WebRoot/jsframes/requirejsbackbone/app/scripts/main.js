require.config({

  baseUrl:'scripts/vendor',
	
  paths: {
    'jquery': 'jquery/jquery',
    'underscore': 'underscore-amd/underscore',
    'backbone': 'backbone-amd/backbone',
    'app': '../views/app'
  },
  
  shim: {
	  'backbone': {
		  deps:['underscore', 'jquery'],
		  exports:'Backbone'
	  },
	  'underscore':{
		  exports: '_'
	  }
  }
});

require(['app'], function(AppView) {
  //alert("hleoo");
  new AppView;
  
});