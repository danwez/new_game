'strict mode'

var app = function(){
	this.canvas = document.getElementById('canvas');
	this.ctx = this.canvas.getContext('2d'); 
	
	var self = this;
	this.hero = new Hero();
	this.init=function(){
		
		
		self.ctx.fillStyle = 'rgb(200, 0, 0)';
		self.ctx.fillRect(10, 10, 50, 50);

		self.ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
		self.ctx.fillRect(30, 30, 50, 50);
	};
};

var Hero = function(app){
	
	this.img = new Image();  // Create new img element
	this.img.onload = function(){
		app.ctx.drawImage(img, 50, 38, 50, 38);
	};
	this.img.src = '../girl.png';
};


window.onload = function(){
	var appp = new app();
	appp.init();
};