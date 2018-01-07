//global variables
var mousePressed = false;
var canvas;
var lastX, lastY, my_context;
var isDown = false;

//onload checking for window loading before continuing
window.onload = function(){
	Init();
	console.log('ready');
}
	
//getting canvas variable and setting context as a variable
	function Init(){
	canvas = document.getElementById("canvas");
	my_context = canvas.getContext("2d");
	canvas.width = 700;
	canvas.height = 1000;
	
//event listener for when mouse is clicked down, then logs x and y values	
	canvas.addEventListener("mousedown", function(e) {
	mousepressed = true;
	var x = e.pageX - this.offsetLeft;
	var y = e.pageY - this.offsetTop;
	console.log('x= ', x, 'y= ', y);
	});
	
//draw function runs when mouse is presssed down	
	function Draw(x, y, isDown) {
	if(isDown){
		my_context.beginPath();
		my_context.strokeStyle = selColour.value;
		my_context.lineWidth = selWidth.value;
		my_context.lineJoin = "round";
		my_context.moveTo(lastX, lastY);
		my_context.lineTo(x,y);
		my_context.closePath();
		my_context.stroke();
		console.log("test");
	}
	lastX= x;
	lastY= y;
	}

//draws the line as the mouse moves	
canvas.addEventListener("mousemove", (function(e){
	var x = e.pageX - this.offsetLeft;
	var y = e.pageY - this.offsetTop;
	Draw(x, y, isDown);
	})
	);

//sets isDown to true when mouse is pressed; allows drawing	
	canvas.addEventListener("mousedown", (function(e){
	isDown = true;
	})
	);
	
//sets isdown to false when mouse is no longer pressed; stops drawing	
	canvas.addEventListener("mouseup", (function(e){
	isDown = false;
	})
	);
	
//event listener for clicking the clear button; clears canvas	
document.getElementById('clearBtn').addEventListener('click', function() {
        my_context.clearRect(0, 0, canvas.width, canvas.height)
});

//stores the canvas in local storage when save button is pressed
document.getElementById('saveBtn').addEventListener('click', function() {
localStorage.setItem("canvas", canvas.toDataURL())
});

//calls back the save canvas drawing
document.getElementById('loadBtn').addEventListener('click', function() {
var img = new Image();
img.onload = function(){
    my_context.drawImage(img,0,0);
}
img.src=localStorage.getItem("canvas");
});



}