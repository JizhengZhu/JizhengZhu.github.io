//定义一个数组变量存放几个数据，一个定时器，一个标识变量
var data=['叶林华','黎滔','黄军','邓海燕','邵肖凤','陈小惠','陈思捷','杨泳婷','曾小明','叶佩钗','叶得荣','吴碧婵','李梦慧','苏杰','向丽群','沈志荣','彭冉','蒋长生','梁文娟','黎才家','王世坤','曹宝详','王功喜','舒易均','王昌政','王昌由','黄尚高','李汉桂','邹爱辉','梁宝霞','陆德胜','曾文峰','周冬梅','朱瑛','叶景安','陈世军','龙佩','廖文海','朱轶丽','刘小蒿','王清丽','罗禹凡','梁登昆'],
	timer=null
	flag=0;
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
	var oTitle=getByClass('title')[0],
		begin=getByClass('begin')[0],
		stop=getByClass('stop')[0];

	//开始抽奖
	begin.onclick=fnplay;
	stop.onclick=fnstop;

	//键盘事件 针对的是整个document
	document.onkeyup=fnkey;

	function fnplay(){
	//var that=this;//这里指的是begin这个按钮 这里暂时不考虑这个。
	//每个开始之前关闭一下定时器，不然每次按click的时候容易加快速度，以至于整个浏览器容易奔溃  
		clearInterval(timer);
		//定义一个定时器
		timer=setInterval(function(){
			//Math.random()拿到的是0-1之前的数字，去乘数组的长度 再取整数可以拿到想要的数组下标
			var random=Math.floor(Math.random()*data.length); //floor去取整
			//把拿到的数组的值写进去
			oTitle.innerHTML=data[random];
		},50);
		//按开始之后，让颜色改变一下
		begin.style.background="#999";
	}

	function fnstop(){
		clearInterval(timer);
		//恢复为原来的颜色
		begin.style.background="#708098";
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
		}
	}
}




