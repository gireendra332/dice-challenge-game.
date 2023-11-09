var dicee = Math.random();
dicee = (dicee * 6)+1; 
dicee = Math.floor(dicee);
var imageno="dice"+dicee+".png";
var images="images/"+imageno;
var dom=document.querySelectorAll("img")[0].setAttribute("src",images);

var dicee2= Math.random();
dicee2= (dicee2 * 6)+1; 
dicee2= Math.floor(dicee2);
var imageno2="dice"+dicee2+".png";
var images2="images/"+imageno2;
var dom=document.querySelectorAll("img")[1].setAttribute("src",images2);

if(dicee>dicee1){
    document.querySelector("h1").innerHTML="player 1 wins!";
}
else if(dicee<dicee1){
    document.querySelector("h1").innerHTML="player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML="draw";
}



