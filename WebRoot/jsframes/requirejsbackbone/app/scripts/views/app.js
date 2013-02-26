define(['backbone'], function(Backbone) {
	var App = Backbone.View.extend({
		initialize:function(){
			document.writeln("hello");
			console.log("hello world, this is very good ~");
		}
	});
  return App;
});