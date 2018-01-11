var mousePressed = false;
var canvas;
var lastX, lastY, my_context;
var isDown = false;


window.onload = function(){
	Init();
	console.log('ready');
}
	

	function Init(){
	canvas = document.getElementById("canvas");
	my_context = canvas.getContext("2d");
	canvas.width = 700;
	canvas.height = 1000;
	
	canvas.addEventListener("mousedown", function(e) {
	mousepressed = true;
	var x = e.pageX - this.offsetLeft;
	var y = e.pageY - this.offsetTop;
	console.log('x= ', x, 'y= ', y);
	});
	
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

canvas.addEventListener("mousemove", (function(e){
	var x = e.pageX - this.offsetLeft;
	var y = e.pageY - this.offsetTop;
	Draw(x, y, isDown);
	})
	);
	
	canvas.addEventListener("mousedown", (function(e){
	isDown = true;
	})
	);
	
	canvas.addEventListener("mouseup", (function(e){
	isDown = false;
	})
	);
	
document.getElementById('clearBtn').addEventListener('click', function() {
        my_context.clearRect(0, 0, canvas.width, canvas.height)
});

document.getElementById('saveBtn').addEventListener('click', function() {
localStorage.setItem("canvas", canvas.toDataURL())
});

document.getElementById('loadBtn').addEventListener('click', function() {
var img = new Image();
img.onload = function(){
    my_context.drawImage(img,0,0);
}
img.src=localStorage.getItem("canvas");
});



}