define(['jquery', 'easyloader'], function ($, easyloader) {
	return {
		//移除加载页面
		removeLoadingDiv : function () {
			$('#divLoading_Main').fadeOut("slow", function () {
				$(this).remove();
			});
		},
		openMainTab: function (node){
			var isNotExisted = true;//tab不存在
			var tabs = $("#divTab_Main").tabs('tabs');
			for( var i=0; i<tabs.length; i++){
				if('divTab_Main_' + node.id == $(tabs[i]).attr('id')){
					$("#divTab_Main").tabs('select', i);	
					isNotExisted = false;//tab已存在
				}
			}
			if(isNotExisted){
				$('#divTab_Main').tabs('add', {
					id: 'divTab_Main_' + node.id,//tab的Id格式为divTab_Main_12
					title: node.text,
					content: '<iframe id="iframeTab_'+ node.id+'" src="'+ node.attributes['url']+'" style="height:100%;width:100%;border:none; overflow:hidden;" scrolling="no"></iframe>',// '',
					closable: true,
					fit: true,
					tools:[{
						iconCls: 'icon-mini-refresh',
						handler: function(){
							$('#iframeTab_' + node.id).attr("src",$('#iframeTab_' + node.id).attr("src"));
						}
					}]
				});
				$('#divTab_Main_'+ node.id ).css({'padding':'0', 'margin':'0', 'overflow':'hidden' });
			}
		}
	}
});