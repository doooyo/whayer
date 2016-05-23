define(["template","jquery","layer","ztree"],function(template,$,layer,ztree){
	var statusMmonitor = {
		zTreeObj:null,
		init:function(){
			var _this = this;
			template.load(["/controller/statusmonitor/statusmonitor"],function(statemonitor){
				 $("#content").html(statemonitor);
				_this.attatchEvent();
				_this.initTree();
				_this.initTabs(0);
			});
		},
		attatchEvent:function(){
			var _this = this;
			$("#smTab li a").on("click",function(e){
				var index = $(e.currentTarget).parent().index();
				_this.initTabs(index);
			});
		},
		initTree:function(){
			var _this = this;
			var zTreeNodes = [
				{id:1, pId:0, name: "四川省电力公司中心平台"},
				{id:2, pId:1, name: "成都市"},
				{id:3, pId:2, name: "华三平台"},
				{id:4, pId:3, name: "宇视ECR2104"},
				{id:5, pId:3, name: "DVR001"},
				{id:6, pId:1, name: "武侯变220KV变电站"},
				{id:7, pId:6, name: "25_SDK"},
				{id:8, pId:6, name: "环境量采集器164"},
			];
			var setting = {	data: {
		        simpleData: {
		            enable: true,
		            pIdKey: 'pId'
		        }
		    }};
			var treeObj = $.fn.zTree.init($("#tree1"), setting, zTreeNodes);
			treeObj.expandAll(true);
			_this.zTreeObj = treeObj;
		},
		initTabs:function(index){
			if(index==0){
				var diskStatus1 = "./controller/statusmonitor/diskStatus";
				require([diskStatus1],function(diskStatus){
					diskStatus.init();
				});
			}else if(index==1){		
				var onOffLineStatus1 = "./controller/statusmonitor/onOffLineStatus";		
				require([onOffLineStatus1],function(onOffLineStatus){
					onOffLineStatus.init();
				});
			}else if(index==2){
				var videoQuality1 = "./controller/statusmonitor/videoQuality";
				require([videoQuality1],function(videoQuality){
					videoQuality.init();
				});
			}else{

			}
		}
	};
	return statusMmonitor;
});