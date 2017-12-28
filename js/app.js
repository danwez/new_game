var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
var img = new Image();
var bg = new Image();
var gameTime = 0;
var playerSpeed=5;
img.src = '/girl.png';
bg.src = '/Chrysanthemum.jpg';

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
	

};

function main(){
	
}

function render(){
	console.log('run');
	ctx.drawImage(bg,0,0,bg.width,bg.height,0,0,canvas.width,canvas.height);
	hero.sprite.render(ctx);
}

