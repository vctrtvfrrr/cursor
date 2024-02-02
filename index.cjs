var robot = require("robotjs");
(function () {
  console.clear();
  console.log("Mouse Mover is running. Press CTRL + C to exit.");
  robot.setMouseDelay(0);
  var twoPI = Math.PI * 2.0;
  var screenSize = robot.getScreenSize();
  var height = screenSize.height / 2 - 10;
  var width = screenSize.width;
  var x = 0;
  while (true) {
    if (x > width / 2) x = 0;
    for (x = 0; x < width; x++) {
      var y = height * Math.sin((twoPI * x) / width) + height;
      robot.moveMouseSmooth(x, y);
    }
  }
})();
