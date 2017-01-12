//定义一个数组变量存放几个数据，一个定时器，一个标识变量
var data=[
'彭金萍',
'吕增辉',
'吕绍枫',
'朱巧云',
'张文君',
'曹琳娇',
'吕衡',
'李希马妍',
'戴梦',
'姚艳',
'张翼',
'黄馨雅',
'黄远',
'李玉隽',
'张杰',
'张泽凯',
'黄漫妮',
'吴梓瑶',
'吴欣彤',
'冯文锋',
'赖志军',
'赖熙元',
'欧恩',
'欧政',
'金兰',
'谢军',
'谢子萱',
'许嘉骏',
'黄燕',
'叶靖豪',
'叶洁容',
'叶宇熙',
'魏小琴',
'曾超炜',
'曾雨柔',
'胡晓妹',
'吴静',
'游媛媛',
'高梦真',
'李孔炼',
'李秀玲',
'马人凤',
'曹永明',
'曾欣昕',
'周鹏',
'麦宝文',
'繆潘',
'王秀伟',
'辛志勇',
'邓文祥',
'张碧宏',
'王彬',
'周福伟',
'邓云华',
'金春苗',
'罗鹏',
'陶玲',
'甘铭祥',
'陈家荣',
'任伟峰',
'任灏钊',
'曾文慧',
'曹炜棠'],
	timer=null
	flag=0
	fullscreen = 0;
//封装一个方法拿到 通过class拿到的标签 注意拿到的时候是个数组对象，记得最后[0]，取一下第一个对象
function getByClass(clsName,parent){
	var oParent=parent?document.getElementById(parent):document,
		eles=[],
		elements=oParent.getElementsByTagName('*');

	for(var i=0;i<elements.length;i++){
		if(elements[i].className == clsName){
			eles.push(elements[i]);
		}
	}
	return eles;
}
//函数开始
window.onload=function(){
	var ary=data;

	var oTitle=getByClass('title')[0];

	var random=0;

	//键盘事件 针对的是整个document
	document.onkeyup=fnkey;

	function fnplay(){
	//var that=this;//这里指的是begin这个按钮 这里暂时不考虑这个。
	//每个开始之前关闭一下定时器，不然每次按click的时候容易加快速度，以至于整个浏览器容易奔溃  
		clearInterval(timer);
		//定义一个定时器
		timer=setInterval(function(){
			//Math.random()拿到的是0-1之前的数字，去乘数组的长度 再取整数可以拿到想要的数组下标
			random=Math.floor(Math.random()*data.length); //floor去取整
			//把拿到的数组的值写进去
			oTitle.innerHTML=data[random];
		},50);
	}

	function fnstop(){
		clearInterval(timer);
		ary.splice(random,1);
	}

	function fnkey(event){
		console.log(event.keyCode);
		event=event ||window.event;
		if(event.keyCode == 13){  //当按下回车键的时候
			//一开始是0的状态，我们改变。
			if(flag == 0){
				fnplay();
				//设置为1的状态，停止改变
				flag =1;
			}else{
				fnstop();
				flag=0;
			}
		} else if (event.keyCode == 32) {
			if (fullscreen == 0) {
				// 启动全屏模式  
				launchFullScreen(document.documentElement); // 整个页面 
				fullscreen = 1;
			} else {
				// 取消全屏  
				cancelFullscreen();  
				fullscreen = 0;
			}
		}
	}
	function cancelFullscreen() {  
	  	if(document.cancelFullScreen) {  
	    	document.cancelFullScreen();  
	  	} else if(document.mozCancelFullScreen) {  
	    	document.mozCancelFullScreen();  
	  	} else if(document.webkitCancelFullScreen) {  
	    	document.webkitCancelFullScreen();  
	  	}  
	}  
  
	function launchFullScreen(element) {  
	  	if(element.requestFullScreen) {  
	    	element.requestFullScreen();  
		} else if(element.mozRequestFullScreen) {  
	    	element.mozRequestFullScreen();  
	  	} else if(element.webkitRequestFullScreen) {  
	    	element.webkitRequestFullScreen();  
	  	}  
	}  
}




