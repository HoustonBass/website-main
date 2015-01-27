//Constructor
var soldier = function(team, id) {
	this.id = id;
	this.setDefaults(team);
}
soldier.prototype.setDefaults = function(team) {
	this.health = 100;
	this.range = 25
	this.power = 10;
	this.attackInterval = 5;
	this.attackTick = 0;
	this.moveSpeed = 10;
	this.team = team;	
	this.behavior = "";
	
	this.target = -1;
	this.targetX = -1;
	this.targetY = -1;
	//spawn setter
	if(team == "red")
		this.x = 10;
	else
		this.x = canvas.width - 30;
	this.y = Math.random() * canvas.height + 20;
}

//Functions
function makeSoldier(team) {
	if(deadpool.length == 0) {
		var tmpSoldier = new soldier(team, lastID);
		entities.push(tmpSoldier);	
		lastID = lastID+1;
	}	else	{
		var tmpSoldier = deadpool.pop();
		tmpSoldier.setDefaults(team);
		entities.push(tmpSoldier);
	}
}
soldier.prototype.updateBehavior = function() { //agrressive pursuit command
	if(this.health <= 0) {
		for(var i=0; i<entities.length; i++) 
			if(entities[i].id == this.id)
				entities.splice(i,1);
		deadpool.push(this);
		if(this.team == "red")
			blueScore = blueScore + 1;
		else
			redScore = redScore + 1;
	} else {
		if(this.behavior == "" && this.target == -1)
			this.findTarget();
		if(this.behavior == "command")	 
			this.updatePosition();
		if(this.behavior == "pursuit") 
			if(Math.sqrt(Math.pow(this.targetX - this.x, 2) + Math.pow(this.targetY - this.y, 2)) < this.range) //target within range
				this.attack();
			else
				this.updatePosition();
		
	}
}
soldier.prototype.attack = function() {
	if(!this.target.isAlive()) {
		this.findTarget()
	} 
	else if(this.attackTick >= this.attackInterval) {
		this.target.hurt(this.power);
		this.attackTick = 0;
	}
}
soldier.prototype.updatePosition = function() {	
	this.targetX = this.target.x;
	this.targetY = this.target.y;
	this.x = this.x + (this.targetX - this.x) / Math.sqrt(Math.pow(this.targetX - this.x, 2) + Math.pow(this.targetY - this.y, 2)) * this.moveSpeed;
	this.y = this.y + (this.targetY - this.y) / Math.sqrt(Math.pow(this.targetX - this.x, 2) + Math.pow(this.targetY - this.y, 2)) * this.moveSpeed;
}

//Getters
soldier.prototype.id = function() {	return this.id;	}
soldier.prototype.x = function() {	return this.x;	}
soldier.prototype.y = function() {	return this.y;	}
soldier.prototype.health = function() {	return this.health;	}
soldier.prototype.team = function() {	return this.team;	}
soldier.prototype.target = function() {	return this.target;	}
soldier.prototype.hurt = function(power) {	this.health = this.health - power;	}
soldier.prototype.isAlive = function() {	if(this.health > 0) return true; else return false;	}
soldier.prototype.setTarget = function(id) {			
	if(id != -1) {
		this.target = entities[id];
		this.behavior = "pursuit";
		this.targetX = this.target.x;
		this.targetY = this.target.y;
	} else {
		this.behavior = "";
		this.targetX = -1;
		this.targetY = -1;
		this.target = -1;
	}
}

//Setters
soldier.prototype.findTarget = function() {
	console.log(this.id + " looking for target")
	var tmpTarget = -1;
	for( var i = 0; i < entities.length; i++) {
		if(this.id != entities[i].id && this.team != entities[i].team) { //not this and different team and no target
			if(this.target = -1)
				tmpTarget = i;
			else
				if(Math.abs(this.x - entities[i].x) + Math.abs(this.y - entities[i].y) < Math.abs(this.x - entities[tmpTarget].x) + Math.abs(this.y - entities[tmpTarget].y))
					tmpTarget = i;
		}
	}
	this.setTarget(tmpTarget);
		
}

//toString
soldier.prototype.toString = function soldierToString() {
	return " | HP:"+this.health + "| ID: " + this.id; //+ " | tar:"+this.target; 
		//+ " | targetHP:" + this.target.health + ",targetX,Y:"+Math.round(this.targetX)+","+Math.round(this.targetY)+" | behavior:"+this.behavior
		//"x: "+Math.round(this.x)+",y:"+Math.round(this.y) + 
		//+" | attackTick:"+this.attackTick;
		//"|Xmove:"+(this.targetX - this.x) / Math.sqrt(Math.pow(this.targetX - this.x, 2) + Math.pow(this.targetY - this.y, 2))
		//+"|Ymove:"+(this.targetY - this.y) / Math.sqrt(Math.pow(this.targetX - this.x, 2) + Math.pow(this.targetY - this.y, 2)) * this.moveSpeed;
}