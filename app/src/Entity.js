
//Variables can be stored in here by doing this.
//Howver things need to be in the prototype if they are to be inherited.
function Entity(){

}

Entity.prototype = {
  x: 10,
  y: 10,
  width: 10,
  height: 10,

  move: function(x, y){
    this.x += x;
    this.y += y;
  },

  draw: function(ctx){
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
};

module.exports = Entity;
