
function setup () {
    createCanvas(400, 400)
}

function draw () {
    background(10, 110, 20)
    noStroke()
    //console.log("running...")
    for (i = 0;i <= 7;i ++) {
        //console.log("running loop...")
        fill(25, 96, 12, 150)
        rect(10+i*50, 0, 30, 400)
        rect(0, 10+i*50, 400, 30)
    }
    for (i = 0;i <= 7;i ++) {
        //console.log("running loop...")
        fill(228, 151, 11, 150)
        rect(20+i*50, 0, 10, 400)
        rect(0, 20+i*50, 400, 10)
    }
    for (i = 0;i <= 7;i ++) {
        //console.log("running loop...")
        fill(264, 35, 35, 150)
        rect(24+i*50, 0, 2, 400)
        rect(0, 24+i*50, 400, 2)
    }
}