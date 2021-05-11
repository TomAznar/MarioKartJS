window.addEventListener("DOMContentLoaded", function () {

    let stepM = randomEntier(1,10)
    let stepP = randomEntier(1,10)
    let stepT = randomEntier(1,10)
    let mario = setInterval(mkMove, 2);
    let peach = setInterval(pkMove, 2);
    let toad = setInterval(tkMove, 2);  
    
    function mkMove(){

        let marioKart = document.getElementById("mk");
        let xM = marioKart.offsetLeft;
    
        if(xM < screen.width - 100){
    
            
            xM = xM + stepM;
            marioKart.style.left = xM + 'px';
        }
        
        else{
    
            marioKart.src = "mk2.png"
            clearInterval(mario);
        }
    
    }

    function pkMove(){

        let peachKart = document.getElementById("pk");
        let xP = peachKart.offsetLeft;
    
        
        if(xP < screen.width - 130){
    
            xP = xP + stepP;
            peachKart.style.left = xP + 'px';
        }
        
        else{
            peachKart.src = "pk2.png"
            clearInterval(peach);
        }
    
    }

    function tkMove(){

        let toadKart = document.getElementById("tk");
        let xT = toadKart.offsetLeft;
 
        
        if(xT < screen.width - 130){
    
            xT = xT + stepT;
            toadKart.style.left = xT + 'px';
        }
        
        else{
            toadKart.src = "tk2.png"
            clearInterval(toad);
        }
    
    }

});

function randomEntier(min,max){
    return Math.floor(Math.random() * (max-min + 1))+min;
 }

