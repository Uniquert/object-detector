function setup() {
    canvas = createCanvas(275, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

img = "";
Status = "";


function preload() {
    img = loadImage('mouse.png');
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
    image(img, 0, 0, 275, 420);
    fill("#FF0000");
    text('mouse', 25, 35);
    noFill();
    stroke("#FF0000");
    rect(15, 20, 250, 390);
}