'strict mode'

var app = function(){
	this.canvas = document.getElementById('canvas');
	this.ctx = this.canvas.getContext('2d'); 
	this.keyval = null;

	var self = this;
	this.hero = new Hero();
	
	this.setKey = function(keyCode, on){
		if(keyCode){
			
			switch(keyCode){
				case 38: self.keyval = "up"
			}
			var p=document.getElementById("info");
			p.innerText = keyCode;
			
		}else{
			self.keyval = null;
		}
	};
	
	this.getKey = function(){
		
	};
	
	this.drawScreen = function(){
		
	};
	
	this.init=function(){
		self.ctx.drawImage(self.hero.img, 0, 0, 70, 86, 0, 0, 35, 43);
		self.ctx.drawImage(self.hero.img, 0, 0, 70, 86, 0, 0, 35, 43);
		document.body.onkeydown = function(e){ self.setKey(e.keyCode,true); };
		document.body.onkeyup = function(e){ self.setKey(e.keyCode,false); };
		//document.body.appendChild(self.hero.img);
		// self.ctx.fillStyle = 'rgb(200, 0, 0)';
		//self.ctx.fillRect(10, 10, 50, 50);
		window.requestAnimFrame(function(){
			self.drawScreen();
		}, self.canvas);
		
		
	};
	
};

window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       || 
            window.webkitRequestAnimationFrame || 
            window.mozRequestAnimationFrame    || 
            window.oRequestAnimationFrame      || 
            window.msRequestAnimationFrame     || 
            function(/* function */ callback, /* DOMElement */ element){
              window.setTimeout(callback, 1000 / 60);
            };
  })();

var Hero = function(app){
	
	this.img = new Image();  // Create new img element
	this.img.src = './images/girl.png';
	
	this.position = [300,200];
	this.speed = 0;
	this.coorse = [0,0];
	
	this.move = function(){
		this.position = [this.position[0] + this.speed * this.coorse[0], this.position[1] + this.speed * this.coorse[1]];
	};
};


window.onload = function(){
	var appp = new app();
	appp.init();
};