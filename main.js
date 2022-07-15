function preload() {
    clown_nose=loadImage('https://i.postimg.cc/90gn4nTd/hhh.png')
}
function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCanvas(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    fill(255, 0, 0)
    stroke(255, 0, 0)
    circle(255, 0, 0)
    tint(tint_color);
}

function take_snapshots() {
    save("student_name.png");
}
