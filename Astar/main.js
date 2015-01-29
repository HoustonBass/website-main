var paused, canvas, ctx, runtime;

function init() {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	runtime = 0;
	paused = false;
	var mapdata = loadmap("test1.xml");
	console.log(mapdata);
	run();
}
function run() {
	if(!paused)
		//update();
	runtime = runtime + 1;
	//run();
}









function loadmap1(mapname) {
	return $(".text").load("http://localhost/" + mapname);
}

function loadmap2(mapname) {
	fso = new ActiveXObject("Scripting.FileSystemObject");
	// f = fso.OpenTextFile("c:\\testfile.txt", ForWriting, true);
	// f.Write("Hello world!");
	// f.Close();
	f = fso.OpenTextFile("C:\Users\Houston\Documents\GitHub\JS-Simulation\Astar" + mapname, 1);
	r = f.ReadLine();
 return(r);
}

function loadmap3(mapname) {
	jQuery.get('http://localhost/' + mapname, function(data) {
		return data;
	});
}

function loadmap(mapname) {
	var textType = /text.*/;

			if (file.type.match(textType)) {
				var reader = new FileReader();

				reader.onload = function(e) {
					return reader.result;
				}

				reader.readAsText(file);
	
	
	var reader = new FileReader();
	reader.onload = function(e) {
		var text = reader.result;
	}
	return reader.readAsText(mapname);
}