var allthekitties = [];
var currentkitty = 0;
var kittyposition = { x: 100, y: 100, w: 100, h: 100 };
var myData;

function preload() {
  // Load cat images
  let url = 'https://api.thecatapi.com/v1/images/search?limit=15&category_ids=5';
  loadJSON(url, successCallback);

  // Load local JSON file
  myData = loadJSON('data.json');
}

function successCallback(data) {
  console.log(data);
  for (let kitty of data) {
    var kittyImg = createImg(kitty.url);
    kittyImg.hide();
    allthekitties.push(kittyImg);
  }
}

function setup() {
  createCanvas(600, 350);
}

function draw() {
  background('pink');

  // Show current cat
  if (allthekitties.length > 0) {
    image(allthekitties[currentkitty], kittyposition.x, kittyposition.y, kittyposition.w, kittyposition.h);
  }

  // Display data from local JSON
  fill(0);
  textSize(16);
  text(`Hours of sleep: ${myData.sleep}`, 10, height - 40);
  text(`Coffee types: ${myData.coffee.join(', ')}`, 10, height - 20);
}

function mousePressed() {
  if (
    mouseX > kittyposition.x &&
    mouseX < kittyposition.x + kittyposition.w &&
    mouseY > kittyposition.y &&
    mouseY < kittyposition.y + kittyposition.h
  ) {
    currentkitty = (currentkitty + 1) % allthekitties.length;
    kittyposition.x = random(width - kittyposition.w);
    kittyposition.y = random(height - kittyposition.h);
  }
}