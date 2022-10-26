var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
 
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
   
    color = "black";
    width_of_line = 1;
    canvas.addEventListener("mousedown", sucedeeventodown);
 
    function sucedeeventodown(e)
    {
        //inicio de la actividad adicional
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //final de la actividad adicional
 
        mouseEvent = "mouseDown";
    }
 
    canvas.addEventListener("mousemove", sucedeeventomove);
    function sucedeeventomove(e)
    {
        posicionactualX = e.clientX - canvas.offsetLeft;
        posicionactualY = e.clientY - canvas.offsetTop;
 
        if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
 
        console.log("Last position of x and y coordinates = ");
        ctx.moveTo(last_position_of_x, last_position_of_y);
 
        ctx.lineTo(posicionactualX, posicionactualY);
        ctx.stroke();
        }
 
        last_position_of_x = posicionactualX;
        last_position_of_y = posicionactualY;
    }
 
    canvas.addEventListener("mouseup", sucedeeventoup);
    function sucedeeventoup(e)
    {
        mouseEvent = "mouseUP";
    }
 
    canvas.addEventListener("mouseleave", sucedeeventoup);
    function sucedeeventoup(e)
    {
        mouseEvent = "mouseleave";
    }
 
 
//actividad adicional
function limpiar() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
