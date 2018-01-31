//Import classes as constants
const Entity = require('./Entity');
const input = require('./Input');
const Player = require('./Player');
const Food = require('./Food');

window.addEventListener("keydown", function(e){
  input.setValue(e.keyCode, true);
});

window.addEventListener("keyup", function(e){
  input.setValue(e.keyCode, false);
});

//You can declare a class like this with function and call this for everything.
//However if you want to do inheritance it might get more complicated as these values would not be in the prototype.
function Main(){
  this.food = [];

  this.setupCanvases = function(){
    this.canvas = document.getElementById('canvas');
    this.context = this.canvas.getContext('2d');

    this.player = new Player();
    for(i = 0; i < 20; i++){
      var f = new Food();
      f.move(Math.random() * 500, Math.random() * 500);
      this.addFood(f);
    }
  }

  this.addFood = function(f){
    this.food.push(f);
  }

  this.draw = function(){
    this.context.fillStyle = "#bcbcbc";
    this.context.fillRect(0, 0, 500, 500);

    this.context.fillStyle = "black";
    for(i = 0; i < this.food.length; i++){
      this.food[i].draw(this.context);
    }

    this.player.draw(this.context);

    this.context.font = "20px Arial";
    this.context.fillStyle = "black";
    this.context.fillText("Score: " + this.player.score, 20, 30);
  }

  this.checkCollision = function(rect1, rect2){
    if (rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.height + rect1.y > rect2.y){
      return true;
    }else{
      return false;
    }
  }

  this.update = function(){
    if(input.getKey("up")) this.player.move(0, -1);
    if(input.getKey("down")) this.player.move(0, 1);
    if(input.getKey("left")) this.player.move(-1, 0);
    if(input.getKey("right")) this.player.move(1, 0);

    for(i = 0; i < this.food.length; i++){
      if(this.checkCollision(this.player, this.food[i])){
        this.food.splice(i, 1);
        this.player.score++;
      }
    }
  }
}

module.exports = new Main();
