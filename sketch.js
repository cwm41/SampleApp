


//https://archive.org/details/animalsounds1
//Click download options on the right hand menu, mp3, the file you want, then use that url


var rSlider, gSlider, bSlider;
var goButton, stopButton;
var rate, amp, duration;

function preload() {

 birds = loadSound('https://ia801400.us.archive.org/29/items/animalsounds1/09littleblueheronfishes.mp3');
}

function setup() {
	createCanvas(710, 400);
  	textSize(15);
  	noStroke();

  	rSlider = createSlider(0.1, 3, 1, 0);
  	rSlider.position(20, 20);
  	aSlider = createSlider(0, 1, .2, 0);
 	aSlider.position(20, 50);
	dSlider = createSlider(1, birds.duration(), 5, 0);
 	dSlider.position(20, 80);

 	goButton = createButton('play');
 	goButton.position(width/2, height*4/6);
 	goButton.mousePressed(bird);

 	stopButton = createButton('stop');
 	stopButton.position(width/2, height*5/6);
 	stopButton.mousePressed(noBird);

}

function draw(){


	rate = rSlider.value();
	amp = aSlider.value();
	duration = dSlider.value();
	//background(r, g, b);

}

function bird(){
	//loop([startTime],[rate],[amp],[cueLoopStart],[duration])
	birds.loop(0, rate, amp, 0, duration)
}
function noBird(){
	birds.stop();
}