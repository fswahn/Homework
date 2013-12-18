// Homework 8 Canvas Tutorial
//For the purpose of this hw, I choose to do the following sections:
//Basic usage
//Drawing shapes
//Applying styles and colors


function draw() {

	//Basic usage

	var canvas1 = document.getElementById('tutorial1');
	if (canvas1.getContext) {
		var ctx = canvas1.getContext('2d');

		ctx.fillStyle = 'rgb(200, 100, 0)';
		ctx.fillRect(10, 20, 60, 70);

		ctx.fillStyle = 'rgba(0, 0, 200, 0.4)';
		ctx.fillRect(30, 40, 60, 70);

		ctx.fillStyle = 'rgba(0, 0, 180, 0.6)';
		ctx.fillRect(50, 60, 60, 70);

		ctx.fillStyle = 'rgba(100, 200, 50, 0.8)';
		ctx.fillRect(70, 80, 60, 70);

		ctx.fillStyle = 'rgb(150, 80, 190, 0.6)';
		ctx.fillRect(50, 100, 60, 70);

		ctx.fillStyle = 'rgba(0, 50, 200, 0.4)';
		ctx.fillRect(30, 120, 60, 70);

		ctx.fillStyle = 'rgba(50, 100, 120, 0.5)'
		ctx.fillRect(55, 175, 80, 50);
	}

	//Drawing shapes

	var canvas2 = document.getElementById('tutorial2');
	if (canvas2.getContext) {
		var ctx2 = canvas2.getContext('2d');

		ctx2.fillStyle = 'rgb(0, 100, 200)';
		ctx2.strokeStyle = 'rgb(0, 150, 100)';
		ctx2.beginPath();
		ctx2.moveTo(50, 50);
		ctx2.lineTo(20, 10);
		ctx2.lineTo(70, 10);
		ctx2.fill();
		ctx2.stroke();

		ctx2.beginPath();
		ctx2.moveTo(90, 10);
		ctx2.lineTo(40, 10);
		ctx2.lineTo(70, 50);
		ctx2.fill();
		ctx2.stroke();

		ctx2.beginPath();
		ctx2.moveTo(50, 60);
		ctx2.lineTo(20, 90);
		ctx2.lineTo(70, 90);
		ctx2.fill();
		ctx2.stroke();

		ctx2.beginPath();
		ctx2.moveTo(110, 10);
		ctx2.lineTo(60, 10);
		ctx2.lineTo(90, 50);
		ctx2.fill();
		ctx2.stroke();

		ctx2.beginPath();
		ctx2.moveTo(90, 90);
		ctx2.lineTo(40, 90);
		ctx2.lineTo(70, 60);
		ctx2.fill();
		ctx2.stroke();

		ctx2.beginPath();
		ctx2.moveTo(130, 10);
		ctx2.lineTo(80, 10);
		ctx2.lineTo(110, 50);
		ctx2.fill();
		ctx2.stroke();

		ctx2.beginPath();
		ctx2.moveTo(110, 90);
		ctx2.lineTo(60, 90);
		ctx2.lineTo(90, 60);
		ctx2.fill();
		ctx2.stroke();

		ctx2.beginPath();
		ctx2.moveTo(150, 10);
		ctx2.lineTo(100, 10);
		ctx2.lineTo(130, 50);
		ctx2.fill();
		ctx2.stroke();

		ctx2.beginPath();
		ctx2.moveTo(130, 90);
		ctx2.lineTo(80, 90);
		ctx2.lineTo(110, 60);
		ctx2.fill();
		ctx2.stroke();

		ctx2.beginPath();
		ctx2.moveTo(150, 90);
		ctx2.lineTo(100, 90);
		ctx2.lineTo(130, 60);
		ctx2.fill();
		ctx2.stroke();

	}

	//Applying styles and color

	var ctx3 = document.getElementById('tutorial3').getContext('2d');
	var lineJoin = ['round', 'bevel', 'miter'];

	ctx3.lineWidth = 16;

	for (var i = 0; i < lineJoin.length; i++) {
		ctx3.lineJoin = lineJoin[i];

		ctx3.fillStyle = 'darkgreen';
		ctx3.strokeStyle = 'rgba(15, 48, 22, 0.8)';
		ctx3.beginPath();
		ctx3.moveTo(10, 90 + i * 35);
		ctx3.lineTo(45, 40 + i * 35);
		ctx3.lineTo(90, 80 + i * 35);
		ctx3.lineTo(135, 40 + i * 35);
		ctx3.lineTo(180, 90 + i * 35);
		ctx3.lineTo(225, 40 + i * 35);
		ctx3.lineTo(260, 90 + i * 35);
		ctx3.fill();
		ctx3.stroke();

	}


}