var square = document.getElementById("square");

document.addEventListener("mousemove", function (event) {
  var x = -100 + event.clientX;
  var y = 5 + event.clientY;
  square.style.left = x + "px";
  square.style.top = y + "px";
});