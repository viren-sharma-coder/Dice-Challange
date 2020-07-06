var ranNo1=Math.floor(Math.random()*6)+1;
var diceImage1="dice"+ranNo1+".png";
var imgResource="images/"+diceImage1;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",imgResource);


var ranNo2=Math.floor(Math.random()*6)+1;
var diceImage2="dice"+ranNo2+".png";
var imgResource2="images/"+diceImage2;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",imgResource2);

if(ranNo1<ranNo2)
{
	document.querySelector("h1").innerHTML="player 2 won";
}

else if(ranNo1>ranNo2)
{
	document.querySelector("h1").innerHTML="player 1 won"
}

else
{
	document.querySelector("h1").innerHTML="mathch drew";
}