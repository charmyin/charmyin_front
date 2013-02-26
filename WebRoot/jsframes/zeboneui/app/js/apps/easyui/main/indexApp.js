define(['jquery', 'easyloader'], function ($, easyloader) {
	return {
		//移除加载页面
		removeLoadingDiv : function () {
			$('#divLoading_Main').fadeOut("slow", function () {
				$(this).remove();
			});
		}
	}
});