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
  background('#e84e3c');
  const tileSize = 50;

  for (let x = 0; x < 12; x++) {
    for (let y = 0; y < 12; y++) {
      const distortion = sin(frameCount * 0.05 + x * 0.5 + y * 0.3) * 50;
      //source
      const sx = x * tileSize + distortion;
      const sy = y * tileSize + distortion;
      const sh = tileSize + distortion;
      const sw = tileSize;

      // destination
      const dx = x * tileSize;
      const dy = y * tileSize;
      const dw = tileSize;
      const dh = tileSize;

      image(graphic, dx, dy, dw, dh, sx, sy, sw, sh);
    }
  }
}
