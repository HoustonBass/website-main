function gun (x,y,type) {
	this.x = x;
	this.y = y;
	this.type = type;
	this.speed = 0.1;
	this.rotation = Math.PI * 3 / 2;
	
	
	this. rateOfFire = 50;
	this.fireCooldown = 0;
	
	this.fire = function() {
		makeBullet(this.x, this.y, this.dir);
	}
	this.move = function() {
		if(this.type == "down") {
			this.y = this.y + this.speed;
		}
	}
	this.draw = function(ctx) {
		renderGun(ctx, this.x,this.y, this.rotation)
	}
	
	this.update = function() {
		this.fireCooldown = this.fireCooldown + 1;
		if(this.fireCooldown >= this.rateOfFire) {
			this.fireCooldown = 0;
			this.fire();
		}
		this.move();
	}
}

function makeGun(x,y,type) {
		guns.push(new gun(x,y,type));
	}