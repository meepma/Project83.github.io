var mouseevent="empty";
var lastx,lasty;
Canvas=document.getElementById("myCanvas");
ctx=Canvas.getContext("2d");
Canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseevent="mousedown";
}
Canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseevent="mouseup";
}
Canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseevent="mouseleave";
}
Canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
   currentx=e.clientX-Canvas.offsetLeft;
   currenty=e.clientY-Canvas.offsetTop;
   if(mouseevent=="mousedown"){
       ctx.beginPath();
       ctx.strokeStyle="cyan";
       ctx.lineWidth=6;
       ctx.moveTo(lastx,lasty);
       ctx.lineTo(currentx,currenty);
       ctx.stroke();
   }lastx=currentx;
   lasty=currenty;

}
var lastx,lasty;
Canvas=document.getElementById("myCanvas");
ctx=Canvas.getContext("2d");
var width=screen.width;
new_width=width-70;
new_height=screen.height-300;
if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
document.body.style.overflow="hidden";
}

Canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    lastx=e.touches[0].clientX-Canvas.offsetLeft;
    lasty=e.touches[0].clientY-Canvas.offsetTop;
}

Canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
   currentx=e.touches[0].clientX-Canvas.offsetLeft;
   currenty=e.touches[0].clientY-Canvas.offsetTop;
   
       ctx.beginPath();
       ctx.strokeStyle="cyan";
       ctx.lineWidth=6;
       ctx.moveTo(lastx,lasty);
       ctx.lineTo(currentx,currenty);
       ctx.stroke();
   lastx=currentx;
   lasty=currenty;

}