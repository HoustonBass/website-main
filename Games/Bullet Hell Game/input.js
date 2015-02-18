function checkKeys() {
	//debug
	if(keys[49])
		makeGun(Math.random() * (canvas.width - 20) + 10, 20, "down");
	//player movement
	if(keys[87])
		player.move(0,-1);
	if(keys[65])
		player.move(-1,0);
	if(keys[83])
		player.move(0,1);
	if(keys[68])
		player.move(1,0);
}


document.addEventListener("keydown", keyboardDown);
document.addEventListener("keyup", keyboardUp);
keys = [];

function keyboardDown(e) {
	keys[e.keyCode] = true;
}
function keyboardUp(e) {
	delete keys[e.keyCode];
}