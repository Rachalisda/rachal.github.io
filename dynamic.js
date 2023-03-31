const object = {
  x: 50,
  y: 50,
  width: 50,
  height: 50,
  img: new Image()
};

// Will have to optimize for mobile screens
window.onload = function(){
// Define an object to be moved

    navBarLinks =["Home", "About","Portfolio","Resume", "Contact"];
    var navBarLinks = String(navBarLinks).toUpperCase().split(",");
    init(navBarLinks);
    initCanvas();
    var canvas = document.getElementById('myCanvas');
   
    
    try{
        const folder = new Image();
        folder.src="./folder.svg";
        object.img = folder;
    }catch(e){
        alert("Naw");
    }
    
    
   home.addEventListener('mousemove', function(event){
        // Get the mouse position relative to the canvas
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
  
        // Update the object position to follow the mouse
        object.x = mouseX;
        object.y = mouseY;
        
        document.getElementsByClassName('nocursor')[0];
    });
   
    window.addEventListener('resize', function(event){
        initCanvas();
        requestAnimationFrame(draw);
    });
      // Start the animation loop
      requestAnimationFrame(draw);
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
     document.getElementById("myCanvas").style.backgroundColor = 'rgba(158, 167, 184, 0.0)';
     
    // get its context
    ctx = canvas.getContext("2d");
    var canvas = document.getElementById('myCanvas');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.drawImage(object.img, object.x, object.y,38,32);
  
  requestAnimationFrame(draw);
}

function initCanvas(){
    var canvas = document.getElementById('myCanvas');
    document.getElementById("myCanvas").style.backgroundColor = 'rgba(158, 167, 184, 0.0)';
    
    // get its context
    ctx = canvas.getContext("2d");
    
    canvas.style.width ='100%';
    canvas.style.height ='100%';
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}