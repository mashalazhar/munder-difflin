// MOUSEOVER FUNCTION

document.getElementById("theoffice").addEventListener("mouseover", mouseOver);
document.getElementById("theoffice").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("theoffice").style.color = "gray";
}

function mouseOut() {
  document.getElementById("theoffice").style.color = "white";
}