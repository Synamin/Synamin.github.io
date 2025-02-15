var colourPicker; // function scope
let strokeWeightSlider;
var bgColourPicker;
let input;

function setup(){
    createCanvas(720,300);

    colourPicker = createColorPicker('pink');
    
    strokeWeightSlider = createSlider(1,10,5,1);
    
    bgColourPicker = createColorPicker('white'); 
    
    var bgColorButton = createButton('Refresh');
    bgColorButton.mousePressed(repaint);
    bgColourPicker.changed( repaint ); 
    background( bgColourPicker.value() );

    // remixed from https://p5js.org/reference/p5/createInput/
    input = createInput();
    input.position(8,360);
    /// end remix

    var surprise = createButton('CLICK ME')
    surprise.mouseClicked(boom);
    surprise.changed(boom);
    background(surprise.value());
}

function draw(){
    // ellipse(mouseX, mouseY, 10,10);
    strokeWeight( strokeWeightSlider.value() );
    stroke( colourPicker.value() );   

    // remixed from p5js.org/reference/mouseispressed/
    if(mouseIsPressed){
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
    /// end remix

    // remixed from https://p5js.org/reference/p5/createInput/
    let textBox = input.value();
    text(textBox, 30,30);
    /// end remix
}

function repaint(){
    background( bgColourPicker.value() );
    console.log( bgColourPicker.value().setGreen(255) );
}

function boom(){
    background('red');
    textSize(150);
    text("🔥", 100, 250);
    text("💥", 300, 200);
}