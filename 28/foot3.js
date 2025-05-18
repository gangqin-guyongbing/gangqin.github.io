window.onload = function() {
	gg7();
	//active();
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
			if (event.buttons == 1) {
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
			}, 100);
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
			}, 300);
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
		if(getKey == 81) {
			var get3 = get2[0];
			var get4 = get3.getElementsByTagName("audio")[0];
		}
		if(getKey == 65) {
			var get3 = get2[1];
			var get4 = get3.getElementsByTagName("audio")[0];
		}
		if(getKey == 90) {
			var get3 = get2[2];
			var get4 = get3.getElementsByTagName("audio")[0];
		}
		if(getKey == 87) {
			var get3 = get2[3];
			var get4 = get3.getElementsByTagName("audio")[0];
		}
		if(getKey == 83) {
			var get3 = get2[4];
			var get4 = get3.getElementsByTagName("audio")[0];
		}
		if(getKey == 88) {
			var get3 = get2[5];
			var get4 = get3.getElementsByTagName("audio")[0];
		}
		if(getKey == 69) {
			var get3 = get2[6];
			var get4 = get3.getElementsByTagName("audio")[0];
		}
		if(getKey == 68) {
			var get3 = get2[7];
			var get4 = get3.getElementsByTagName("audio")[0];
		}
		if(getKey == 67) {
			var get3 = get2[8];
			var get4 = get3.getElementsByTagName("audio")[0];
		}
		if(getKey == 82) {
			var get3 = get2[9];
			var get4 = get3.getElementsByTagName("audio")[0];
		}
		if(getKey == 70) {
			var get3 = get2[10];
			var get4 = get3.getElementsByTagName("audio")[0];
		}
		if(getKey == 86) {
			var get3 = get2[11];
			var get4 = get3.getElementsByTagName("audio")[0];
		}
		if(getKey == 84) {
			var get3 = get2[12];
			var get4 = get3.getElementsByTagName("audio")[0];
		}
		if(getKey == 71) {
			var get3 = get2[13];
			var get4 = get3.getElementsByTagName("audio")[0];
		}
		if(getKey == 66) {
			var get3 = get2[14];
			var get4 = get3.getElementsByTagName("audio")[0];
		}
		if(getKey == 89) {
			var get3 = get2[15];
			var get4 = get3.getElementsByTagName("audio")[0];
		}
		if(getKey == 72) {
			var get3 = get2[16];
			var get4 = get3.getElementsByTagName("audio")[0];
		}
		if(getKey == 78) {
			var get3 = get2[17];
			var get4 = get3.getElementsByTagName("audio")[0];
		}
		if(getKey == 85) {
			var get3 = get2[18];
			var get4 = get3.getElementsByTagName("audio")[0];
		}
		if(getKey == 74) {
			var get3 = get2[19];
			var get4 = get3.getElementsByTagName("audio")[0];
		}
		if(getKey == 77) {
			var get3 = get2[20];
			var get4 = get3.getElementsByTagName("audio")[0];
		}
		if(getKey == 73) {
			var get3 = get2[21];
			var get4 = get3.getElementsByTagName("audio")[0];
		}
		if(getKey == 75) {
			var get3 = get2[22];
			var get4 = get3.getElementsByTagName("audio")[0];
		}
		if(getKey == 188) {
			var get3 = get2[23];
			var get4 = get3.getElementsByTagName("audio")[0];
		}
		if(getKey == 79) {
			var get3 = get2[24];
			var get4 = get3.getElementsByTagName("audio")[0];
		}
		if(getKey == 76) {
			var get3 = get2[25];
			var get4 = get3.getElementsByTagName("audio")[0];
		}
		if(getKey == 190) {
			var get3 = get2[26];
			var get4 = get3.getElementsByTagName("audio")[0];
		}
		if(getKey == 80) {
			var get3 = get2[27];
			var get4 = get3.getElementsByTagName("audio")[0];
		}
		//=====================================================
		if(getKey == 49) {
			var get3 = get2[0];
			var get4 = get3.getElementsByTagName("audio")[1];
		}
		if(getKey == 50) {
			var get3 = get2[1];
			var get4 = get3.getElementsByTagName("audio")[1];
		}
		if(getKey == 51) {
			var get3 = get2[3];
			var get4 = get3.getElementsByTagName("audio")[1];
		}
		if(getKey == 52) {
			var get3 = get2[4];
			var get4 = get3.getElementsByTagName("audio")[1];
		}
		if(getKey == 53) {
			var get3 = get2[5];
			var get4 = get3.getElementsByTagName("audio")[1];
		}
		if(getKey == 54) {
			var get3 = get2[7];
			var get4 = get3.getElementsByTagName("audio")[1];
		}
		if(getKey == 55) {
			var get3 = get2[8];
			var get4 = get3.getElementsByTagName("audio")[1];
		}
		if(getKey == 56) {
			var get3 = get2[10];
			var get4 = get3.getElementsByTagName("audio")[1];
		}
		if(getKey == 57) {
			var get3 = get2[11];
			var get4 = get3.getElementsByTagName("audio")[1];
		}
		if(getKey == 48) {
			var get3 = get2[12];
			var get4 = get3.getElementsByTagName("audio")[1];
		}
		if(getKey == 189) {
			var get3 = get2[14];
			var get4 = get3.getElementsByTagName("audio")[1];
		}
		if(getKey == 187) {
			var get3 = get2[15];
			var get4 = get3.getElementsByTagName("audio")[1];
		}
		if(getKey == 219) {
			var get3 = get2[17];
			var get4 = get3.getElementsByTagName("audio")[1];
		}
		if(getKey == 221) {
			var get3 = get2[18];
			var get4 = get3.getElementsByTagName("audio")[1];
		}
		if(getKey == 186) {
			var get3 = get2[19];
			var get4 = get3.getElementsByTagName("audio")[1];
		}
		if(getKey == 222) {
			var get3 = get2[21];
			var get4 = get3.getElementsByTagName("audio")[1];
		}
		if(getKey == 220) {
			var get3 = get2[22];
			var get4 = get3.getElementsByTagName("audio")[1];
		}
		if(getKey == 16) {
			var get3 = get2[24];
			var get4 = get3.getElementsByTagName("audio")[1];
		}
		if(getKey == 13) {
			var get3 = get2[25];
			var get4 = get3.getElementsByTagName("audio")[1];
		}
		if(getKey == 191) {
			var get3 = get2[26];
			var get4 = get3.getElementsByTagName("audio")[1];
		}
		if(get4.currentTime) {
			get4.currentTime = 0;
		}
		get4.play();
		get3.style.backgroundColor = "yellow";
		setTimeout(function() {
			get3.style.backgroundColor = "white";
		}, 300);
	}

}

function gg7() {
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
	xmlhttp.open("GET", "gg/gg5.html", true);
	xmlhttp.send();
}
