var pointsX = []
var pointsY = []

function setup () {
    createCanvas(400, 400)
}

function draw () {
    background(255, 255, 255)
    strokeWeight(10)
    for (i = 0;i < pointsX.length;i ++) {
        point(pointsX[i], pointsY[i])
    }
    strokeWeight(5)
    for (i = 0;i < pointsX.length;i ++) {
        if (i + 1 !== pointsX.length) {
            line(pointsX[i], pointsY[i], pointsX[i + 1], pointsY[i + 1])
        } else {
            line(pointsX[i], pointsY[i], pointsX[0], pointsY[0])
        }
    }
}

function mouseClicked () {
    if (mouseX > 0 && mouseX < 400 && mouseY > 0 && mouseY < 400) {
        pointsX.push(mouseX)
        pointsY.push(mouseY)
    } else {
        pointsX = []
        pointsY = []
    }
}