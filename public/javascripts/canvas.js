var squareArray=[];
var circleArray=[];
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var shapePick=document.getElementById('shapePick');
var itemcolor= document.getElementById('color');
var width=document.getElementById('width');
var away=document.getElementById('delete');
var bye=document.getElementById('bye');
var one=document.getElementById('one');
var homo=document.getElementById('homo');
var random=document.getElementById('random');

function Shape(x,y,width,color){
  this.x=x;
  this.y=y;
  this.width=width;
  this.color=color;
}

function Square(x,y,width,color){
  Shape.call(this,x,y,width,color);
}

Square.prototype= new Shape();

Square.prototype.drawSquare=function(){
ctx.fillStyle = this.color;
ctx.fillRect(this.x, this.y, this.width, this.width);
};

Square.prototype.clearSquare=function(){
  ctx.fillStyle = "white";
  ctx.fillRect(this.x, this.y, this.width, this.width);
};

Square.prototype.oneColorSq=function(){
  ctx.fillStyle = color.value;
  ctx.fillRect(this.x, this.y, this.width, this.width);
};

function Circle(x,y,width,color){
  Shape.call(this,x,y,width,color);
}

Circle.prototype= new Shape();

Circle.prototype.drawCircle=function(){
ctx.beginPath();
ctx.fillStyle= this.color;
ctx.arc(this.x, this.y, this.width, 0, 2*Math.PI);
ctx.fill();
};


Circle.prototype.clearCircle=function(){
  ctx.beginPath();
  ctx.fillStyle= "white";
  ctx.arc(this.x, this.y, this.width, 0, 2*Math.PI);
  ctx.fill();
  };

Circle.prototype.oneColor=function(){
  ctx.beginPath();
  ctx.fillStyle= color.value;
  ctx.arc(this.x, this.y, this.width, 0, 2*Math.PI);
  ctx.fill();
  };


function on_canvas_click(event){
  var x = event.pageX - canvas.offsetLeft;
  var y = event.pageY - canvas.offsetTop;
  var color= itemcolor.value;
  var w= width.value;
  if(shapePick.value === "Square"){
    var square= new Square(x,y,w,color);
    square.drawSquare();
    squareArray.push(square);
    console.log(squareArray);
  }else{
    var circle= new Circle(x,y,w,color);
    circle.drawCircle();
    circleArray.push(circle);
  }
  }

function rando(){
  for(var i=0; i<50; i++){
  var x = Math.floor(Math.random() * 500);
  var y = Math.floor(Math.random() * 500);
  var color= '#'+Math.floor(Math.random()*16777215).toString(16);
  var w= Math.floor(Math.random() * 100);
  if(i%2 === 0){
    var square= new Square(x,y,w,color);
    square.drawSquare();
    squareArray.push(square);
    console.log(squareArray);
  }else{
    var circle= new Circle(x,y,w,color);
    circle.drawCircle();
    circleArray.push(circle);
  }
  }
}

canvas.addEventListener('click', on_canvas_click);

away.addEventListener('click',function(){
  for(var i=0; i<squareArray.length; i++){
    squareArray[i].clearSquare();
  }
});

bye.addEventListener('click',function(){
  for(var i=0; i<circleArray.length; i++){
    circleArray[i].clearCircle();
  }
});

one.addEventListener('click', function(){
  for(var i=0; i<circleArray.length; i++){
    circleArray[i].oneColor();
  }
});

homo.addEventListener('click', function(){
  for(var i=0; i<squareArray.length; i++){
    squareArray[i].oneColorSq();
  }
});

random.addEventListener("click", rando);
//
//
