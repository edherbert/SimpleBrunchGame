document.addEventListener('DOMContentLoaded', function() {
  //Setup and things
  const main = require("src/Main");

  main.setupCanvases();

  function update(time){
    main.update();
    main.draw();

    window.requestAnimationFrame(update);
  }

  window.requestAnimationFrame(update);
});
