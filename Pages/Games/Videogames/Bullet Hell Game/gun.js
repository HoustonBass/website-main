function gun (x,y,type) {
	this.x = x;
	this.y = y;
	this.type = type;
	this.speed = 0.5;
	this.rotation = Math.PI * 3 / 2;
	
	
	this. rateOfFire = 50;
	this.fireCooldown = 0;
	
	this.update = function() {
		this.inCanvas();
		this.checkFire();
		this.move();
		this.draw();
	}
	
	this.checkFire = function() {
		this.fireCooldown = this.fireCooldown + 1;
		if(this.fireCooldown >= this.rateOfFire) {
			this.fireCooldown = 0;
			this.fire();
		}
	}
	this.fire = function() {
		makeBullet(this.x, this.y, this.dir);
	}
	this.move = function() {
		if(this.type == "down") {
			this.y = this.y + this.speed;
		}
	}
	this.draw = function() {
		ctx.drawImage(gunImg, this.x - 8, this.y - 8);
	}
	this.inCanvas = function() {
		if(checkBounds(this.x,this.y)) {
			for(i=0;i<guns.length;i++) {
				if(guns[i] == this) 
					guns.splice(i,1);
			}
		}
	}
}

function makeGun(x,y,type) {
	guns.push(new gun(x,y,type));
}