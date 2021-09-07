canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

// Drawing Circle //

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth = 1;
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth = 1;
ctx.arc(300, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth = 1;
ctx.arc(350, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth = 1;
ctx.arc(275, 225, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth = 1;
ctx.arc(325, 225, 40, 0, 2 * Math.PI);
ctx.stroke();