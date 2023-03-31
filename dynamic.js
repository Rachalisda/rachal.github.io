const object = {
  x: 50,
  y: 50,
  width: 50,
  height: 50,
  img: new Image()
};

function Bit(bit,x,y){
    this.x=x;
    this.y=y;
    this.bit=bit;
}

var canvas;
var bits = new Array(20);
var score =0;
var txtScore;


/*
 Will have to optimize for mobile screens
 need to change animation to go regardless of computer speed cz it slows in battery mode and when window is resized

*/

window.onload = function(){
// Define an object to be moved
    navBarLinks =["Home", "About","Portfolio","Resume", "Contact"];
    var navBarLinks = String(navBarLinks).toUpperCase().split(",");
    init(navBarLinks);
    initCanvas();
    requestAnimationFrame(draw);
    txtScore = document.getElementById('score');
    var footer = document.getElementById('footer');
    try{
        const folder = new Image();
        folder.src="./folder.svg";
        object.img = folder;
    }catch(e){
        alert("Naw");
    }
    
    footer.style.height = window.innerHeight +"px";
  window.addEventListener('mousemove', function(event){
        // Get the mouse position relative to the canvas
        const rect = canvas.getBoundingClientRect();
        mouseX = event.clientX - rect.left;
        mouseY = event.clientY - rect.top;
        // Update the object position to follow the mouse
        object.x = mouseX;
        object.y = mouseY;
    });
    
    window.addEventListener('resize', function(event){
        initCanvas();
        requestAnimationFrame(draw);
    });
      
}
function init(navBarLinks){
    // Initialize navbar
    const navBar = document.getElementById("navbar");
    for(i=0; i<navBarLinks.length; i++){
        var links = document.createElement("ul");
        var jump = document.createElement("a");
        jump.href="#" + navBarLinks[i].toLowerCase();
        links.innerHTML = navBarLinks[i];
        jump.appendChild(links);
        navBar.appendChild(jump);
    }
}

// Draw the object on the canvas
function draw() {
     var canvas = document.getElementById('myCanvas');
     ctx = canvas.getContext("2d");
     // get its context
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     ctx.drawImage(object.img, object.x-(38/2), object.y-(32/2),38,32);
     
     
     for(i=0; i<bits.length;i++){
         ctx.fillRect(bits[i].x, bits[i].y++, 10, 20);
         if(bits[i].y == canvas.height || (( bits[i].x >= object.x-object.width && bits[i].x <= object.x+object.width) && (bits[i].y == object.y))){
             if((( bits[i].x >= object.x-object.width && bits[i].x <= object.x+object.width) && bits[i].y == object.y)){
                 score++;
             }
             bits[i] = new Bit(Math.round(Math.random()), Math.round(Math.random()*canvas.width), 0);
         }
     }
    
     txtScore.innerHTML = "Score: " + score;
   
     requestAnimationFrame(draw);
}

function initCanvas(){
     canvas = document.getElementById('myCanvas');
     ctx = canvas.getContext("2d");
     document.getElementById("myCanvas").style.backgroundColor = 'rgba(0, 0, 0, 0)';
     canvas.style.width ='100%';
     canvas.style.height ='70%';
     canvas.style.top = "0";
     canvas.width = canvas.offsetWidth;
     canvas.height = canvas.offsetHeight;

     for(i=0; i<bits.length;i++){
         bits[i] = new Bit(Math.round(Math.random()), Math.round(Math.random()*canvas.width), Math.round(Math.random()*canvas.height));
     }    
}
// Draws
function moveBits(canvas){  
    newBit = new Bit(Math.round(Math.random()), 1, 1);
}
