// JavaScript source code
var h1 = document.getElementById('header');
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
var img = new Image();
var bg = new Image();
var gameTime = 0;
var playerSpeed=5;
img.src = '/cheese.png';
bg.src = '/Chrysanthemum.jpg';

//drawImage(img,sx,sy,swidth,sheight,x,y,width,height);


var lastTime = Date.now();
function main() {
    var now = Date.now();
    var dt = (now - lastTime) / 1000;

    update(dt);
    render();

    lastTime = now;
    requestAnimFrame(main);
};

window.onload = function(){
	
	document.body.appendChild(canvas);
	main();
	
//	ctx.drawImage(img,0,0,30,30,50,60,40,50);
};

//setTimeout в качестве запасного варианта
window.requestAnimFrame = (function(){ 
  return  window.requestAnimationFrame       || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
          function( callback ){ 
            window.setTimeout(callback, 1000 / 60); 
          }; 
})();

var hero = {
		pos:[50,70], 
		vector: [0,0],
		sprite:new Sprite('/cheese.png', [0,0],[30,20], playerSpeed, [0,1,2,3,2,1], null, false),
};

function Sprite(url, pos, size, speed, frames, dir, once) {
    this.pos = pos;
    this.size = size;
    this.speed = typeof speed === 'number' ? speed : 0;
    this.frames = frames;
    this._index = 0.01;
    this.url = url;
    this.dir = dir || 'horizontal';
    this.once = once;
    this.img = new Image();
    this.img.src = url;
    
};

Sprite.prototype.update = function(dt) {
	var add = this.speed*dt;
	if(!isNaN(add))this._index += add;
    //h1.innerText = 'time:'+this.dir;
    
}

Sprite.prototype.render = function(ctx) {
    var frame;
    
    if(this.speed > 0) {
        var max = this.frames.length;
        var idx = Math.floor(this._index);
        frame = this.frames[idx % max];

        if(this.once && idx >= max) {
            this.done = true;
            return;
        }
    }
    else {
        frame = 0;
    }


    var x = this.pos[0];
    var y = this.pos[1];

    if(this.dir == 'vertical') {
        y += frame * this.size[1];
    }
    else {
        x += frame * this.size[0];
    }

    ctx.drawImage(this.img,
                  x, y,
                  this.size[0], this.size[1],
                  0, 0,
                  this.size[0], this.size[1]);
};

function update(dt) {
	
    gameTime += dt;

    handleInput(dt);
    //    updateEntities(dt);
    hero.sprite.update(dt);


//    checkCollisions();

};

function render(){
	console.log('run');
	ctx.drawImage(bg,0,0,bg.width,bg.height,0,0,canvas.width,canvas.height);
	hero.sprite.render(ctx);
}

function handleInput(dt){

	 if(input.isDown('LEFT') || input.isDown('A')) {
		 	
	        hero.vector[0] = -1;

	    }
	 
	 if(input.isDown('RIGHT') || input.isDown('D')) {
	    	hero.vector[0] = 1;
	    }
	 
	 if(!input.isDown('RIGHT') && !input.isDown('D') && !input.isDown('LEFT') && !input.isDown('A')) {
	    	hero.vector[0] = 0;
	    }
	 
	 if(input.isDown('UP') || input.isDown('W')) {
		 hero.vector[1] = -1;
	    }

	    if(input.isDown('DOWN') || input.isDown('S')) {
	    	hero.vector[1] = 1;
	    }
	    
	    if(!input.isDown('UP') && !input.isDown('W') && !input.isDown('DOWN') && !input.isDown('S')) {
			 hero.vector[1] = 0;
		    }

	    

}

