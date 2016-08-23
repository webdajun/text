$(function(){
	var arr=[
			{name:"要死就一定要死在",geshou:"选秀歌手",time:"2014-8-6"},
			{name:"泡沫(邓紫棋)",geshou:"邓紫棋",time:"2014-8-6"},
			{name:"逃出地球",geshou:"影视插曲",time:"2014-8-6"},
			{name:"小木偶的话",geshou:"影视插曲",time:"2014-8-6"},
			{name:"童话",geshou:"光良",time:"2014-8-6"},
			{name:"老男孩(扫弦)",geshou:"筷子兄弟",time:"2014-8-6"},
			{name:"最重要的小事",geshou:"五月天",time:"2014-8-6"},
			{name:"卡农简单版",geshou:"押尾桑",time:"2014-8-6"},
			{name:"未闻花名",geshou:"动漫游戏",time:"2014-8-6"},
			{name:"小星星（汪苏泷）",geshou:"汪苏泷",time:"2014-8-6"},
			{name:"要死就一定要死在",geshou:"选秀歌手",time:"2014-8-6"},
			{name:"泡沫(邓紫棋)",geshou:"邓紫棋",time:"2014-8-6"},
			{name:"逃出地球",geshou:"影视插曲",time:"2014-8-6"},
			{name:"小木偶的话",geshou:"影视插曲",time:"2014-8-6"},
			{name:"童话",geshou:"光良",time:"2014-8-6"},
			{name:"老男孩(扫弦)",geshou:"筷子兄弟",time:"2014-8-6"},
			{name:"最重要的小事",geshou:"五月天",time:"2014-8-6"},
			{name:"卡农简单版",geshou:"押尾桑",time:"2014-8-6"},
			{name:"未闻花名",geshou:"动漫游戏",time:"2014-8-6"},
			{name:"小星星（汪苏泷）",geshou:"汪苏泷",time:"2014-8-6"}
		]
	var dl=$(".list-dl");
	for(var i=0;i<arr.length;i++){
		var dd='<dd>'+
					'<h3 class="name fl"><a href="#">'+arr[i].name+'</a></h3>'+
					'<span class="geshou fl"><a href="#">'+arr[i].geshou+'</a></span>'+
					'<span class="time fr"><a href="#">'+arr[i].time+'</a></span>'+
				'</dd>'
		dl.append(dd);
	}
	 $(".pages ul").pagination({
        items: 1000,
        itemsOnPage: 50,
        cssStyle: 'light-theme'
    });
})