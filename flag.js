
function setup () {
    createCanvas(600, 400)
}

function draw () {
    background(0, 0, 255)
    noStroke()
    //console.log("running...")
    for (i = 0;i <= 12;i ++) {
        //console.log("running loop...")
        if (i % 2 === 0) {
            fill(255, 0, 0)
        } else {
            fill(255, 255, 255)
        }
        rect(0, i*400/13, 600, 400/13)
    }
    fill(0, 0, 255)
    rect(0, 0, 600*7/15, 2800/13)
}