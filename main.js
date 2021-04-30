const obejcts = document.querySelector("#object");

document.addEventListener("mousemove", (e) => {
  console.log(e)
  var x = e.clientX;
  var y = e.clientY;
  obejcts.style.top = y + "px";
  obejcts.style.left = x + "px";
});
