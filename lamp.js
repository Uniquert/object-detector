function setup() {
    canvas = createCanvas(325, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

img = "";
Status = "";


function preload() {
    img = loadImage('lamp.png');
}

function modelLoaded() {
    console.log("modelLoaded");
    Status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
    console.error(error);
    }
    console.log(results);
}

function draw() {
    image(img, 0, 0, 325, 420);
    fill("#FF0000");
    text('lamp', 25, 25);
    noFill();
    stroke("#FF0000");
    rect(15, 10, 300, 400);
   
}