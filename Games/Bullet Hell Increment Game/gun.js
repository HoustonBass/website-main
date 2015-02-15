var gun = function(x,y) {
	this.x = x;
	this.y = y;
	this.direction = Math.PI * 3 / 2;
}

gun.prototype.shooot = function() {
	bullets.add(new bullet(this.x, this.y));
}