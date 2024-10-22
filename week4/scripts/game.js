var canvas = document.querySelector("canvas")
var ctx = canvas.getContext("2d")

var fps = 1000/60
var timer = setInterval(game, fps)

var x = 50
var y = canvas.height/2
var w = 100
var h = 100
var moveAmountX = 0.1
var moveAmountY = 0.1

function game(){
//clear the canvas
ctx.clearRect(0,0,canvas.width,canvas.height)
//update the canvas
x+=moveAmountX
y+=moveAmountY
//draw game objects

ctx.fillStyle = "black"
ctx.beginPath()
ctx.arc(x,y,50,0, 2* Math.PI,false)
ctx.closePath()
ctx.fill()

if(x > canvas.width - 50){
//make square come out other side like pac-man
moveAmountX *= -1
}

if (x < 50){
    moveAmountX *= -1
}
if(y<50){
    moveAmountY *= -1
}
if(y>canvas.height - 50){
    moveAmountY *= -1
}
}
game()