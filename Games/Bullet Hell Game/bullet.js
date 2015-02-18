function bullet(x, y, dir) {
	this.x = x;
	this.y = y;
	this.rotation = dir;
	this.speed = 5;
	
	this.move = function() {
		//this.x = Math.cos(this.rotation) * this.speed;
		this.y = this.y + Math.sin(Math.PI / 2) * this.speed + this.speed;
	}
	this.draw = function(ctx) {
		renderBullet(ctx, this.x, this.y, this.rotation);
	}
	this.update = function() {
		this.move();
		//check quad tree for for collision with player
	}	
}
function makeBullet(x,y,dir) {
	bullets.push(new bullet(x,y,dir));
}