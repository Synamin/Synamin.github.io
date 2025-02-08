var pinkTriangle = {
    x: 40,
    y: 44,
    a: 20,
    b: 60,
    d: 50,
    e: 90,
    w: 30,
    h: 5,
    xSpeed: 1,
    ySpeed: 1,
    aSpeed: 1,
    bSpeed: 1,
    dSpeed: 1,
    eSpeed: 1,

    colour: 'magenta',
    draw: function(){
        fill( this.colour );
        triangle(this.x, this.y, this.a, this.b, this.d, this.e);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        this.a += this.aSpeed;
        this.b += this.bSpeed;
        this.d += this.dSpeed;
        this.e += this.eSpeed;

        if(this.x < 0 || this.x > width - this.w){
            this.xSpeed *= -1;
        }
        if(this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
        if(this.a < 0 || this.a > width - this.w){
            this.aSpeed *= -1;
        }
        if(this.b > height - this.h || this.b < 0){
            this.bSpeed *= -1;
        }
        if(this.d < 0 || this.d > width - this.w){
            this.dSpeed *= -1;
        }
        if(this.e > height - this.h || this.e < 0){
            this.eSpeed *= -1;
        }
    }
};

var blueBrick = {
    x: 40,
    y: 50,
    w: 30,
    h: 30,
    xSpeed: 2,
    ySpeed: 1,
    colour: 'blue',
    draw: function(){
        fill( this.colour );
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width){
            this.xSpeed *= -1;
        }
        if(this.y > height || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};
// redBrick.x++ returns current value then increments
// ++redBrick.x increments value and then returns   

function setup(){
    createCanvas(720,280);
}

function draw(){
    background('grey'); 
    pinkTriangle.draw();
    pinkTriangle.move();
    blueBrick.draw();
    blueBrick.move();
}