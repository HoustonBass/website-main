//vars
var lastID, entities, runTime;
var then, canvas, ctx, bgReady, bgImage, heroImage, monsterImage;
var paused, redScore, blueScore;
function init() {
	redScore = 0;
	blueScore = 0;
	paused = false;
	runTime = 0;
	lastID = 0;
	entities = [];
	deadpool = [];
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext('2d');
	
	loadImages();
	
	main();
}
function main() {
	update();
	requestAnimationFrame(main);
}
function render() {
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}
	for(var i=0; i<entities.length; i++) {
		if(entities[i].team == "red")
			ctx.drawImage(heroImage, entities[i].x, entities[i].y);
		else
			ctx.drawImage(monsterImage, entities[i].x, entities[i].y);
			
	}
}

function update() {
	if(runTime % 1 == 0) {
		updateText();
		render();
	}
	if(runTime % 1 == 0) {
		if(!paused)
			updateEntities();
	}
	if(runTime % 200 == 0) {
		if(!paused) {
			makeSoldier("red");
			makeSoldier("blue");
		}
	}
	runTime = runTime + 1;
}
function updateText() {
	document.getElementById("entityNum").innerHTML = entities.length;
	document.getElementById("deadpoolNum").innerHTML = deadpool.length;
	document.getElementById("redScore").innerHTML = redScore;
	document.getElementById("blueScore").innerHTML = blueScore;
	document.getElementById("tickNum").innerHTML = runTime;
	document.getElementById("entityList").innerHTML = entities;
	document.getElementById("deadpool").innerHTML = deadpool;
}
function updateEntities() {
	for(var i=0; i< entities.length; i++) {
		entities[i].updateBehavior();
	}
	for(var i=0; i<entities.length; i++) {
		entities[i].attackTick = entities[i].attackTick + 1;
	}
}
function loadImages() {
	bgReady = false;
	bgImage = new Image();
	heroImage = new Image();
	monsterImage = new Image();
	bgImage.onload = function () {	bgReady = true;	};
	bgImage.src = "images/background.png";
	heroImage.src = "images/hero.png";
	monsterImage.src = "images/monster.png";
}
function info() {
	console.log("Entities: ");
	checkEntities();
	console.log("Deadpool: ");
	checkDeadpool();
}
function toggleRun() {
	paused = !paused;
}
function hurtEverything(e) {
	for (i=0; i<entities.length; i++) {
		entities[i].hurt(99);
	}
}
function checkEntities() {
	for(var i=0; i<entities.length; i++) {
		console.log(entities[i]);
	}
}
function checkDeadpool() {
	for(var i=0; i<deadpool.length; i++) {
		console.log(deadpool[i]);
	}
}


