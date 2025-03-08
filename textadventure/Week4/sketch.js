let input, button, slider, output, mode, fullscreenButton;
        
function setup() {
    createCanvas(600, 400);
    background('pink');
    
    input = createInput("Type here...");
    input.position(20, 420);
    
    button = createButton("Submit");
    button.position(input.x + input.width + 10, 420);
    button.mousePressed(displayText);
    
    slider = createSlider(10, 50, 20);
    slider.position(20, 450);
    slider.input(changeTextSize);
    
    mode = createSelect();
    mode.position(20, 480);
    mode.option("Normal");
    mode.option("Excited");
    mode.option("Mysterious");
    mode.changed(changeMode);

    fullscreenButton = createButton("Toggle Fullscreen");
    fullscreenButton.position(20, 510);
    fullscreenButton.mousePressed(toggleFullscreen);

    output = "";
}

function displayText() {
    output = input.value();
    input.value("");
}

function changeTextSize() {
    textSize(slider.value());
}

function changeMode() {
    let selectedMode = mode.value();
    if (selectedMode === "Excited") {
        output = output.toUpperCase() + "!!!";
    } else if (selectedMode === "Mysterious") {
        output = "..." + output + "...";
    }
}

function toggleFullscreen() {
    let fs = fullscreen();
    fullscreen(!fs);
}

function draw() {
    background('pink');
    textSize(slider.value());
    fill(50);
    text(output, width / 2 - textWidth(output) / 2, height / 2);
}

function keyPressed() {
    if (keyCode === ENTER) {
        displayText();
    }
    if (keyCode === ESCAPE) {
        fullscreen(false);
    }
}