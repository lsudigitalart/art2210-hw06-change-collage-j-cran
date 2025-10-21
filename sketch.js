let fishImg = [];
let timer=0;
let interval=250;
let randomFishY
let randomFishX 
let randomX, randomY
let randomSize

function preload(){
    let fish1=loadImage('Pictures/BlueFish.png');
    let fish2=loadImage('Pictures/LightBlueFish.png');
    let fish3=loadImage('Pictures/TealFish.png');
    let fish4=loadImage('Pictures/TealFish2.png');
    let oceanBackground=loadImage('Pictures/oceanBackground.jpg')
    let bowlBackground=loadImage('Pictures/bowlBackground.jpg')
    let floorBackground=loadImage('Pictures/floorBackground.jpg')
    // fishHook=loadImage('Pictures/fishHook.png'); // fish hook looked funk since I couldn't find one with a long line + no white background
    // I also couldn't find a good bubble gif i might remake this sorta page for my future portfolio i think it'd be a fun menu page if I illustrate all the images + animate bubble gifs
    // Sort of the style of the electric zine maker software how the maker animated some gifs and drew the pointer

    fishImg=[fish1,fish2,fish3,fish4]; //fish appear in random locations with a couple colours
    backgroundImg=[oceanBackground,bowlBackground,floorBackground] //background changes on refresh
}

function setup(){
    createCanvas(windowWidth/1.2,windowHeight/1.2);
    randomX = random(width);
    randomY = random(height/2);
    let backgroundChoice=random(backgroundImg)

    background(backgroundChoice);
    // image(fishHook,randomX,randomY,100,100);
}

function draw(){
    randomFishY = random(height-100);
    randomFishX = random(width-100);
    randomSize = random(50,200); // size + rotate angle
    let fishChoice=random(fishImg)

    if(millis()-timer>interval) {
        rotate(randomSize);
        image(fishChoice,randomFishX,randomFishY,randomSize,randomSize);
        timer=millis();
    }

}


