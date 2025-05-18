﻿﻿window.onload = function() {
	gg5();
	active();
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
	xmlhttp.open("GET", "gg/gg4.html", true);
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
				xx = "";
			} else {
				xx = "-" + xx;
			}
			str = str.replace(/mp3\//g, "mp3" + xx + "/");
			//alert(str);
			document.getElementById("gg5").innerHTML = str;
		}
	}
	xmlhttp.open("GET", "gg/gg4.html", true);
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
