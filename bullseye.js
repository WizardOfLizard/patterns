
function setup () {
    createCanvas(400, 400)
}

function draw () {
    background(0, 0, 255)
    noStroke()
    //console.log("running...")
    for (i = 1;i <= 5;i ++) {
        //console.log("running loop...")
        if (i % 2 === 0) {
            fill(255, 255, 255)
        } else {
            fill(255, 0, 0)
        }
        ellipse(200, 200, 400-67*i, 400-67*i)
    }
}