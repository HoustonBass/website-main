function init() {
	setDefaults();
	paused = false;
	main();
}
function setDefaults() {
	runTime = 0;
	primes = [1];
	primeCount = 0;
	current = 1;
	testing = 1;
	max = 0;
	submitted = false;
	updateText();
}
function main() {
	run();
	requestAnimationFrame(main);
}
function run() {
	if(!paused) {
		if(submitted && current < max) {
			update();
		}
	}
}
function update() {
	var prime = true;
	updateCurrent();
	if(current != 1) { 
		for(testing=2; testing < current / 2 + 1;testing++) {
			runTime = runTime + 1;
			updateRuntime();
			updateTesting();
			if(current % testing == 0)
				prime = false;
		}
	}
	if(prime) {
		primes.push(current);
		primeCount = primeCount + 1;
	}
	updatePrimes();
	current = current + 1;
}
function findPrimes() {
	setDefaults();
	max = document.getElementById("length").value;
	submitted = true;
}
function updateText() {
	updateTesting();
	updateCurrent();
	updatePrimes();
	updateRuntime();
}
function updateTesting() {
	document.getElementById("testing").innerHTML = testing;
}
function updateCurrent() {
	document.getElementById("current").innerHTML = current;
}
function updatePrimes() {
	var list = primes[0];
	for(var i=2; i < primes.length; i++) {
		list = list + ", " + primes[i];
		if(i%10 == 0)
			list = list + "\n";
	}
	document.getElementById("primes").innerHTML = list;
	
	
	document.getElementById("primeCount").innerHTML = primeCount;
}
function updateRuntime() {
	document.getElementById("runTime").innerHTML = runTime;
}
function toggleRun() {
	paused = !paused;
}