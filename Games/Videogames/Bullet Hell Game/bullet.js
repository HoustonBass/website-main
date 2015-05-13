function bullet(x, y, dir) {
	this.x = x;
	this.y = y;
	this.rotation = dir;
	this.speed = 5;
	
	this.update = function() {
		this.inCanvas();
		this.move();
		this.draw();
		//check quad tree for for collision with player
	}	
	
	this.move = function() {
		//this.x = Math.cos(this.rotation) * this.speed;
		this.y = this.y + Math.sin(Math.PI / 2) * this.speed + this.speed;
	}
	this.draw = function() {
		ctx.drawImage(bulletImg, this.x - 4, this.y - 4);
	}
	this.inCanvas = function() {
		if(checkBounds(this.x,this.y)) {
			for(i=0;i<bullets.length;i++) {
				if(bullets[i] == this) 
					bullets.splice(i,1);
			}
		}
	}
}
function makeBullet(x,y,dir) {
	bullets.push(new bullet(x,y,dir));
}