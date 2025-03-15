// Extended Particle System with Multiple Arrays and DOM Interaction
// References:
// 1. p5.js Array Functions: https://p5js.org/reference/#/p5/Array
// 2. Particle Systems in p5.js: https://happycoding.io/tutorials/p5js/creating-classes/fireworks

let fireworks = [];
let particles = [];
let textElements = [];
let addTriangles = true;

function setup() {
    createCanvas(windowWidth, windowHeight);
    createTriangles(width / 2, height / 2);
    createHTMLText();
}

function draw() {
    background(20, 60, 100, 10);
    strokeWeight(1);
    text(fireworks.length, 20, 20);
    
    for (let ember of fireworks) { // Reference 2: Using an array to store and iterate over particles
        ember.draw();
    }
    for (let particle of particles) {
        particle.draw();
    }
    
    if (frameCount % 30 === 0) {
        if (addTriangles) {
            createTriangles(random(width), random(height));
        } else {
            createEmbers(random(width), random(height));
        }
        addTriangles = !addTriangles;
    }
    
    // Remove finished particles using array filter (Reference 1: Array.filter method)
    fireworks = fireworks.filter(ember => ember.alpha > 0 && ember.y < height);
    particles = particles.filter(p => p.alpha > 0);
    
    updateHTMLText();
}

function createEmbers(x, y) {
    for (let i = 0; i < 80; i++) {
        let ember = {
            x: x,
            y: y,
            xspeed: random(-2, 2),
            yspeed: random(-2, 2),
            alpha: 255,
            color: color(random(255), random(255), random(255), 255),
            draw: function() {
                strokeWeight(2);
                stroke(this.color);
                point(this.x, this.y);
                this.update();
            },
            update: function() {
                this.x += this.xspeed;
                this.y += this.yspeed;
                this.yspeed += 0.05;
                this.alpha -= 2;
                this.color.setAlpha(this.alpha);
            }
        };
        fireworks.push(ember); // Reference 1: Using array.push() to add new elements
    }
}

function createTriangles(x, y) {
    for (let i = 0; i < 80; i++) {
        let triangleParticle = {
            x: x,
            y: y,
            xspeed: random(-2, 2),
            yspeed: random(-2, 2),
            alpha: 255,
            rotation: random(TWO_PI),
            color: color(random(255), random(255), random(255), 255),
            draw: function() {
                fill(this.color);
                noStroke();
                push();
                translate(this.x, this.y);
                rotate(this.rotation);
                triangle(0, 0, 5, 5, -5, 5);
                pop();
                this.update();
            },
            update: function() {
                this.x += this.xspeed;
                this.y += this.yspeed;
                this.yspeed += 0.05;
                this.alpha -= 2;
                this.color.setAlpha(this.alpha);
                this.rotation += 0.1;
            }
        };
        particles.push(triangleParticle); // Reference 1: Using array.push() to store objects
    }
}

function createHTMLText() {
    for (let i = 0; i < 3; i++) {
        let p = createP("Particle Count: 0"); // Reference 2: Using createP() to manipulate DOM elements
        p.position(10, 30 + i * 20);
        textElements.push(p);
    }
}

function updateHTMLText() {
    textElements[0].html("Fireworks: " + fireworks.length); // Reference 2: Updating DOM elements with array data
    textElements[1].html("Particles: " + particles.length);
    textElements[2].html("Total: " + (fireworks.length + particles.length));
    
    // Reference 1: Using array.concat() to merge two arrays
    let allParticles = fireworks.concat(particles);
    
    // Reference 1: Using array.join() to create a string representation of particle counts
    console.log("Particles: " + allParticles.map(p => `(${p.x.toFixed(1)}, ${p.y.toFixed(1)})`).join(" | "));
}
