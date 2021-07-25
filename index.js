function checkRefresh() {
    if (!sessionStorage.getItem("stone")) {
      sessionStorage.setItem("stone", "extra")
   
    } else(
      game()
    )
   
  }

function game(){

var randomNumber1 =Math.floor(Math.random()*3+1);
var randomNumber2 =Math.floor(Math.random()*3+1);

document.querySelector(".img1").setAttribute("src","images/image"+randomNumber1+".png");

document.querySelector(".img2").setAttribute("src","images/image"+randomNumber2+".png");

var x=randomNumber1;
var y=randomNumber2;

var result;
if(x!=3 && y==x+1)
{   
   
    result="<i class='fas fa-trophy'></i> Player-2 Wins ";
    
}
else if(x==3 && y==1)
{
    result= "Player-2 Wins <i class='fas fa-trophy'></i>";

}
else if(x==y)
{
    result="!Draw";
}
else{
  result="<i class='fas fa-trophy'></i> Player1 Wins "
}
 document.querySelector("h1").innerHTML=result;
}
document.querySelector("body").onload = checkRefresh();