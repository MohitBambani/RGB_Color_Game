var squares=document.querySelectorAll(".square");
var h1=document.querySelector("#colorConfig");
var screen=document.querySelector("#screen");
var heading1=document.querySelector("#heading1");
var resetButton=document.querySelector("#reset");
var hard_button=document.querySelector("#hard");
var easy_button=document.querySelector("#easy");
var numberOfSquares=6;

var colors=generateColors(6);
var gameWon=false;
var pickedColor=pickedColorNew();
h1.textContent=pickedColor;
h1.classList.add("styleh1");
hard_button.classList.add("colorButton");
for(var i=0;i<6;i++)
{
    squares[i].style.backgroundColor=colors[i];
}



for(var i=0;i<6;i++)
{
    squares[i].addEventListener("click",function(){
        if(!gameWon)
        {
            var color=this.style.backgroundColor;
            this.style.backgroundColor="black";
            if(color===pickedColor)
            {
                screen.textContent="Correct";
                resetButton.textContent="Play Again?";
                gameWon=!gameWon;
                changeColor(color);
            }
            else
            {
                screen.textContent="Try Again";
            }
            
        }
        
    });
}




hard_button.addEventListener("click",function(){
    this.classList.add("colorButton");
    easy_button.classList.remove("colorButton");
    numberOfSquares=6;
    heading1.style.backgroundColor="steelblue";

    colors=generateColors(6);
    gameWon=false;
    pickedColor=pickedColorNew();
    h1.textContent=pickedColor;
    screen.textContent="";
    for(var i=0;i<6;i++)
    {
        squares[i].classList.remove("hideit");
        squares[i].style.backgroundColor=colors[i];
    }
});
easy_button.addEventListener("click",function(){
    numberOfSquares=3;
    this.classList.add("colorButton");
    hard_button.classList.remove("colorButton");
    heading1.style.backgroundColor="steelblue";
    colors=generateColors(3);
    gameWon=false;
    pickedColor=pickedColorNew();
    h1.textContent=pickedColor;
    screen.textContent="";
    for(var i=0;i<3;i++)
    {
        squares[i].style.backgroundColor=colors[i];
    }
    for(var i=3;i<6;i++)
    {
        squares[i].classList.add("hideit");
    }
});
function changeColor(color)
{
    for(var j=0;j<6;j++)
    {
        squares[j].style.backgroundColor=color;
    }
    heading1.style.backgroundColor=color;
}

function generateColors(length)
{
    var arr=[];
    for(var i=0;i<length;i++)
    {
        var red=0;
        var green=0;
        var blue=0;
        red=Math.floor(Math.random()*256);
        green=Math.floor(Math.random()*256);
        blue=Math.floor(Math.random()*256);
        var color="rgb("+red+", "+green+", "+blue+")";
        arr.push(color);
    }
    return arr;
}

function pickedColorNew()
{
    var random=Math.floor(Math.random()*(colors.length));
    return colors[random];
}

resetButton.addEventListener("click",function(){
    this.textContent="Change Colors";
    heading1.style.backgroundColor="steelblue";
    gameWon=false;
    screen.textContent="";
    colors=generateColors(numberOfSquares);
    pickedColor=pickedColorNew();
    h1.textContent=pickedColor;
    for(var i=0;i<numberOfSquares;i++)
    {
        squares[i].style.backgroundColor=colors[i];
    }
});
