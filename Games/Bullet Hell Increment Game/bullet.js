var bullet = function(x, y, dir) {
	this.x = x;
	this.y = y;
	this.rotation = dir;
	this.speed = 3;
}

bullet.prototype.move = function() {
	this.x = Math.cos(this.rotation) * this.speed;
	this.y = Math.sin(this.rotation) * this.speed;
}
bullet.prototype.draw = function() {
	renderBullet(this.x, this.y, this.rotation);
}
bullet.prototype.checkBound = function() {
	
}
