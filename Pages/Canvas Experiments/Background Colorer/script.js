function load() {
	var box = document.getElementById("box");
	box.addEventListener("click", mouseOver);
	box.addEventListener("mousemove", mouseOver);
	//box.addEventListener("mouseout", mouseOut)
}
function mouseOver(e) {
	var x = e.pageX - this.offsetLeft;
	var y = e.pageY -this.offsetTop;
	var coor = "X coords: " + x + ", Y coords: " + y;
	document.getElementById("demo").innerHTML = coor;
	var width = document.getElementById("box").offsetWidth;
	var wint = parseInt(255 * x / width);
	var height = document.getElementById("box").offsetTop;
	var hint = parseInt(255 * y / height);
	document.getElementById("demo").innerHTML +='<br>Width: ' + width + '<br>Height: ' + height;
	document.getElementById("log").innerHTML = 'background-color:rgb(' + wint +"," + hint + ",50)";
	//.style.cssText
}
function mouseOut() {
	document.getElementById("demo").innerHTML = "";
	document.getElementById("log").innerHTML = "";	
}