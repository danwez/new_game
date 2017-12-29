(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

'strict mode'

var app = function(){
	this.canvas = document.getElementById('canvas');
	this.ctx = this.canvas.getContext('2d'); 
	this.keyval = {
		v: 0,
		h: 0,
	};

	var self = this;
	this.hero = new Hero();
	
	this.setKey = function(keyCode, on){
		if(keyCode){
			
			switch(keyCode){
				case 38: 
					self.keyval.v = on*-1;
					break;
				case 40: 
					self.keyval.v = on;
					break;
				case 37: 
					self.keyval.h = on*-1;
					break;
				case 39: 
					self.keyval.v = on;
					break;
				
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
		//alert(Math.ceil(new Date().getTime()));
		self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
		self.hero.move(self);
	};
	
	this.loopanime = function(timestamp){
		self.drawScreen();
		requestAnimationFrame(self.loopanime);
	};
	
	this.init=function(){
		self.hero.img.onload = function(){
			
			self.ctx.drawImage(self.hero.img, 0, 0, 70, 86, 50, 50, 35, 43);
			
		};
		
		document.body.onkeydown = function(e){ self.setKey(e.keyCode,1); };
		document.body.onkeyup = function(e){ self.setKey(e.keyCode,0); };
		//document.body.appendChild(self.hero.img);
		// self.ctx.fillStyle = 'rgb(200, 0, 0)';
		//self.ctx.fillRect(10, 10, 50, 50);

		self.loopanime();
		
	};
	
};

window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       || 
            window.webkitRequestAnimationFrame || 
            window.mozRequestAnimationFrame    || 
            window.oRequestAnimationFrame      || 
            window.msRequestAnimationFrame     || 
            function( callback,  element){
              window.setTimeout(callback, 1000 / 60);
            };
  })();

var Hero = function(app){
	
	this.img = new Image();  // Create new img element
	this.img.src = './images/girl.png';
	
	this.position = [300,200];
	this.speed = 0;
	this.coorse = {v:0, h:0};
	
	this.move = function(){
		this.coorse.h = app.keyval.h;
		this.coorse.v = app.keyval.v;
		this.position = [this.position[0] + this.speed * this.coorse.h, this.position[1] + this.speed * this.coorse.v];
		// img, sprx, spry, sprw, spry, cx, cy, frw, fry
		
		app.ctx.drawImage(this.img, 0, 0, 70, 86, this.position[0], this.position[1], 35, 43);
	};
};


window.onload = function(){
	var appp = new app();
	appp.init();
};