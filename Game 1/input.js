document.addEventListener("keydown", keyboardHendler);

function keyboardHendler(e) {
	document.getElementById("lastKey").innerHTML = e.keyCode;
	if(e.keyCode == 65) //a
		makeSoldier("red");
	if(e.keyCode == 83) //s
		makeSoldier("blue");
	if(e.keyCode == 81) //q
		hurtEverything(1);
		//updatePaths();
	if(e.keyCode == 87) //w
		info();
		//updateEntities();
	if(e.keyCode == 69)//e
		checkDeadpool();
	if(e.keyCode == 82)//tab
		toggleRun();
}