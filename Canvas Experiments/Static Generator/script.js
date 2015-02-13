var count;
function init() {
	count = 0;
	main();
}
function main() {
	setTimeout(function(){ 
		requestAnimationFrame(main); 
		count = count + 1;
		var countout = 3 + Math.floor(Math.abs(250*Math.sin(count/50)))
		console.log(countout);
		drawColors(countout);
	}, 1000 / 10000);
}
function drawColors(stretch) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext("2d");
	var id = ctx.createImageData(stretch,stretch); // only do this once per page
	var d  = id.data;                        // only do this once per page
	ctx.clearRect(0,0,canvas.width, canvas.height);
	for(var x =0; x<document.getElementById('canvas').width / stretch; x++) {
		for(var y=0; y<document.getElementById('canvas').height / stretch; y++) {
			var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
	        for(var i=0; i<id.data.length; i+=4) {
				d[i+0] = r;
				d[i+1] = g;
				d[i+2] = b;
				d[i+3] = 255;
			}
            ctx.putImageData(id, x*stretch, y*stretch);
		}
	}
}