let images = [];
let imageSize = 200; // all sizes
let selectedImage = null;
let offset = null;

function preload() {
  images.push(loadImage('image/image1.png'));
  images.push(loadImage('image/image2.png'));
  images.push(loadImage('image/image3.png'));
  images.push(loadImage('image/image4.png'));
}

function setup() {
  let c = createCanvas(windowWidth - 15, windowHeight - 20);
  c.parent('canvas-wrapper');

  // location of images
  images[0].resize(imageSize, imageSize);
  images[0].x = width / 2;
  images[0].y = height / 2 + 200;

  images[1].resize(imageSize, imageSize);
  images[1].x = width / 2 + 300;
  images[1].y = height / 2 + 200;

  images[2].resize(imageSize, imageSize);
  images[2].x = width / 2 - 300;
  images[2].y = height / 2 + 200;

  images[3].resize(imageSize, imageSize);
  images[3].x = width / 2 - 600;
  images[3].y = height / 2 + 200;
}

function draw() {
  background(250);

  for (let img of images) {
    image(img, img.x, img.y);
  }
}

function mousePressed() {
  for (let i = images.length - 1; i >= 0; i--) {
    let img = images[i];
    let x1 = img.x;
    let x2 = img.x + imageSize;
    let y1 = img.y;
    let y2 = img.y + imageSize;

    if (mouseX >= x1 && mouseX <= x2 && mouseY >= y1 && mouseY <= y2) {
      selectedImage = img;
      offset = createVector(mouseX - selectedImage.x, mouseY - selectedImage.y);
      break;
    }
  }
}

function mouseDragged() {
  if (selectedImage) {
    selectedImage.x = mouseX - offset.x;
    selectedImage.y = mouseY - offset.y;
  }
}

function mouseReleased() {
  selectedImage = null;
}
