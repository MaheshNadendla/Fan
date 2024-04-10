
let x=0;

function WingsRotate()
{
    x=x+6;
    document.querySelector('.FanWings').style=
    `
    rotate:${x}deg;

    `;

    console.log(x);

    if(x%360==0)
    {
        x=0;
    }



    

}

let one,two,three,four;

let off =document.querySelectorAll('#off'); 
var fun =document.querySelectorAll("#first");
let second=document.querySelectorAll('#second');
let third =document.querySelectorAll('#third');
let fourth=document.querySelectorAll('#fourth');


function One()
{

    one=setInterval(WingsRotate,50);
    clearInterval(two);
    clearInterval(three);
    clearInterval(four);
    
    
}

function Two()
{
    
    two=setInterval(WingsRotate,30);
    clearInterval(one);
    clearInterval(three);
    clearInterval(four);
}

function Three()
{
    three=setInterval(WingsRotate,20);
    clearInterval(one);
    clearInterval(two);
    clearInterval(four);
}

function Four()
{
    four=setInterval(WingsRotate,10);
    clearInterval(one);
    clearInterval(two);
    clearInterval(three);
}
function Off()
{

    clearInterval(one);
    clearInterval(two);
    clearInterval(three);
    clearInterval(four);
    
}








