//canvas stuff

var canvas = document.querySelector("canvas")
var ctx = canvas.getContext("2d")
var fps = 1000/60
var timer = setInterval(gameLoop, fps)


//this is an event listener
document.addEventListener('keydown',press)

var w = false
var a = false
var s = false
var d = false
var up = false
var down = false
var left = false
var right = false

document.addEventListener('keydown',press)
//the function that gets called when we press the keys
function press(event){
    //give is the key code of every press
    console.log(event.keyCode)
    if(event.keyCOde ==87){ w = true }
    if(event.keyCOde ==65){ a = true }
    if(event.keyCOde ==83){ s = true }
    if(event.keyCOde ==68){ d = true }
    if(event.keyCOde ==38){ up = true }
    if(event.keyCOde ==40){ down = true }
    if(event.keyCOde ==37){ left = true }
    if(event.keyCOde ==39){ right = true }
}

document.addEventListener('keyup',release)
//the function that gets called when we press the keys
function release(event){
    //give is the key code of every press
    console.log(event.keyCode)
    if(event.keyCOde ==87){ w = false }
    if(event.keyCOde ==65){ a = false }
    if(event.keyCOde ==83){ s = false }
    if(event.keyCOde ==68){ d = false }
    if(event.keyCOde ==38){ up = false }
    if(event.keyCOde ==40){ down = false }
    if(event.keyCOde ==37){ left = false }
    if(event.keyCOde ==39){ right = false }
}

class GameObject{
    constructor(){
        //puts it in the center of the canvas
        this.x = canvas.width/2
        this.y = canvas.height/2
        this.radius = 69
        this.startAngle = 0
        this.endAngle = 2*Math.PI
        this.vx = 0
        this.vy = 0
        this.color = "lime"
    }

    drawObj(){
        ctx.save();
        ctx.fillStyle = this.color
        ctx.translate(this.x,this.y)
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.radius,this.startAngle,this.endAngle)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
    }

    move(){
        this.x = this.x + this.vx
        this.y = this.y + this.vy
    }

}
//creates an instance of our game object
var player = new GameObject()

//this is our gameloop
function gameLoop(){
    //clears the canvas
    ctx.clearRect(0,0,canvas.width,canvas.height)
    player.drawObj()
}