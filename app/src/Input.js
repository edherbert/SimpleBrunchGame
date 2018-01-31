function Input(){
  this.up = false;
  this.down = false;
  this.left = false;
  this.right = false;

  this.setValue = function(code, value){
    switch(code){
      case(38):
        this.up = value;
        break;
      case(40):
        this.down = value;
        break;
      case(37):
        this.left = value;
        break;
      case(39):
        this.right = value;
        break;

    }
  }

  this.getKey = function(code){
    switch(code){
      case("up"): return this.up; break;
      case("down"): return this.down; break;
      case("left"): return this.left; break;
      case("right"): return this.right; break;
    }
  }
}

module.exports = new Input();
