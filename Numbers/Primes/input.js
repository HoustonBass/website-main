document.addEventListener("keydown", keyboardHendler);

function keyboardHendler(e) {
	document.getElementById("lastKey").innerHTML = e.keyCode;
	if(e.keyCode == 82)//tab
		toggleRun();
}