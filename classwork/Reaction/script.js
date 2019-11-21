let start = new Date().getTime;
function generateRandomColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);

    let color = "RGB(" + r + ", " + g + ", " + b + ")";
    return color;
}
function makeShape(){
    let shape = document.getElementById("shape");

    let screenHeight = window

    let t = Math.random() * 400;
    let l = Math.random() * 300;

    shape.style.top = t + "px";
    shape.style.left = l + "px";

    let side = Math.random() * 100 + 100;
    shape.style.height = side + "px";
    shape.style.width = side + "px";

shape.style.backgroundColor = generateRandomColor();
if (Math.random() > 0.5){
    shape.style.borderRadius = "50%";

}
else{
    shape.style.borderRadius = "0";
}

    shape.style.display = "block";

    start = new Date().getTime;
}


function makeShapeAfterDelay(){
    setTimeout(makeShape, Math.random() * 2000);
}
makeShapeAfterDelay()

document.getElementById("shape").onclick = function() {
    // console.log("here!");
    document.getElementById("shape").style.display = "none";
let end = new Date().getTime();
let duration = (end - start)/1000;
document.getElementById("timeTaken").innerHTML = duration + "s";
makeShapeAfterDelay();
}