














let direction={x:0,y:0};
let gamesound=new Audio("/snackitem/game.mp3");
let eatingsound=new Audio("/snackitem/eating.mp3");
let gameover=new Audio("/snackitem/gameover.mp3");

let lastprint=0;
let speed=0;
let scores;

let score=0;
let snakearr=[
{x:13,y:15}
]
food={x:4,y:5};

const controller = new AbortController();
const signal = controller.signal;

// upar vale sare constant hai define kiye gaye hai

function main(ctime)
{
   
    window.requestAnimationFrame(main);
if((ctime-lastprint)/1000<1/speed)
{
    return;
}
lastprint=ctime;
console.log(ctime);
gameengine();
}


window.requestAnimationFrame(main);



// ye neeche vala function speed adjust krega






// colide   sectionnn
// jb uska dival me lg jaaye ya to fir khudse takra jaye
function iscollide(sarr)
{
  for(let i=1;i<snakearr.length;i++)
  {
    if(snakearr[0].x===snakearr[i].x && snakearr[0].y===snakearr[i].y)
    {
        gameover.play();
        gamesound.pause();
     
        return true;

    }
  }
  if(snakearr[0].x>=18 || snakearr[0].x <=0 &&  snakearr[0].x>=18 || snakearr[0].y <=0 )
  {
    gameover.play();
    gamesound.pause();
  
    return true;
  }
  
}


// main game engine funtion neeche vala hai

function gameengine()
{

if(iscollide(snakearr))
{
   
    document.querySelector("#score").innerText='00';
    alert('your game is now over press any key to start this again');
     direction={x:0,y:0};
    snakearr=[ {x:13,y:15} ]
    gamesound.play();
}


if(snakearr[0].y===food.y && snakearr[0].x===food.x){
    eatingsound.play();
snakearr.unshift({x:snakearr[0].x + direction.x, y : snakearr[0].y +direction.y})
score+=1;
 scores=JSON.stringify(score);
localStorage.setItem('score' ,scores);
let s=document.querySelector("#score");
s.innerText=`${score}`;

let a=2;
let b=16;
food={ x: Math.round(a+(b-a)*Math.random()) ,y: Math.round(a+(b-a)*Math.random())}

}


// moving snack;;;;;;;

// moving snake
for (let i = snakearr.length - 2; i >= 0; i--) {
    snakearr[i + 1] = { ...snakearr[i] };
}
snakearr[0].x += direction.x;
snakearr[0].y += direction.y;


// isme ek div create krke food aur snack ko show kra gaya hai

box=document.querySelector(".box");
box.innerHTML="";
snakearr.forEach((e,index)=>{
snakeelement=document.createElement('div');
snakeelement.style.gridRowStart=e.y;
snakeelement.style.gridColumnStart=e.x;


    snakeelement.classList.add('mainhead');


    snakeelement.classList.add('head');


box.appendChild(snakeelement);
})

foodelement=document.createElement('div');
foodelement.style.gridRowStart=food.y;
foodelement.style.gridColumnStart=food.x;
foodelement.classList.add('food');
box.appendChild(foodelement);
}


//   ye button ke liye event listener lagaya hua hai

window.addEventListener('keydown', e=>{
    
    
    gamesound.play();
switch(e.key)
{  
    case "ArrowUp":
  direction.x=0;
direction.y=-1;
    break;
     
    case "ArrowDown":
        direction.x=0;
        direction.y=1;
    
    break;

    case "ArrowLeft":
        direction.x=-1;
        direction.y=0;

    break;


    case "ArrowRight":
          direction.x=1;
        direction.y=0;
   controller.abort();

    break;
   
} 
})

function call()
{
    let body=document.querySelector(".main");
    body.style.opacity=0;
    let buttonbox=document.querySelector(".container");
    document.querySelector(".button1").addEventListener('click',()=>{
        speed=2;
        buttonbox.style.display="none";
        body.style.opacity=1;
    })
    document.querySelector(".button2").addEventListener('click',()=>{
        speed=5;
        buttonbox.style.display="none";
        body.style.opacity=1;
    })
    document.querySelector(".button3").addEventListener('click',()=>{
        speed=8;
        buttonbox.style.display="none";
        body.style.opacity=1;
    })


}




setTimeout(call,0);










