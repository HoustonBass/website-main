function player() {
	this.health = 1;
	this.x = canvas.width/2;
	this.y = 9 * canvas.height / 10;
	this.speed = 5;

	this.update = function() {
		//this.move();
		this.draw();
	}
	
	this.move = function(x, y) {
		this.x = this.x + x*this.speed;
		this.y = this.y + y*this.speed;
	}
	this.draw = function() {
		ctx.drawImage(playerImg, this.x, this.y);
	}
}