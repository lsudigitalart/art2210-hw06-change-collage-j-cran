let fishImg = [];
let timer=0;
let interval=750;
let randomY
let randomX

function preload(){
    let fish1=loadImage('BlueFish.png');
    let fish2=loadImage('LightBlueFish.png');
    let fish3=loadImage('TealFish.png');
    let fish4=loadImage('TealFish2.png');
    oceanBackground=loadImage('oceanBackground.jpg')
    fishImg=[fish1,fish2,fish3,fish4];
}

function setup(){
    createCanvas(windowWidth/1.2,windowHeight/1.2);
    background(oceanBackground);

}

function draw(){
    randomY = random(height);
    randomX = random(width);
    let fishChoice=random(fishImg)

    if(millis()-timer>interval) {
        image(fishChoice,randomX,randomY,100,100);
        timer=millis();
    }
}


