let video;
let img;

function preload() {
  // Load image before setup
  img = loadImage('media/20250307_103137(0).jpg');
}

function setup() {
  createCanvas(640, 480);

  // Load video
  video = createVideo(['media/20250321_213105.mp4']);
  video.hide();      // Hides default HTML video element
  video.volume(0);   // Optional: mute
  video.play();      // <-- STARTS the video
  video.loop();
}

function draw() {
  background(220);

  // Draw video to canvas
  image(video, 0, 0, width / 2, height);

  // Draw image to canvas
  image(img, width / 2, 0, width / 2, height);
}