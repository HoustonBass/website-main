document.addEventListener("keydown", keyboardHandler);

function keyboardHandler(e) {
	//document.getElementById("lastKey").innerHTML = e.keyCode;
	
	if(e.keyCode == 65) //a
		makeGun(Math.random() * (canvas.width - 20) + 10, 20, "down");
	/*
	if(e.keyCode == 83) //s
		
	if(e.keyCode == 81) //q
		
	if(e.keyCode == 87) //w
		
	if(e.keyCode == 69)//e
		
	if(e.keyCode == 82)//tab
		
	*/
}