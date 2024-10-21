var c = document.querySelector(`canvas`)
var ctx = c.getContext(`2d`)
var timer = setInterval(main, 1000/60)

//Array of colors
var colors = [];
colors[0] = `red`
colors[1] = `blue`
colors[2] = `green`

//Create an instance of the GameObject class
var box0 = new GameObject();
box0.x = Math.random()*c.width
box0.y = Math.random()*c.height

//Generate a random color
box0.color = colors[Math.round(Math.random()*2)];

function main()
{
    ctx.clearRect(0,0,c.width,c.height)

    box0.renderRect();
}




