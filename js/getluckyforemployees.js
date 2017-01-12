//定义一个数组变量存放几个数据，一个定时器，一个标识变量
var data=[
'叶林华',
'黎滔',
'黄军',
'邓海燕',
'邵肖凤',
'陈小惠',
'陈思捷',
'杨泳婷',
'曾小明',
'叶佩钗',
'叶得荣',
'吴碧婵',
'李梦慧',
'苏杰',
'向丽群',
'沈志荣',
'彭冉',
'蒋长生',
'梁文娟',
'黎才家',
'王世坤',
'曹宝详',
'王功喜',
'舒易均',
'王昌政',
'王昌由',
'黄尚高',
'李汉桂',
'邹爱辉',
'梁宝霞',
'陆德胜',
'曾文峰',
'周冬梅',
'朱瑛',
'叶景安',
'陈世军',
'龙佩',
'廖文海',
'朱轶丽',
'刘小蒿',
'王清丽',
'罗禹凡',
'梁登昆'],
	timer=null
	flag=0
	count = 0
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

	var random=0;

	var oTitle=getByClass('title')[0];

	var oLucker3_0=getByClass('lucker3_0')[0];
	var oLucker3_1=getByClass('lucker3_1')[0];
	var oLucker3_2=getByClass('lucker3_2')[0];
	var oLucker3_3=getByClass('lucker3_3')[0];
	var oLucker3_4=getByClass('lucker3_4')[0];
	var oLucker3_5=getByClass('lucker3_5')[0];
	var oLucker3_6=getByClass('lucker3_6')[0];
	var oLucker3_7=getByClass('lucker3_7')[0];

	var oLucker2_0=getByClass('lucker2_0')[0];
	var oLucker2_1=getByClass('lucker2_1')[0];
	var oLucker2_2=getByClass('lucker2_2')[0];
	var oLucker2_3=getByClass('lucker2_3')[0];

	var oLucker1_0=getByClass('lucker1_0')[0];
	var oLucker1_1=getByClass('lucker1_1')[0];

	var oLucker0_0=getByClass('lucker0_0')[0];
	//键盘事件 针对的是整个document
	document.onkeyup=fnkey;

	function fnplay(){
		count++;

	//var that=this;//这里指的是begin这个按钮 这里暂时不考虑这个。
	//每个开始之前关闭一下定时器，不然每次按click的时候容易加快速度，以至于整个浏览器容易奔溃  

		clearInterval(timer);
		//定义一个定时器
		timer=setInterval(function(){
			//Math.random()拿到的是0-1之前的数字，去乘数组的长度 再取整数可以拿到想要的数组下标
			random=Math.floor(Math.random()*ary.length); //floor去取整
			//把拿到的数组的值写进去
			oTitle.innerHTML = ary[random];
		},50);
	}

	function fnstop(){
		clearInterval(timer);

		switch(count) {
			case 1:
				oLucker3_0.innerHTML=oTitle.innerHTML;
				break;
			case 2:
				oLucker3_1.innerHTML=oTitle.innerHTML;
				break;
			case 3:
				oLucker3_2.innerHTML=oTitle.innerHTML;
				break;
			case 4:
				oLucker3_3.innerHTML=oTitle.innerHTML;
				break;
			case 5:
				oLucker3_4.innerHTML=oTitle.innerHTML;
				break;
			case 6:
				oLucker3_5.innerHTML=oTitle.innerHTML;
				break;
			case 7:
				oLucker3_6.innerHTML=oTitle.innerHTML;
				break;
			case 8:
				oLucker3_7.innerHTML=oTitle.innerHTML;
				break;
			case 9:
				oLucker2_0.innerHTML=oTitle.innerHTML;
				break;
			case 10:
				oLucker2_1.innerHTML=oTitle.innerHTML;
				break;
			case 11:
				oLucker2_2.innerHTML=oTitle.innerHTML;
				break;
			case 12:
				oLucker2_3.innerHTML=oTitle.innerHTML;
				break;
			case 13:
				oLucker1_0.innerHTML=oTitle.innerHTML;
				break;
			case 14:
				oLucker1_1.innerHTML=oTitle.innerHTML;
				break;
			case 15:
				oLucker0_0.innerHTML=oTitle.innerHTML;
				break;
			default:
				break;
		}
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




