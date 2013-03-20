// set data *
// set title *
// set design *
// add/clone/remove slide *
// move slide *
// change template *
// edit item *
// reset *

define(['storage'], function (storage) {
    var templateList = [
            {key: 'zebonehead', layout: 'zebonehead', typeMap: {title: 'text', content: 'text'}},
            {key: 'zebonebody', layout: 'zebonebody', typeMap: {title: 'text', content: 'text'}},
            {key: 'normal', layout: 'normal', typeMap: {title: 'text', content: 'text'}},
            {key: 'title', layout: 'title', typeMap: {title: 'text', content: 'text'}},
            {key: 'subtitle', layout: 'subtitle', typeMap: {title: 'text', content: 'text'}},
            {key: 'picture', layout: 'normal', typeMap: {title: 'text', content: 'img'}}
        ];
    var designList = [
            {key: 'default', title: 'Default'},
            {key: 'revert', title: 'Revert'}
        ];

    var defaultData = {
        design: 'default',
        title: '',
        slides: [
            {sid: 'A', template: 'zebonehead', layout: 'zebonehead', items: {title: {type: 'text', value: '试用期述职'}, content: {type: 'text', value: '殷昌明 2013-3-13'}}},
            {sid: 'B', template: 'zebonebody', layout: 'zebonebody', items: {title: {type: 'text', value: '对公司的认识'}, content: {type: 'text', value: '<strong>1.引用</strong> \n	<p style="text-indent:30px;">江苏振邦为医疗卫生领域的客户提供最先进的管理咨询、解决方案、信息化软件与服务，从事整体规划、软件研发、系统集成、运维服务和标准体系建设等工作，着力构建智慧的区域医疗和数字化医院信息系统，是中国领先的智慧医疗整体解决方案提供商.</p>'
            	+ '\n<strong>2.我的认识</strong>'
             	+'\n<p style="text-indent:30px;margin-bottom:0px;">原先的我比较关注电子商务类与社交类的软件公司，电商有：淘宝，京东，高朋，拉手等，社交有：QQ，twitter，facebook，linkin，微信等. 其实行业内的人都明白，虽然成功者光鲜耀人，但其背后已有无数的失败者.在信息化的今天，同行激烈的竞争，变换的潮流趋势，让互联网公司的未来很难去把握.</p> <p style="text-indent:30px;margin-bottom:0px;">我们公司拥有很多良好的发展条件，可以避开以上不利因素.公司属于环亚医用集团，拥有着丰富的市场与客户资源；现在国家提出智慧城市的战略，我们公司正好可以利用这一股东风，乘势而起，突出发展医疗以及智慧交通、智慧旅游等若干产业；在公司的这三个月，我体会到集团对我们振邦的重视，对于信息化产业的重视；公司有着很好的办公环境，领导对员工很关心，员工间亲密和谐相处，后勤对我们生活上的帮助也十分贴心.</p><p style="text-indent:30px;">综上所述，我觉得我们公司很给力.</p>'}}},
            {sid: 'c', template: 'zebonebody', layout: 'zebonebody', items: {title: {type: 'text', value: '对岗位职责的理解'}, content: {type: 'text', value: '<h4 style="text-align:center;">作为一名软件工程师，我需要负责以下几点</h4>\n<p style="text-indent:30px;margin-bottom:5px;">1.  参与公司前期需求的制定，深入了解项目，为项目前期规划作出建议.</p>\n<p style="text-indent:30px;margin-bottom:5px;">2.  为针对不同的应用场景选择不同的java框架，建立高拓展性、高性能的系统提出建议.</p>\n<p style="text-indent:30px;margin-bottom:5px;">3.  进入公司程序开发迭代过程，编写应用程式，完成项目组分配的任务模块，后期修改完善测试出的问题.</p>\n<p style="text-indent:30px;margin-bottom:5px;">4.  和前端人员共同搭建前端框架，方便未来重复使用，不重复造轮子.</p>\n<p style="text-indent:30px;margin-bottom:5px;">5.  制定前端编码规范，让后人可以方便阅读，修改前端代码，防止人员变动后造成的前员工代码无法维护.</p>\n<p style="text-indent:30px;margin-bottom:10px;">6.  将后端与前端展示剥离，以适应不同客户端需求，如此未来可以拓展移动端应用以及c/s架构应用。</p>\n'}}},
            {sid: 'd', template: 'zebonebody', layout: 'zebonebody', items: {title: {type: 'text', value: '工作经历与入职经历'}, content: {type: 'text', value: '<br/><p style="text-indent:30px;margin-bottom:5px; margin-top:10px;font-size:16px;">1. 期间的工作都很顺利，与研发部的兄弟们的交流沟通合作都很愉快.</p>\n<p style="text-indent:30px;margin-bottom:5px; font-size:16px;">2. 公司的环境（同事间的合作，项目的开发，领导关心，生活办公方面的硬件环境等）很利于一个职员的成长，尤其是像我一样的未婚职员^_^</p>\n<p style="text-indent:30px;margin-bottom:5px; font-size:16px;">3. 三个月的实习让我感受到了环亚的文化，一种贴近实际，敢想敢做，敢于创新，敢于尝试的精神.同时我比较喜欢沙发文化，年轻的时候就该努力拼搏一把，等到未来才无憾~</p>\n<p style="text-indent:30px;margin-bottom:5px; font-size:16px;">4. 公司研发部项目安排的比较紧凑，需要大家共同用心去努力完成，每一个项目都能学习到很多，尝试新事物，并掌握新知识.</p>\n<p style="text-indent:30px;margin-bottom:5px; font-size:16px;">5. 公司组建了足球队，对于热爱踢足球的我来说，这也是一件很愉快的事情.</p>\n'}}},
            {sid: 'e', template: 'zebonebody', layout: 'zebonebody', items: {title: {type: 'text', value: '成果汇报-单点登录'}, content: {type: 'text', value: '</br><strong>简介：</strong><p style="text-indent:30px;margin-bottom:5px; margin-top:5px;font-size:16px;">1. 本系统主要解决的问题是用户一次登录该系统后，可以直接进入其他附属的子系统，而无需登录操作.</p><p style="text-indent:30px;margin-bottom:5px; margin-top:5px;font-size:16px;">2.前端采用bootstrap作为组件框架,节省了美工的工作量，同时美观大方.</p>\n</br><strong>有待改进：</strong>\n<p style="text-indent:30px;margin-bottom:5px; margin-top:5px;font-size:16px;">1.系统未来需要和实际需求相符合，页面背景图片等需要到时再添加.</p>\n<p style="text-indent:30px;margin-bottom:5px; margin-top:5px;font-size:16px;">2.初次使用该框架，所以略显粗糙，待门户框架搭建好后，再优化.</p>'}}},
            {sid: 'f', template: 'zebonebody', layout: 'zebonebody', items: {title: {type: 'text', value: '成果汇报-单点登录(图片)'}, content: {type: 'text', value: '<img src="images/zebone/sso1.jpg" alt="登录界面" title="登录界面"  style="height:150px; float:left; width:250px; border:solid blue 1px;"/><img src="images/zebone/sso2.jpg" alt="成功退出" title="成功退出"  style="margin-left:30px;height:150px; width:250px; border:solid blue 1px;"/><img src="images/zebone/sso3.jpg" alt="主界面" title="主界面"  style="margin:4px 0 0 13%; height:200px; width:400px;  border:solid blue 1px;"/>'}}},
            {sid: 'g', template: 'zebonebody', layout: 'zebonebody', items: {title: {type: 'text', value: '成果汇报-主数据索引'}, content: {type: 'text', value: '</br><strong>简介：</strong><p style="text-indent:30px;margin-bottom:5px; margin-top:5px;font-size:16px;">1. EMPI（患者主数据索引）主要功能为解决各大医院的信息交互障碍，避免医院的信息孤岛问题，举例：在EMPI覆盖范围内,患者在一家医院就诊时,可方便查询到患者过去在其他医院的就诊历史资料，为当前就诊做参考.</p><p style="text-indent:30px;margin-bottom:15px; margin-top:5px;font-size:16px;">2. 系统使用公司既有前端框架组建，完成了患者信息批量导入，患者信息列表展示，患者信息查询，患者详细信息的查看，新增，修改等功能.本项目由我和欧阳鑫完成，我负责前端设计.</p><strong>系统不足:</strong><p style="text-indent:30px;margin-bottom:5px; margin-top:5px;font-size:16px;">在于前端和后端交互过于频繁，不利于系统性能.未来可以采用backbone的mvc前端组织形式去解决该问题.</p>'}}},
            {sid: 'h', template: 'zebonebody', layout: 'zebonebody', items: {title: {type: 'text', value: '成果汇报-主数据索引(图片)'}, content: {type: 'text', value: '<img src="images/zebone/empi.jpg" alt="主界面" title="主界面"  style="height:353px; float:left; width:544px; border:solid blue 1px;"/>'}}},
            {sid: 'i', template: 'zebonebody', layout: 'zebonebody', items: {title: {type: 'text', value: '工作成果汇报-前端框架架构'}, content: {type: 'text', value: '<div class="imageCoverView view-third"><img src="images/zebone/zebonelogin.png" style="height:353px; float:left; width:544px; "/><div class="mask"><h2>前端框架方案</h2><p>1.管理类型<span style="color:yellow">(基于jqueryUI或easyUI)</span><br/>2.门户类型<span style="color:yellow">(Bootstrap风格)</span><br/>3.移动端类型<span style="color:yellow">(基于Bootstrap，JqueryMobileUI响应式前端设计)</span></p><a href="http://192.168.1.199:8080/bbrj/jsframes/zeboneui/app/templates/easyui/login/login.html" target="_blank" class="info">框架样例</a></div></div>'}}},
            {sid: 'j', template: 'zebonebody', layout: 'zebonebody', items: {title: {type: 'text', value: '职业规划 当前规划'}, content: {type: 'text', value: '<strong>1.职业规划</strong><p style="text-indent:30px;margin-top:0px;margin-bottom:0px;">1.1. 2013年熟练掌握javascript，以及相应的各大框架, 能够架构系统前端,使之具有高性能,可拓展性.</p><p style="text-indent:30px;margin-top:0px;margin-bottom:0px;">1.2. 2014年熟练掌握java，python，以及相应的各大框架，偏向大数据和事务流方向，解决医疗行业大数据问题.</p><p style="text-indent:30px;margin-top:0px;margin-bottom:0px;">1.3. 2015年熟练掌握数据库，包括nosql大数据应用，面向医疗行业的数据挖掘.</p><p style="text-indent:30px;margin-top:0px;margin-bottom:0px;">1.4. 2016学习整体系统架构，UML建模等.</p><strong>2.当前规划</strong><p style="text-indent:30px;margin-top:0px;margin-bottom:0px;">2.1. 公司软件前端框架的搭建，方便未来重复使用，不重复造轮子.包含一套管理型系统框架，一套门户网站类型框架，一套移动端框架.</p><p style="text-indent:30px;margin-top:0px;margin-bottom:0px;">2.2. 及时为不同需求设计前端界面，满足项目需求.</p><p style="text-indent:30px;margin-top:0px;margin-bottom:0px;">2.3. 制定前端编码规范，让后人可以方便阅读，修改前端代码，防止人员变动后造成的前员工代码无法维护.</p><p style="text-indent:30px;margin-top:0px;margin-bottom:0px;">2.4. 将后端与前端展示剥离，以适应不同客户端需求，如此可以未来拓展移动端应用以及c/s架构应用.</p><p style="text-indent:30px;margin-top:0px;margin-bottom:0px;">2.5. 深入了解并应用以下前端框架：jquery ， requirejs，backbone，bootstrap，d3，jeasyui，knockout.js等.</p>'}}},
            {sid: 'k', template: 'zebonebody', layout: 'zebonebody', items: {title: {type: 'text', value: '对公司的建议'}, content: {type: 'text', value: '</br><p style="text-indent:30px;margin-bottom:5px; margin-top:15px;font-size:20px;">1. 推荐使用git作为项目开发管理工具.</p><p style="text-indent:30px;margin-bottom:5px; margin-top:15px;font-size:20px;">2. 希望公司建立起一个学习型的公司，融入开源环境中，借助已有的优秀开源体系构建公司自己的平台.当然同时为开源做贡献.（此处开源贡献指的是选择性的商业开源.）</p><p style="text-indent:30px;margin-bottom:5px; margin-top:15px;font-size:20px;">3. 希望公司能将我们研发和需求第一线紧密结合，通过研发团队的既有技术去挖掘创新，创造商机.</p>'}}},
            {sid: 'l', template: 'zebonebody', layout: 'zebonebody', items: {title: {type: 'text', value: '结束语'}, content: {type: 'text', value: ' <iframe src="../threejs/demo/canvas_particles_shapes.html"  style="height:353px; float:left; width:544px; border:none; border-radius:3px;"></iframe >'}}}
          //  {sid: 'g', template: 'picture', layout: 'normal', items: {title: {type: 'text', value: 'Favicon'}, content: {type: 'img', value: 'http://www.baidu.com/favicon.ico'}}}
        ]
    };

    var data = storage.readData() || JSON.parse(JSON.stringify(defaultData));

    var onStorage = true;

    function mapToArray(obj) {
        var newObj;
        if (Object.prototype.toString.call(obj) == '[object Object]') {
            newObj = [];
            $.each(obj, function (k, v) {
                newObj.push([k, mapToArray(v)]);
            });
            newObj.sort(function (a, b) {
                return a[0] > b[0];
            });
        }
        else if (Object.prototype.toString.call(obj) == '[object Array]') {
            newObj = [];
            $.each(obj, function (i, v) {
                newObj.push(mapToArray(v));
            });
        }
        else {
            newObj = obj;
        }
        return newObj;
    }
    function checkChanged(objA, objB) {
        var newObjA = mapToArray(objA);
        var newObjB = mapToArray(objB);

        return JSON.stringify(newObjA) !== JSON.stringify(newObjB);
    }

    function extend(dest, src) {
        $.each(src, function (k, v) {
            dest[k] = v;
        });
    }

    var manager = {
        getTplList: function () {
            return templateList;
        },
        getDesignList: function () {
            return designList;
        },
        getTplByKey: function (key) {
            var result;
            templateList.forEach(function (tplData) {
                if (tplData.key == key) {
                    result = tplData;
                }
            });
            return result;
        },
        getDesignByKey: function (key) {
            var result;
            designList.forEach(function (designData) {
                if (designData.key == key) {
                    result = designData;
                }
            });
            return result;
        },

        getData: function () {
            return data;
        },
        getDesign: function () {
            return data.design;
        },
        getTitle: function () {
            return data.title;
        },
        setData: function (newData) {
            data = newData;
        },
        setDesign: function (newDesign) {
            data.design = newDesign;
        },
        setTitle: function (newTitle) {
            data.title = newTitle;
        },

        getPageList: function () {
            var list = [];
            data.slides.forEach(function (slideData) {
                list.push({sid: slideData.sid, title: slideData.items.title.value});
            });
            return list;
        },

        getSlideList: function () {
            return data.slides;
        },
        getSlide: function (page) {
            return data.slides[page];
        },
        getSlideById: function (sid) {
            var result;
            data.slides.forEach(function (slideData) {
                if (slideData.sid == sid) {
                    result = slideData;
                }
            });
            return result;
        },
        getItem: function (page, key) {
            var slideData = data.slides[page] || {};
            var itemMap = slideData.items || {};
            var itemData = itemMap[key] || {};
            return itemData;
        },
        getValue: function (page, key) {
            var slideData = data.slides[page] || {};
            var itemMap = slideData.items || {};
            var itemData = itemMap[key] || {};
            return itemData.value;
        },

        changeTemplate: function (page, template) {
            var slideData = data.slides[page] || {};
            var tplData = manager.getTplByKey(template);
            var hasNewLayout = (slideData.layout != tplData.layout);
            var changedKeys = [];

            slideData.template = template;

            if (hasNewLayout) {
                slideData.layout = tplData.layout;
            }

            $.each(tplData.typeMap, function (key, type) {
                var itemData = slideData.items[key];

                if (hasNewLayout) {
                    itemData.position = {};
                }
                if (!itemData.value) {
                    itemData.type = type;
                    itemData.config = {};
                    changedKeys.push(key);
                }
            });

            return changedKeys;
        },
        setValue: function (page, key, value) {
            var itemData = manager.getItem(page, key);
            itemData.value = value;
        },

        startStorage: function () {
            onStorage = true;
        },
        stopStorage: function () {
            onStorage = false;
        },

        checkItemChanged: function (page, key, outerData) {
            var itemData;

            if (!key) {
                return;
            }

            itemData = manager.getItem(page, key);

            return checkChanged(itemData, outerData);
        },

        reset: function () {
            data = JSON.parse(JSON.stringify(defaultData));
        },
        save: function () {
            var result;
            if (onStorage) {
                result = storage.saveData(data);
                if (result === false) {
                    console.log('storage error! (QuotaExceededError)');
                }
            }
        }
    };

    extend(manager, {
        readMedia: storage.readMedia,
        saveMedia: storage.saveMedia,
        removeMedia: storage.removeMedia,
        getMediaList: storage.getMediaList
    });

    return manager;
});