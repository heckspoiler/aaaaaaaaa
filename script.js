let font;
let graphic;

function preload() {
  font = loadFont('spacegrotesk-medium.otf');
}
function setup() {
  createCanvas(600, 600);
  graphic = createGraphics(600, 600);
  graphic.fill('#f3c043');
  graphic.textFont(font);
  graphic.textSize(800);
  graphic.textAlign(CENTER, CENTER);
  graphic.text('a', 300, 240);
}

function draw() {
  const tileSize = 200;

  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      copy(
        graphic,
        0,
        0,
        600,
        600,
        x * tileSize,
        y * tileSize,
        tileSize,
        tileSize
      );
    }
  }
}
