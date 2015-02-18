//vars
var bullets, guns, player, runTime;
var backgroundImg, bulletImg, gunImg, missileImg;
function init() {
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	guns = [], bullets = [], missiles = [];
	player = new player(document.getElementById('canvas'));
	runTime = 0;
	loadImages();
	main();
}
function main() {
	update();
	requestAnimationFrame(main);
}
function update() {
	if(runTime % 1 == 0) {
		renderBackGround(canvas, ctx);
		updatePlayer(ctx);
		updateEnemys(ctx);
		//updateText();
	}
	if(runTime % 5 == 0) {
		makeGun(Math.random() * (canvas.width - 20) + 10, 20, "down");
	}
	runTime = runTime + 1;
}

function updatePlayer() {
	
}
function updateEnemys() {
	for(var i=0;i<bullets.length;i++) {
		bullets[i].update();
		bullets[i].draw(ctx);
	}
	for(var i=0;i<guns.length;i++) {
		guns[i].update();
		guns[i].draw(ctx);
	}
	for(var i=0;i<missiles.length;i++) {
		missiles[i].update();
		missiles[i].draw(ctx)
	}
}
function updateText() {
	document.getElementById("guns").innerHTML = guns;
	document.getElementById("bullets").innerHTML = bullets;
}


function renderBackGround(canvas, ctx) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(backgroundImg, 0, 0);
}
function renderGun(ctx, x, y, rotation) {
	ctx.drawImage(gunImg,x,y);
}
function renderBullet(ctx, x, y, rotation) {
	ctx.rotate = rotation;
	ctx.drawImage(bulletImg, x, y);
}
function renderMissile(ctx, x, y, rotation) {
	ctx.save();
	ctx.rotate(15*Math.PI/180);
	ctx.drawImage(missileImg, x, y);
	ctx.restore();
}

function loadImages() {
	backgroundImg = new Image();
	playerImg = new Image();
	bulletImg = new Image();
	gunImg = new Image();
	missileImg = new Image();
	backgroundImg.src = "images/background.jpeg";
	bulletImg.src = "images/bullet.png";
	gunImg.src = "images/gun.png";
	missileImg.src = "images/missile.png";
}