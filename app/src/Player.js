const Entity = require('./Entity')

function Player(){

}

Player.prototype = Object.assign(Object.create(Entity.prototype), {
  //Probably don't store the score in the player, this is just to demonstrate the inheritance.
  score: 0,
  draw: function(ctx){
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
});

module.exports = Player;
