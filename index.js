var randomNumber1=Math.ceil(Math.random()*6);
var randomNumber2=Math.ceil(Math.random()*6);
var x1="./images/dice"+randomNumber1+".png";
var x2="./images/dice"+randomNumber2+".png";
document.querySelector(".img1").setAttribute("src",x1);
document.querySelector(".img2").setAttribute("src",x2);
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 WINS! 🚩";
}
else if(randomNumber1===randomNumber2)
{
    document.querySelector("h1").innerHTML="Draw!";
}
else
{
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
