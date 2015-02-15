function init() {
	main();
}
function main() {   	
	//setTimeout(function(){ 
		//requestAnimationFrame(main); 
		loadImage();
		console.log("done");
		//alterImage();
	//}, 1000 / 10);  
}

function loadImage() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var imgObj = new Image();
	imgObj.onload = function()
	{
		ctx.drawImage(imgObj, 0, 0);
	};  
	imgObj.src = "images/madeline.jpg";
	
	var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);

	for(var y = 0; y < imgPixels.height; y++){
		 for(var x = 0; x < imgPixels.width; x++){
			  var i = (y * 4) * imgPixels.width + x * 4;
			  var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
			  imgPixels.data[i] = avg;
			  imgPixels.data[i + 1] = avg;
			  imgPixels.data[i + 2] = avg;
		 }
	}
	ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
}

function alterImage() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var imgObj = ctx.getImageData(0, 0, canvas.width, canvas.height);
	console.log(imgObj);
	for(var y = 0; y < imgObj.height; y++){
		for(var x = 0; x < imgObj.width; x++){
			  var i = (y * 4) * imgObj.width + x * 4;
			  var avg = (imgObj.data[i] + imgObj.data[i + 1] + imgObj.data[i + 2]) / 3;
			  imgObj.data[i] = avg;
			  imgObj.data[i + 1] = avg;
			  imgObj.data[i + 2] = avg;
		}
	}
	ctx.putImageData(imgObj, 0, 0, 0, 0, imgObj.width, imgObj.height);
}