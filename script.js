var blue="#0074D9";
var lime="#01FF70";
var yellow="#FFDC00";
var red="#FF4136";

var buttonBlue=document.getElementById("blue");
var buttonLime=document.getElementById("lime");
var buttonYellow=document.getElementById("yellow");
var buttonRed=document.getElementById("red");

var last="";
var body=document.getElementById("body");

function color(value){
    if(last===value){
        buttonBlue.style.border="none";
        buttonLime.style.border="none";
        buttonYellow.style.border="none";
        buttonRed.style.border="none";
        body.style.backgroundColor="white";
        last="";
    }else {if(value===blue){
         buttonBlue.style.border="0.5vw dotted white";
         buttonLime.style.border="none";
        buttonYellow.style.border="none";
        buttonRed.style.border="none";
     }else if (value===lime){
         buttonLime.style.border="0.5vw dotted white";
         buttonBlue.style.border="none";
         buttonYellow.style.border="none";
        buttonRed.style.border="none";
     }else if(value===yellow){
         buttonYellow.style.border="0.5vw dotted white";
         buttonBlue.style.border="none";
         buttonLime.style.border="none";
         buttonRed.style.border="none";
     }else if(value===red){
         buttonRed.style.border="0.5vw dotted white";
         buttonBlue.style.border="none";
         buttonLime.style.border="none";
         buttonYellow.style.border="none";    
     }
     body.style.backgroundColor=value;
     last=value;
    }
} 