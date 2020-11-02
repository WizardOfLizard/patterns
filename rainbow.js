

function setup () {
    createCanvas(400, 400)
}

function draw () {
    background(255, 255, 255)
    //console.log("running...")
    for (i = 0;i <= 11;i ++) {
        //console.log("running loop...")
        if (i === 0 || i === 6) {
            fill(99, 64, 197)
        } else if (i === 1 || i === 7) {
            fill(0, 76, 255)
        } else if (i === 2 || i === 8) {
            fill(6, 166, 0)
        } else if (i === 3 || i === 9) {
            fill(252, 255, 3)
        } else if (i === 4 || i === 10) {
            fill(255, 114, 3)
        } else if (i === 5 || i === 11) {
            fill(255, 0, 0)
        }
        noStroke()
        triangle(0, 0, 0, 800-i*67, 800-i*67, 0)
    }
}