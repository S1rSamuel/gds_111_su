var canvas = document.querySelector("canvas")
var ctx = canvas.getContext("2d")

var fps = 1000/60
var timer = setInterval(game, fps)

var x = 0
var y = canvas.height/2
var w = 100
var h = 100

function game(){
//clear the canvas
ctx.clearRect(0,0,canvas.width,canvas.height)
//update the canvas
x+=1
//draw game objects
ctx.fillStyle = "cyan"
ctx.fillRect(x,y,w,h)

}

game()