window.onload = function() {
	//gg3();
	gg2();
	gg1();
	gg5();
	active();
	get();
	//foot();
	document.onkeydown = function() {
		getKeyboard2();
	};
	document.onmousedown = function() {
		getget();
		getget2();
	};
}

function getget() {
	var xx = document.getElementById("gg5");
	var d = xx.getElementsByTagName('li');
	for(var i = 0; i < d.length; i++) {
		d[i].index = i;
		d[i].addEventListener('mouseover', function(event) {
			if (event.buttons === 1) {
    //alert('鼠标左键被按下了');
			//alert(this.index);
			var get3 = d[this.index];
			var get4 = get3.getElementsByTagName("audio")[0];
			if(get4.currentTime) {
				get4.currentTime = 0;
			}
			get4.play();
			get3.style.backgroundColor = "yellow";
			setTimeout(function() {
				get3.style.backgroundColor = "white";
			}, 200);
			}
		})
	}
}
function getget2() {
	var xx = document.getElementById("gg5");
	var d = xx.getElementsByTagName('li');
	for(var i = 0; i < d.length; i++) {
		d[i].index = i;
		d[i].addEventListener('click', function(event) {
			//alert(this.index);
			var get3 = d[this.index];
			var get4 = get3.getElementsByTagName("audio")[0];
			if(get4.currentTime) {
				get4.currentTime = 0;
			}
			get4.play();
			get3.style.backgroundColor = "yellow";
			setTimeout(function() {
				get3.style.backgroundColor = "white";
			}, 400);
		})
	}
}
function getKeyboard2() {
	var event = window.event || arguments.callee.caller.arguments[0],
		getKey = event.keyCode;
	if(getKey == 123) { //禁止F12功能键
		//window.event.returnValue = false;
		//getKey = false;
	} else {
		var get1 = document.getElementById("low2");
		var get2 = get1.getElementsByTagName("li");
		var get3 = get2[getKey - 65];
		var get4 = get3.getElementsByTagName("audio")[0];
		if(get4.currentTime) {
			get4.currentTime = 0;
		}
		get4.play();
	}
	get3.style.backgroundColor = "yellow";
	setTimeout(function() {
		get3.style.backgroundColor = "white";
	}, 500);
}

function gg1() {
	var xmlhttp;
	if(window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("gg1").innerHTML = xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET", "../gg/gg1.html", true);
	xmlhttp.send();
}

function gg5() {
	var xmlhttp;
	if(window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("gg5").innerHTML = xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET", "../gg/gg5.html", true);
	xmlhttp.send();
}

function ggx(xx) {
	var xmlhttp;
	if(window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var str = xmlhttp.responseText;
			if(xx == "2秒") {
				xx="";
			} else {
				xx="-"+xx;
			}
			str = str.replace(/mp3\//g, "mp3" + xx + "/");
			//alert(str);
			document.getElementById("gg5").innerHTML = str;
		}
	}
	xmlhttp.open("GET", "../gg/gg5.html", true);
	xmlhttp.send();
}

function active() {
	var obj = document.getElementById("se"); //定位id
	obj.addEventListener("change", function() {
		var index = obj.selectedIndex; // 选中索引
		var text = obj.options[index].text; // 选中文本
		var value = obj.options[index].value; // 选中值
		ggx(value);
	})

}



function foot() {
	var xmlhttp;
	if(window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("foot").innerHTML = xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET", "../gg/footer.html", true);
	xmlhttp.send();

}

function gg2() {
	var xmlhttp;
	if(window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("gg2").innerHTML = xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET", "../gg/gg2.html?id=1", true);
	xmlhttp.send();
}

function gg3() {
	var xmlhttp;
	if(window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("gg3").innerHTML = xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET", "../gg/gg3.html?id=1", true);
	xmlhttp.send();
}
function get() {
	  //var d = xx.getElementsByTagName('li');
	  var arr = []; //创建一个空数组
	  var mmp = document.getElementById("neirong2");
	  //alert(mmp);
	  var xx=mmp.innerHTML;
	  xx=xx.replace(/<p>/g,'');
	  xx=xx.replace(/<\/p>/g,'');
	  xx=xx.replace(/<\span>/g,'');
	  xx=xx.replace(/<\/span>/g,'');
	  //alert('内容：'+xx);
	  xx=qingli(xx);
	  //alert(xx);
	  xx=daxiaoxie(xx);
	  //alert(xx);
	  for(var i=0;i<xx.length;i++){
		  var yy=chaweizhi(xx[i]);
		  //alert(yy);
		  if(yy!=100){
			  arr.push(yy);
		  }
	  }
	  //alert(arr);
	  var min=getmin(arr);
	  //alert('最小：'+min);
	  if(min>13){
		  chuli(-14,"超低");
		  chuli(-7,"低");
	  }else{
		  if(min>6){
			  chuli(-7,"低");
		  }
	  }
	  var max=getmax(arr);
	  //alert('最大：'+max);
	  if(max<12){
		  chuli(7,"高");
		  chuli(14,"超高");
	  }else{
		  if(max<19){
			  chuli(7,"高");
		  }
	  }
	  arr.length = 0;//数组清空
    }

	function chuli(yy,banben) {
		var neirong='';
		var hang='';
		var mmp = document.getElementById("neirong2");
	    var xx=mmp.innerHTML;
	    xx=xx.replace(/<p>/g,'');
	    xx=xx.replace(/<\/p>/g,'');
	    //alert(xx);
		xx=qingli(xx);
		//alert(xx);
	    xx=daxiaoxie(xx);
		//alert("haha");
		var kk=xx.split(/[\n]/g);//字符串分割，回车键，分隔符
		//alert(kk);
		var arr2 = []; //创建一个空数组
	    let arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
	    for(var i=0;i<kk.length;i++){
			for(var a=0;a<kk[i].length;a++){
				var mm=kk[i][a];
				//alert(mm);
				var weizhi=chaweizhi(mm);
				//alert(weizhi);
				if(weizhi==100){
					hang=hang+mm;
				}else{
					var xinweizhi=weizhi+yy;
					hang=hang+arr[xinweizhi];
				}
		    }
			var kong = new RegExp(' ', "g");//这里的字符串替换，是重点。
			hang=hang.replace(kong,'');// 
			var kong2 = new RegExp('	', "g");//这里的字符串替换，是重点。
			hang=hang.replace(kong2,'');// 
			if(hang!=""){
				neirong=neirong +'<p>'+hang+'</p>';
				hang='';
			}
		}
		//增加元素,neirong
		add(neirong,banben);
    }

	function qingli(xx){
		
		var kk=xx.split(/</g);//字符串分割，回车键，分隔符
		var mm=kk[0];
		for(var i=1;i<kk.length;i++){
			var kk2=kk[i].split(/>/g);//字符串分割，回车键，分隔符
			//alert(kk2[1]);
			mm=mm+kk2[1];
		}
		//alert(mm);
		mm=mm.replace(/&nbsp;/g,'');
		return mm;
	}

    function add(xx,banben) {
		//const ol = document.querySelector("ol");
        //const spe = document.getElementById("spe");
        const kk = document.getElementById("div233");
		var html=kk.innerHTML;
        //const swa = document.createElement("div");
		mm1='<input id="tab-'+banben+'" type="radio" name="grp"><label for="tab-'+banben+'">'+banben+'音版</label><div>';
		mm2='</div>';
        kk.innerHTML = html+mm1+xx+mm2;
		//kk.appendChild(swa);//将b2追加到div2里面的最后面
        //ol.insertBefore(swa,spe);
    }

	function chaweizhi(kk) {
		var xx=100;
	    let arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
	    for(var i=0;i<arr.length;i++){
			if(kk==arr[i]){
				xx=i;
				break;
			}
		}
		return xx;
    }
	function daxiaoxie(kk) {
		let xiao = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
	    let da = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
	    for(var i=0;i<da.length;i++){
			var yy = new RegExp(xiao[i], "g");//这里的字符串替换，是重点。
			kk=kk.replace(yy,da[i])
		}
		return kk;
    }
	function getmin(kk){
		var len=kk.length;
		var min=kk[0];
		for(var i=1;i<len;i++){
			if(kk[i]<min){
				min=kk[i];
			}
		}
		return min;
	}
	function getmax(kk){
		var len=kk.length;
		var max=kk[0];
		for(var i=1;i<len;i++){
			if(kk[i]>max){
				max=kk[i];
			}
		}
		return max;
	}