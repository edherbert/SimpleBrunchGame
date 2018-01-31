const Entity = require('./Entity')

function Food(){

}

Food.prototype = Object.assign(Object.create(Entity.prototype), {
  draw: function(ctx){
    ctx.fillStyle = "orange";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
});

module.exports = Food;
