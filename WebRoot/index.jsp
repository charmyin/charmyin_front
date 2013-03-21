<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>文档首页</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<style type="text/css">
		a{
			margin:20px;
			line-height:30px;
		}
		
		
	</style>
  </head>
  
  <body>
   	<div>
   		JS APIS & DEMOS
   	</div>
   	<div>
   		<h2>APIS</h2>
   		<a href="./api/backbone/index.html" target="_blank">Backbone.js</a>
   		<br/>
   		<a href="./api/requirejs/docs/api.html" target="_blank">Requirejs</a>
   		<br/>
   		<a href="./api/underscore/index.html" target="_blank">Underscore.js</a>
   		<br/>
   		<a href="./api/easyui/demo/index.html" target="_blank">EasyUI</a>
   		<br/>
   		<a href="./api/bootstrap/docs/index.html" target="_blank">Bootstrap</a>
   		<br/>
   		<a href="./api/flatui/index.html" target="_blank">FlatUI</a>
   		<br/>
   		<a href="./api/jqapi/index.html" target="_blank">Jpapi</a>
   		<br/>
   		<a href="./api/d3/test/data/sample.html" target="_blank">d3</a>
   		<br/>
   		<br/>
   		<h4>jquery plugins</h4>
   			<a href="api/jquery plugins/index.html" target="_blank">&nbsp;&nbsp;&nbsp;Jquery Plugins Index</a>
   			<br/>
   			<a href="api/jquery plugins/layout/demos/index.html" target="_blank">&nbsp;&nbsp;&nbsp;1.Jquery Layout</a>
   			<br/>
   			<a href="api/jquery plugins/jqueryui/index.html" target="_blank">&nbsp;&nbsp;&nbsp;2.Jquery UI</a>
   			<br/>
   			<a href="api/jquery plugins/jqueryui/development-bundle/demos/accordion/index.html" target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.1 Accordion</a>
   			
   	</div>
   	<div>
   		<h2>DEMOS</h2>
   		<a href="./jsframes/backbone/index.html" target="_blank">Backbone Rafection</a>
   		<br/>
   		<a href="./jsframes/requirejsbackbone/app/index.html" target="_blank">Requirejs backbone master</a>
   		<br/>
   		<a href="./jsframes/zeboneui/index.html" target="_blank">ZeboneUI</a>
   		<br/>
   		<a href="./jsframes/backbone-directory/index.html" target="_blank">Backbone Directory</a>
   		<br/>
   		<a href="./jsframes/jQueryDesktop/index.html" target="_blank">Jquery Desktop</a>
   		<br/>
   		<a href="./jsframes/h5slides/index.html" target="_blank">H5Slides</a>
   		<br/>
   		<a href="./jsframes/threejs/index.html" target="_blank">threejs</a>
   		<br/>
   		<a href="./jsframes/jQueryMobile/index.html" target="_blank">jQuery Mobile</a>
   	</div>
  </body>
</html>
