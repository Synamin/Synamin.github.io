var x = 0;
var y = 0;
var a = 0;
var b = 0;

function setup(){
    createCanvas(720,480);
}

function draw(){
    background('#AA44FF') //automatic semicolon insertion
    fill("pink");
    rect(x,y,10,10);
    x = x + 1;
    x = x % 500; //x assignment operator x; modulo operator (divided operator)
    y = y + 2;
    y = y % 600;
    
    circle(a,b,20,20)
    a = a + 1;
    a = a % 400;
    b = b + 5;
    b = b % 600;

    fill("blue")
    rect(0,300,700,400);

    textSize(75)
    text("🏄🏽‍♀️", 0 + y, 300)
    text("🚣🏽‍♀️", 100 + x, 300)

}