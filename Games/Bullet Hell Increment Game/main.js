//vars
var bullets, guns, player, runTime;
var backgroundImg, bulletImg, gunImg;
function init() {
	runTime = 0;
	loadImages();
	main();
}
function main() {
	update();
	requestAnimationFrame(main);
}
function update() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	if(runTime % 1 == 0) {
		renderBackGround(canvas, ctx);
		updatePlayer(ctx);
		updateBullets(ctx);
		updateText(canvas, ctx);
	}
	runTime = runTime + 1;
}
function renderBackGround(canvas, ctx) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(backgroundImg, 0, 0);
}
function renderBullet(canvas, ctx, x, y, rotation) {
	ctx.rotate = rotation;
	ctx.drawImage(bulletImg, x / bulletImg.width, y / bulletImg.height);
}

function updatePlayer() {
	
}
function updateBullets() {
	
}
function updateText() {
	//document.getElementById("entityNum").innerHTML = entities.length;
}

function loadImages() {
	var bgReady = false;
	backgroundImg = new Image();
	bulletImg = new Image();
	playerImg = new Image();
	backgroundImg.onload = function () {	bgReady = true;	};
	backgroundImg.src = "images/background.jpeg";
	bulletImg.src = "images/bullet.png";
}