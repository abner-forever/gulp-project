function randomInt(min, max) {
	return parseInt(Math.random() * (max - min + 1) + min);
}

function randomColor() {
	var R = parseInt(Math.random() * 256).toString(16);
	var G = parseInt(Math.random() * 256).toString(16);
	var B = parseInt(Math.random() * 256).toString(16);
	return (R.length < 2 ? "0" + R : R) + (G.length < 2 ? "0" + G : G) + (B.length < 2 ? "0" + B : B);
}

function addEvent(obj, eventtype, fun, cancel) {
	if (obj.attachEvent) {
		obj.attachEvent("on" + eventtype, fun);
	} else {
		obj.addEventListener(eventtype, fun, cancel);
	}
}

function getElementsByClassName(classname) {
	var list = document.getElementsByTagName("*");
	var arr = [];
	for (var i = 0; i < list.length; i++) {
		if (list[i].className.contains(classname)) {
			arr.push(list[i]);
		}
	}
	return arr;
}
function draggedele(options) {
	var ele = options.ele;
	var box = options.ranger;
	ele.onmousedown = function (e) {
		var e = e || window.event;
		var resX = e.offsetX; //鼠标距离点击元素的位置
		var resY = e.offsetY;
		document.onmousemove = function (e) {
			ele.style.margin = 0;
			var e = e || window.event;
			var _left = e.clientX - resX; //移动元素距离浏览器的位置
			var _top = e.clientY - resY;
			if (!box) { //是否存在父元素 若不存在则按照浏览器窗口拖拽
				ele.style.left = Math.max(0, Math.min(window.innerWidth - ele.offsetWidth, _left)) + "px";
				ele.style.top = Math.max(0, Math.min(window.innerHeight - ele.offsetHeight, _top)) + "px";
			} else { //拖拽效果限定在父元素里面，不会出去
				if (getStyle(box).position == "static") { //判断复元素是否有定位
					//父元素没有定位
					ele.style.margin = 0; //消除所拖拽元素的margin的影响
					ele.style.left = Math.max(box.offsetLeft, Math.min(_left, box.offsetLeft + box.offsetWidth - ele.offsetWidth)) +
						"px";
					ele.style.top = Math.max(box.offsetTop, Math.min(_top, box.offsetTop + box.offsetHeight - ele.offsetHeight)) +
						"px";
					// console.log("父元素没有定位");
				} else {
					//父元素有定位
					ele.style.margin = 0;
					ele.style.left = Math.max(0, Math.min(_left - box.offsetLeft, box.offsetWidth - ele.offsetWidth)) + "px";
					ele.style.top = Math.max(0, Math.min(_top - box.offsetTop, box.offsetHeight - ele.offsetHeight)) + "px";
					// console.log("父元素有定位");
				}
			}
			options.moving("pageX:" + ele.style.left, "pageY:" + ele.style.top);
		}
	}
	document.onmouseup = function () {
		document.onmousemove = null;
		options.end();
	}
}