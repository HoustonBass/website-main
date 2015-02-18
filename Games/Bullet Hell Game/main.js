//vars
var bullets, guns, player, runTime;
var backgroundImg, bulletImg, gunImg, missileImg;
function init() {
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	guns = [], bullets = [], missiles = [];
	player = new player();
	runTime = 0;
	loadImages();
	main();
}
function main() {
	update();
	requestAnimationFrame(main);
}
function update() {
	renderBackGround(canvas, ctx);
	updateEntities();
	updateText();
	if(runTime % 1 == 0) {
		//nothing yet
	}
	if(runTime % 5 == 0) {
		makeGun(Math.random() * (canvas.width - 20) + 10, 20, "down");
	}
	runTime = runTime + 1;
}

function updateEntities() {
	checkKeys()
	player.update();
	for(var i=0;i<bullets.length;i++) {
		bullets[i].update();
	}
	for(var i=0;i<guns.length;i++) {
		guns[i].update();
	}
	for(var i=0;i<missiles.length;i++) {
		missiles[i].update();
	}
}


function updateText() {
	document.getElementById("guns").innerHTML = guns.length;
	document.getElementById("bullets").innerHTML = bullets.length;
}
function renderBackGround() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(backgroundImg, 0, 0);
}
function loadImages() {
	backgroundImg = new Image();
	playerImg = new Image();
	bulletImg = new Image();
	gunImg = new Image();
	missileImg = new Image();
	backgroundImg.src = "images/background.jpeg";
	playerImg.src = "images/player.png";
	bulletImg.src = "images/bullet.png";
	gunImg.src = "images/gun.png";
	missileImg.src = "images/missile.png";
}

function checkBounds(x,y) {
	if(x + 15 > canvas.width || y + 10 > canvas.height) 
		return true;
	else
		return false;
}