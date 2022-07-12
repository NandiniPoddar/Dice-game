var n1= Math.floor(Math.random()*6 +1);
var n2= Math.floor(Math.random()*6 +1);
var src1="images/dice"+n1+".png";
var src2="images/dice"+n2+".png";
document.querySelector(".img1").setAttribute("src", src1);
document.querySelector(".img2").setAttribute("src", src2);
if(n1>n2){
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if(n1<n2){
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}