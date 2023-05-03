// canvas
let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");

// canvas starting image
let img = new Image();
img.src = "images/canvas_start.jpg";
img.onload = function(){
ctx.drawImage(img,0,0,1400,600); 
}

let easy = document.getElementById("easy");
let medium = document.getElementById("medium");
let hard = document.getElementById("hard");
easy.checked = true;

let white = document.getElementById("white");
let yellow = document.getElementById("yellow");
white.checked = true;

let hand = document.getElementById("hand");
let sword = document.getElementById("sword");
hand.checked = true;

// tools
let b=0,f=0,life=5;
let a=0,x, y, R, L, FillCh="", mycounter1 = 0;
function stickmanNormal(){
    let y1=y,x1=x;
   if(a==0){
       ctx.strokeStyle=FillCh;
       ctx.fillStyle=FillCh;
       
   }
    ctx.beginPath();
    ctx.arc(x,y,10,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    //neck
    ctx.moveTo(x,y);
    y+=30;
    ctx.lineTo(x,y);
    //left hand
    x-=25
    y+=8;
    ctx.moveTo(x,y);
    x+=25;
    y-=8;
    ctx.lineTo(x,y);
    //right hand
    x+=25;
    y+=8;
    ctx.moveTo(x,y);
    x-=25;
    y-=8
    ctx.lineTo(x,y);
    //body
    ctx.moveTo(x,y);
    y+=40
    ctx.lineTo(x,y);
    //left leg
    ctx.moveTo(x,y);
    x-=15;
    y+=15;
    ctx.lineTo(x,y);
    //right leg
    x+=15;
    y-=15;
    ctx.moveTo(x,y);
    x+=15;
    y+=15;
    ctx.lineTo(x,y);
    ctx.stroke();
    x=x1;
    y=y1;
}

function stickmanSpaceHandR(){
    let y1=y,x1=x;
    ctx.strokeStyle = FillCh;
    ctx.fillStyle= FillCh;
    ctx.beginPath();
    ctx.arc(x,y,10,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    //neck
    ctx.moveTo(x,y);
    y+=30;
    ctx.lineTo(x,y);
    //left hand
    x-=25
    y+=8;
    ctx.moveTo(x,y);
    x+=25;
    y-=8;
    ctx.lineTo(x,y);
    //right hand
    x+=30;
    ctx.moveTo(x,y);
    x-=30;
    ctx.lineTo(x,y);
    //body
    ctx.moveTo(x,y);
    y+=40
    ctx.lineTo(x,y);
    //left leg
    ctx.moveTo(x,y);
    x-=15;
    y+=15;
    ctx.lineTo(x,y);
    //right leg
    x+=15;
    y-=15;
    ctx.moveTo(x,y);
    x+=15;
    y+=15;
    ctx.lineTo(x,y);
    ctx.stroke();
    x=x1;
    y=y1;
}

function stickmanSpaceHandL(){
    let y1=y,x1=x;
    ctx.strokeStyle = FillCh;
    ctx.fillStyle= FillCh;
    ctx.beginPath();
    ctx.arc(x,y,10,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    //neck
    ctx.moveTo(x,y);
    y+=30;
    ctx.lineTo(x,y);
    //left hand
    x-=30
    ctx.moveTo(x,y);
    x+=30;
    ctx.lineTo(x,y);
    //right hand
    x+=25;
    y+=8;
    ctx.moveTo(x,y);
    x-=25;
    y-=8
    ctx.lineTo(x,y);
    //body
    ctx.moveTo(x,y);
    y+=40
    ctx.lineTo(x,y);
    //left leg
    ctx.moveTo(x,y);
    x-=15;
    y+=15;
    ctx.lineTo(x,y);
    //right leg
    x+=15;
    y-=15;
    ctx.moveTo(x,y);
    x+=15;
    y+=15;
    ctx.lineTo(x,y);
    ctx.stroke();
    x=x1;
    y=y1;
}

function toRight(){
    let y1=y,x1=x;
    ctx.strokeStyle = FillCh;
    ctx.fillStyle= FillCh;
    ctx.beginPath();
    ctx.arc(x,y,10,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    //neck
    ctx.moveTo(x,y);
    y+=30;
    ctx.lineTo(x,y);
    //left hand
    x+=20;
    y+=20;
    ctx.moveTo(x,y);
    x-=20;
    y-=20;
    ctx.lineTo(x,y);
    //right hand
    x+=25;
    ctx.moveTo(x,y);
    x-=25;
    ctx.lineTo(x,y);
    //body
    ctx.moveTo(x,y);
    y+=40;
    ctx.lineTo(x,y);
    //left leg
    ctx.moveTo(x,y);
    x+=5;
    y+=15;
    ctx.lineTo(x,y);
    //right leg
    x-=5;
    y-=15;
    ctx.moveTo(x,y);
    x+=15;
    y+=15;
    ctx.lineTo(x,y);
    ctx.stroke();
    x=x1;
    y=y1;
}

function toLeft(){
    let y1=y,x1=x;
    ctx.strokeStyle = FillCh;
    ctx.fillStyle= FillCh;
    ctx.beginPath();
    ctx.arc(x,y,10,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    //neck
    ctx.moveTo(x,y);
    y+=30;
    ctx.lineTo(x,y);
    //left hand
    x-=25
    ctx.moveTo(x,y);
    x+=25;
    ctx.lineTo(x,y);
    //right hand
    x-=20;
    y+=20;
    ctx.moveTo(x,y);
    x+=20;
    y-=20;
    ctx.lineTo(x,y);
    //body
    ctx.moveTo(x,y);
    y+=40
    ctx.lineTo(x,y);
    //left leg
    ctx.moveTo(x,y);
    x-=15;
    y+=15;
    ctx.lineTo(x,y);
    //right leg
    x+=15;
    y-=15;
    ctx.moveTo(x,y);
    x-=5;
    y+=15;
    ctx.lineTo(x,y);
    ctx.stroke();
    x=x1;
    y=y1;
}
function stickmanSwordR(){
    let y1=y,x1=x;
    if(a==0){
       ctx.strokeStyle=FillCh;
       ctx.fillStyle=FillCh;
       
   }
    ctx.beginPath();
    ctx.arc(x,y,10,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    //neck
    ctx.moveTo(x,y);
    y+=30;
    ctx.lineTo(x,y);
    //left hand
    x-=25
    y+=8;
    ctx.moveTo(x,y);
    x+=25;
    y-=8;
    ctx.lineTo(x,y);
    //right hand
    x+=25;
    y+=8;
    ctx.moveTo(x,y);
    x-=25;
    y-=8;
    ctx.lineTo(x,y);
    //sword
    x+=20;
    y+=14;
    ctx.moveTo(x,y);
    x+=10;
    y-=10;
    ctx.lineTo(x,y);
    ctx.moveTo(x,y);
    x+=3;
    y+=3;
    ctx.lineTo(x,y);
    ctx.moveTo(x,y);
    x-=6;
    y-=6;
    ctx.lineTo(x,y);
    x+=3;
    y+=3;
    ctx.moveTo(x,y);
    x+=35;
    y-=35;
    ctx.lineTo(x,y);
    //body
    x-=65;
    y+=32;
    ctx.moveTo(x,y);
    y+=40
    ctx.lineTo(x,y);
    //left leg
    ctx.moveTo(x,y);
    x-=15;
    y+=15;
    ctx.lineTo(x,y);
    //right leg
    x+=15;
    y-=15;
    ctx.moveTo(x,y);
    x+=15;
    y+=15;
    ctx.lineTo(x,y);
    ctx.stroke();
    x=x1;
    y=y1;
}
function stickmanSwordL(){
    let y1=y,x1=x;
    ctx.beginPath();
    ctx.arc(x,y,10,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    //neck
    ctx.moveTo(x,y);
    y+=30;
    ctx.lineTo(x,y);
    //left hand
    x-=25
    y+=8;
    ctx.moveTo(x,y);
    x+=25;
    y-=8;
    ctx.lineTo(x,y);
    //right hand
    x+=25;
    y+=8;
    ctx.moveTo(x,y);
    x-=25;
    y-=8;
    ctx.lineTo(x,y);
    //sword
    x-=20;
    y+=13;
    ctx.moveTo(x,y);
    x-=10;
    y-=10;
    ctx.lineTo(x,y);
    x-=3;
    y+=3;
    ctx.moveTo(x,y);
    x+=6;
    y-=6;
    ctx.lineTo(x,y);
    x-=3;
    y+=3;
    ctx.moveTo(x,y);
    x-=35;
    y-=35;
    ctx.lineTo(x,y);
    //body
    x+=65;
    y+=2;
    ctx.moveTo(x,y);
    y+=70;
    ctx.lineTo(x,y);
    //left leg
    ctx.moveTo(x,y);
    x-=15;
    y+=15;
    ctx.lineTo(x,y);
    //right leg
    x+=15;
    y-=15;
    ctx.moveTo(x,y);
    x+=15;
    y+=15;
    ctx.lineTo(x,y);
    ctx.stroke();
    x=x1;
    y=y1;
}
function swordToRight(){
    let y1=y,x1=x;
    ctx.strokeStyle = FillCh;
    ctx.fillStyle= FillCh;
    ctx.beginPath();
    ctx.arc(x,y,10,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    //neck
    ctx.moveTo(x,y);
    y+=30;
    ctx.lineTo(x,y);
    //left hand
    x+=20;
    y+=20;
    ctx.moveTo(x,y);
    x-=20;
    y-=20;
    ctx.lineTo(x,y);
    //sword
    x+=20;
    y+=20;
    ctx.moveTo(x,y);
    x+=10;
    y-=10;
    ctx.lineTo(x,y);
    ctx.moveTo(x,y);
    x+=3;
    y+=3;
    ctx.lineTo(x,y);
    ctx.moveTo(x,y);
    x-=6;
    y-=6;
    ctx.lineTo(x,y);
    x+=3;
    y+=3;
    ctx.moveTo(x,y);
    x+=35;
    y-=35;
    ctx.lineTo(x,y);
    x-=65;
    y+=25;
    //right hand
    x+=25;
    ctx.moveTo(x,y);
    x-=25;
    ctx.lineTo(x,y);
    //body
    ctx.moveTo(x,y);
    y+=40;
    ctx.lineTo(x,y);
    //left leg
    ctx.moveTo(x,y);
    x+=5;
    y+=15;
    ctx.lineTo(x,y);
    //right leg
    x-=5;
    y-=15;
    ctx.moveTo(x,y);
    x+=15;
    y+=15;
    ctx.lineTo(x,y);
    ctx.stroke();
    x=x1;
    y=y1;
}
function swordToleft(){
    let y1=y,x1=x;
    ctx.strokeStyle = FillCh;
    ctx.fillStyle= FillCh;
    ctx.beginPath();
    ctx.arc(x,y,10,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    //neck
    ctx.moveTo(x,y);
    y+=30;
    ctx.lineTo(x,y);
    //left hand
    x-=25
    ctx.moveTo(x,y);
    x+=25;
    ctx.lineTo(x,y);
    //right hand
    x-=20;
    y+=20;
    ctx.moveTo(x,y);
    x+=20;
    y-=20;
    ctx.lineTo(x,y);
    //sword
    x-=20;
    y+=20;
    ctx.moveTo(x,y);
    x-=8;
    y-=8;
    ctx.lineTo(x,y);
    x-=3;
    y+=3;
    ctx.moveTo(x,y);
    x+=6;
    y-=6;
    ctx.lineTo(x,y);
    x-=3;
    y+=3;
    ctx.moveTo(x,y);
    x-=35;
    y-=35;
    ctx.lineTo(x,y);
    //body
    x+=63;
    y+=23;
    ctx.moveTo(x,y);
    y+=40
    ctx.lineTo(x,y);
    //left leg
    ctx.moveTo(x,y);
    x-=15;
    y+=15;
    ctx.lineTo(x,y);
    //right leg
    x+=15;
    y-=15;
    ctx.moveTo(x,y);
    x-=5;
    y+=15;
    ctx.lineTo(x,y);
    ctx.stroke();
    x=x1;
    y=y1;
}
function stickmanSpaceSwordR(){
        let y1=y,x1=x;
    ctx.strokeStyle = FillCh;
    ctx.fillStyle= FillCh;
    ctx.beginPath();
    ctx.arc(x,y,10,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    //neck
    ctx.moveTo(x,y);
    y+=30;
    ctx.lineTo(x,y);
    //left hand
    x-=25
    y+=8;
    ctx.moveTo(x,y);
    x+=25;
    y-=8;
    ctx.lineTo(x,y);
    //right hand
    x+=25;
    y+=12;
    ctx.moveTo(x,y);
    x-=25;
    y-=12;
    ctx.lineTo(x,y);
    //sword
    x+=20;
    y+=18;
    ctx.moveTo(x,y);
    x+=10;
    y-=10;
    ctx.lineTo(x,y);
    ctx.moveTo(x,y);
    x+=3;
    y+=3;
    ctx.lineTo(x,y);
    ctx.moveTo(x,y);
    x-=6;
    y-=6;
    ctx.lineTo(x,y);
    x+=3;
    y+=3;
    ctx.moveTo(x,y);
    s1=x;
    s2=y;
    x+=35;
    y-=35;
    ctx.lineTo(x,y); 
    //body
    x-=65;
    y+=28;
    ctx.moveTo(x,y);
    y+=40
    ctx.lineTo(x,y);
    //left leg
    ctx.moveTo(x,y);
    x-=15;
    y+=15;
    ctx.lineTo(x,y);
    //right leg
    x+=15;
    y-=15;
    ctx.moveTo(x,y);
    x+=15;
    y+=15;
    ctx.lineTo(x,y);
    ctx.stroke();
    x=x1;
    y=y1;
}
function stickmanSpaceSwordL(){
        let y1=y,x1=x;
    ctx.strokeStyle = FillCh;
    ctx.fillStyle= FillCh;
    ctx.beginPath();
    ctx.arc(x,y,10,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    //neck
    ctx.moveTo(x,y);
    y+=30;
    ctx.lineTo(x,y);
    //left hand
    x-=25;
    y+=12;
    ctx.moveTo(x,y);
    x+=25;
    y-=12; 
    ctx.lineTo(x,y);
    //sword
    x-=20;
    y+=18;      
    ctx.moveTo(x,y);
    x-=10;
    y-=10;
    ctx.lineTo(x,y);
    x-=3;
    y+=3;
    ctx.moveTo(x,y);
    x+=6;
    y-=6;
    ctx.lineTo(x,y);
    x-=3;
    y+=3;
    ctx.moveTo(x,y);
    x-=35;
    y-=35;
    ctx.lineTo(x,y);
    //right hand
    x+=90;
    y+=35;
    ctx.moveTo(x,y);
    x-=25;
    y-=8
    ctx.lineTo(x,y);
    //body
    ctx.moveTo(x,y);
    y+=40
    ctx.lineTo(x,y);
    //left leg
    ctx.moveTo(x,y);
    x-=15;
    y+=15;
    ctx.lineTo(x,y);
    //right leg
    x+=15;
    y-=15;
    ctx.moveTo(x,y);
    x+=15;
    y+=15;
    ctx.lineTo(x,y);
    ctx.stroke();
    x=x1;
    y=y1;
}
function enemmyR(){
    ctx.beginPath();
    ctx.strokeStyle=FillCh;
    ctx.moveTo(Ex,Ey);
    ctx.lineTo(Ex-30,Ey);
    ctx.moveTo(Ex,Ey);
    ctx.lineTo(Ex+10,Ey-5);
    ctx.moveTo(Ex,Ey);
    ctx.lineTo(Ex+10,Ey+5);
    ctx.moveTo(Ex-30,Ey);
    ctx.lineTo(Ex-20,Ey+5);
    ctx.moveTo(Ex-30,Ey);
    ctx.lineTo(Ex-20,Ey-5);
    ctx.stroke();
}
function enemmyL(){
    ctx.beginPath();
    ctx.strokeStyle=FillCh;
    ctx.moveTo(ExL,EyL);
    ctx.lineTo(ExL+30,EyL);
    ctx.moveTo(ExL,EyL);
    ctx.lineTo(ExL-10,EyL-5);
    ctx.moveTo(ExL,EyL);
    ctx.lineTo(ExL-10,EyL+5);
    ctx.moveTo(ExL+30,EyL);
    ctx.lineTo(ExL+20,EyL-5);
    ctx.moveTo(ExL+30,EyL);
    ctx.lineTo(ExL+20,EyL+5);
    ctx.stroke();
}

// The Hard Part
let weapon, Ex = 1440, Ey = 550, ExL = 0, EyL = 550, w = 0, c = 0, diff=0;
let lives = document.getElementById("life");
let elm6 = document.getElementById("start");
elm6.onclick = start;
function start(){
    life=5;
    lives.innerHTML = "Lives Left: "+life.toString();
    setTimeout(() => {
        a++;
            },100)
    ctx.clearRect(0,0,1400,600);
    x=700;
    y=500;
    R=1;
    L=0;
    let city = new Image();
    city.src = "images/beach.jpg";
    if(easy.checked == true){
        if(hand.checked == true){
            if(white.checked == true){
                city.onload = function(){
                ctx.drawImage(city,0,0,1400,450);
                stickmanNormal();
                }
                diff = 200;
                weapon = 0;
                FillCh = "white";
            }
        }
    }
    if(easy.checked == true){
        if(hand.checked == true){
            if(yellow.checked == true){
                city.onload = function(){
                ctx.drawImage(city,0,0,1400,450);
                stickmanNormal();
                }
                diff = 200;
                weapon = 0;
                FillCh = "yellow";
            }
        }
    }
    if(easy.checked == true){
        if(sword.checked == true){
            if(white.checked == true){
                city.onload = function(){
                ctx.drawImage(city,0,0,1400,450);
                stickmanSwordR();
                }
                diff = 200;
                weapon = 1;
                FillCh = "white";
            }
        }
    }
    if(easy.checked == true){
        if(sword.checked == true){
            if(yellow.checked == true){
                city.onload = function(){
                ctx.drawImage(city,0,0,1400,450);
                stickmanSwordR();
                }
                weapon = 1;
                diff = 200;
                FillCh = "yellow";
            }
        }
    }
    if(medium.checked == true){
        if(hand.checked == true){
            if(white.checked == true){
                city.onload = function(){
                ctx.drawImage(city,0,0,1400,450);
                stickmanNormal();
                }
                diff = 100;
                weapon = 0;
                FillCh = "white";
            }
        }
    }
    if(medium.checked == true){
        if(hand.checked == true){
            if(yellow.checked == true){
                city.onload = function(){
                ctx.drawImage(city,0,0,1400,450);
                stickmanNormal();
                }
                diff = 100;
                weapon = 0;
                FillCh = "yellow";
            }
        }
    }
    if(medium.checked == true){
        if(sword.checked == true){
            if(white.checked == true){
                city.onload = function(){
                ctx.drawImage(city,0,0,1400,450);
                stickmanSwordR();
                }
                diff = 100;
                weapon = 1;
                FillCh = "white";
            }
        }
    }
    if(medium.checked == true){
        if(sword.checked == true){
            if(yellow.checked == true){
                city.onload = function(){
                ctx.drawImage(city,0,0,1400,450);
                stickmanSwordR();
                }
                weapon = 1;
                diff = 100;
                FillCh = "yellow";
            }
        }
    }
    if(hard.checked == true){
        if(hand.checked == true){
            if(white.checked == true){
                city.onload = function(){
                ctx.drawImage(city,0,0,1400,450);
                stickmanNormal();
                }
                diff = 50;
                weapon = 0;
                FillCh = "white";
            }
        }
    }
    if(hard.checked == true){
        if(hand.checked == true){
            if(yellow.checked == true){
                city.onload = function(){
                ctx.drawImage(city,0,0,1400,450);
                stickmanNormal();
                }
                diff = 50;
                weapon = 0;
                FillCh = "yellow";
            }
        }
    }
    if(hard.checked == true){
        if(sword.checked == true){
            if(white.checked == true){
                city.onload = function(){
                ctx.drawImage(city,0,0,1400,450);
                stickmanSwordR();
                }
                diff = 50;
                weapon = 1;
                FillCh = "white";
            }
        }
    }
    if(hard.checked == true){
        if(sword.checked == true){
            if(yellow.checked == true){
                city.onload = function(){
                ctx.drawImage(city,0,0,1400,450);
                stickmanSwordR();
                }
                weapon = 1;
                diff = 50;
                FillCh = "yellow";
            }
        }
    }
    
let r=setInterval(() => {
    if(Ex>x+69){
    ctx.clearRect(Ex-30,Ey-30,51,51);
         enemmyR();
    Ex-=10;
    }
    else
    {
        if(w==0){
        ctx.clearRect(0,450,1400,150);
            if(b==0){
        ctx.strokeStyle="red";
            ctx.fillStyle="red";
            life--;
            lives.innerHTML ="Lives Left: "+ life.toString();
                if(life == 0){
                    alert("You Died!");
                    FillCh="black";
                    FillCh="black";
            clearInterval(r);
            clearInterval(p);
            clearTimeout(e);
            clearTimeout(q);
        }
            }
            else
                b=0;
        let e=setTimeout(() => {
            ctx.fillStyle=FillCh;
        ctx.strokeStyle=FillCh;
                        if(weapon == 0){
                stickmanNormal();
            }
            if(weapon == 1 && R == 1){
                stickmanSwordR();
            }
            if(weapon == 1 && L == 1){
                stickmanSwordL();
            }
            c=1;
        }, 100);
        if(c==1)
                    if(weapon == 0){
                stickmanNormal();
            }
            if(weapon == 1 && R == 1){
                stickmanSwordR();
            }
            if(weapon == 1 && L == 1){
                stickmanSwordL();
            }
        Ex=1400;
        c=0;
    }
    else
    w=0;
}
},diff);

let p=setInterval(() => {
    if(ExL<x-40){
     ctx.clearRect(ExL-30,EyL-30,51,51);
         enemmyL();
        ExL+=10;
    }
    else
    {
        ctx.clearRect(0,450,1400,150);
        if(f==0){
        ctx.strokeStyle="red";
        ctx.fillStyle="red";
        life--;
        lives.innerHTML ="Lives Left: "+ life.toString();
        if(life == 0){
            alert("You Died!");
            FillCh="black";
            FillCh="black";
            clearInterval(r);
            clearInterval(p);
            clearTimeout(e);
            clearTimeout(q);
        }
        }
        else{f=0;}
        let q=setTimeout(() => {
            ctx.fillStyle=FillCh;
            ctx.strokeStyle=FillCh;
                        if(weapon == 0){
                stickmanNormal();
            }
            if(weapon == 1 && R == 1){
                stickmanSwordR();
            }
            if(weapon == 1 && L == 1){
                stickmanSwordL();
            }
            c=1;
        }, 100);
        if(c==1)
                    if(weapon == 0){
                stickmanNormal();
            }
            if(weapon == 1 && R == 1){
                stickmanSwordR();
            }
            if(weapon == 1 && L == 1){
                stickmanSwordL();
            }
        ExL=0;
        c=0;
    }
}, diff);
    mycounter1 = 1;
}

addEventListener("keydown",function(event){
    if(mycounter1 == 1 && weapon == 0){
   //right
   if(event.keyCode==39 && x<1370){
       L=0;
       R=1;
       ctx.clearRect(0,450,1400,150);
       toRight();
   }
   //left
   if(event.keyCode==37 && x>30){
       L=1;
       R=0;
       ctx.clearRect(0,450,1400,150);
       toLeft();
   }
   //G
   if(event.keyCode==71){
       if(R==1){
       ctx.clearRect(0,450,1400,150);
       stickmanSpaceHandR();
    }
    if(L==1){
        ctx.clearRect(0,450,1400,150);
        stickmanSpaceHandL();
        }
    }
    }
        if(mycounter1 == 1 && weapon == 1){
   //right
   if(event.keyCode==39 && x<1370){
       L=0;
       R=1;
       ctx.clearRect(0,450,1400,150);
       swordToRight();
   }
   //left
   if(event.keyCode==37 && x>30){
       L=1;
       R=0;
       ctx.clearRect(0,450,1400,150);
       swordToleft();
   }
   //G
   if(event.keyCode==71){
       if(R==1){
       ctx.clearRect(0,450,1400,150);
       stickmanSpaceSwordR();
    }
    if(L==1){
        ctx.clearRect(0,450,1400,150);
        stickmanSpaceSwordL();
    }
    }
    }
})
addEventListener("keyup",function(event){
    if(mycounter1 == 1 && weapon == 0){
        //G
        if(event.keyCode==71){
         if(R==1){
             if(Ex>x+69){}  else {
                 b=1;
             }
         }
        if(L==1){
            if(Ex<x-40){} else{
                f=1;
            }
         }
         ctx.clearRect(0,450,1400,150);
         stickmanNormal();
        }
        //right
        if(event.keyCode==39 && x<1370){
            x+=20;
            ctx.clearRect(0,450,1400,150);
             stickmanNormal();
        }
        //left
        if(event.keyCode==37 && x>30){
            x-=20;
            ctx.clearRect(0,450,1400,150);
            stickmanNormal();
        }
    } else {
        if(mycounter1 == 1 && weapon == 1){
        //G
        if(event.keyCode==71){
             if(R==1){
             if(Ex>x+69){}  else {
                 b=1;
             }
         }
        if(L==1){
            if(Ex<x-40){} else{
                f=1;
            }
         }
         ctx.clearRect(0,450,1400,150);
         if(R == 1){
             stickmanSwordR();
         }
         if(L == 1){
             stickmanSwordL();
         }
        }
        //right
        if(event.keyCode==39 && x<1370){
            x+=20;
            ctx.clearRect(0,450,1400,150);
             stickmanSwordR();
            }
        }
        //left
        if(event.keyCode==37 && x>30){
            x-=20;
            ctx.clearRect(0,450,1400,150);
            stickmanSwordL();
        }
        }
})