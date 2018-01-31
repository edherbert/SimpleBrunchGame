function Entity(){
  this.x = this.y = 10;
}

Entity.prototype = {
  move: function(x, y){
    console.log("moving");
    this.x += x;
    this.y += y;
  },
  draw: function(ctx){
    ctx.fillRect(this.x, this.y, 10, 10);
  }
};

module.exports = Entity;
