const Entity = require('./Entity')

function Player(){

}

Player.prototype = {
  test: function(){
    console.log("Hello");
  }
};

Player.prototype = Object.assign(Object.create(Entity.prototype), {
  test2: function(){
    console.log("test2");
  }
});

module.exports = Player;
