const Entity = require('./Entity');
const input = require('./Input')
const Player = require('./Player')

window.addEventListener("keydown", function(e){
  input.setValue(e.keyCode, true);
});

window.addEventListener("keyup", function(e){
  input.setValue(e.keyCode, false);
});

function Main(){
  this.entities = [];

  this.setupCanvases = function(){
    this.canvas = document.getElementById('canvas');
    this.context = this.canvas.getContext('2d');

    this.addEntity(new Entity());
    var p = new Player();
    p.test2();
    p.move(0, 0);
  }

  this.addEntity = function(e){
    this.entities.push(e);
  }

  this.draw = function(){
    this.context.clearRect(0, 0, 500, 500);
    for(i = 0; i < this.entities.length; i++){
      this.entities[i].draw(this.context);
    }
  }

  this.update = function(){

  }
}

module.exports = new Main();
