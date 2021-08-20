//document.querySelector("button").addEventListener("click",handleClick);
//document.querySelectorAll("button")[0].addEventListener("click",handleClick);
var i;

//this code is to detect the button that is pressed
var n= document.querySelectorAll("button").length;
  for(i=0;i<n;i++){  
   document.querySelectorAll(".drum")[i].addEventListener("click",  function (){
    var buttonHTML= this.innerHTML;  //detects the html of the button that is clicked
   makesound(buttonHTML);
  buttonAnimation(buttonHTML);
  });   
  }


  document.addEventListener("keypress",function(event){
   makesound(event.key);  //the key property of the event is passed to makesound;
   buttonAnimation(event.key);
  });

 //this code is to detect the button the keyboard that is pressed 
function makesound(key){
  switch(key){
    case "w":
      var tom1=new Audio("sounds/tom-1.mp3");
     tom1.play();
     break;
     
     case "a":
      var tom2=new Audio("sounds/tom-2.mp3");
     tom2.play();
     break;

     case "s":
      var tom3=new Audio("sounds/tom-3.mp3");
     tom3.play();
     break;

     case "d":
      var tom4=new Audio("sounds/tom-4.mp3");
     tom4.play();
     break;

     case "j":
      var snare=new Audio("sounds/snare.mp3");
     snare.play();
     break;

     case "k":
      var crash=new Audio("sounds/crash.mp3");
     crash.play();
     break;

     case "l":
      var kick=new Audio("sounds/kick-bass.mp3");
     kick.play();
     break;

     default:
       console.log(key);
  }
}

/*function anotheraddeventlistener(type,callback){
  var event={
   eventtype: "keypress",
   key: "p",
  duration: 2
  }
  if(event.eventtype===type){
    callback(eventtype);
  }
}*/

function buttonAnimation(currentkey){

 var hover= document.querySelector("."+currentkey); //"eg. class=".w"
hover.classList.add("pressed");
setTimeout(function(){
  hover.classList.remove("pressed");
},100);
}