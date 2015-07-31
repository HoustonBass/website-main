function init() {
	setDefaults();
	main();
}
function setDefaults() {
	runTime = 0;
	prime = 1;
	testing = 2;
	isPrime = true;
	submitted = false;
	updateText();
}
function main() {
	run();
	requestAnimationFrame(main);
}
function run() {
	if(submitted && isPrime) {
		update();
	}
	updateText();
}
function update() {
	if(prime != 1 && prime != 2) {
		if(prime % 2 == 0) {
			runTime++;
			isPrime = false;
		}
		else {
			for(testing=3; testing < prime / 2;testing+=2) {
				runTime++;
				console.log("running");
				updateRuntime();
				updateTesting();
				if(prime % testing == 0) {
					isPrime = false;
					break;
				}
			}
		}
	}
	if(!isPrime)
		updateIsPrime();
	submitted = false;
}
function findIfPrime() {
	setDefaults();
	prime = document.getElementById("number").value;
	submitted = true;
	updateText();
}
function updateText() {
	updateTesting();
	updateIsPrime();
	updateRuntime();
}
function updateTesting() {
	document.getElementById("testing").innerHTML = testing;
}
function updateIsPrime() {
	if(isPrime)
		document.getElementById("prime").innerHTML = prime + " is prime";
	else
	document.getElementById("prime").innerHTML = prime + " is not prime";
}
function updateRuntime() {
	document.getElementById("runTime").innerHTML = runTime;
}
