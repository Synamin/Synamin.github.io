

function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    background(150, 30, 120);
    fill('pink');
    stroke('white');
    for(var i = 0; i < 5000; i++){
        rect((i*7)%width,(i*8)%height,0,50,10);
    }
    
    fill('pink');
    stroke('black');
    if(mouseX < 300){
        rect(mouseX,mouseY,100,100);
    }else{
        rect(mouseX,mouseY,40,150,25);
    }
}