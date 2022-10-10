let check=0;
let on = document.getElementById("on");
on.style.background="linear-gradient(rgb(65, 6, 6),white,rgb(71, 14, 14))";
on.style.color="red";

let button1=document.querySelectorAll(".mybtn1");
let button2=document.querySelectorAll(".mybtn2");
let button3=document.querySelectorAll(".mybtn3");
const statuscheck=()=>{
    let display = document.getElementById("display");
     if(check==0){
        check=1;
        on.style.background="linear-gradient(white,red,white";
        on.style.color="white";
        display.style.background="linear-gradient(rgb(236, 236, 140),rgb(239, 239, 54),rgba(240, 220, 43, 0.931),rgb(150, 231, 83))";
        display.style.color="black";
       
        for(let i=0;i<12;i++){
            button2[i].style.animation="color-change 1s infinite";
            button2[i].style.boxShadow="3px 3px red";
        }
        for(let i=0;i<5;i++){
            button3[i].style.animation="color-change1 1s infinite";
        }
        for(let i=0;i<15;i++){
            button1[i].style.animation="color-change2 1s infinite";
        }

       
        
        
        
     }
     else if(check==1){
        check=0;
        on.style.background="linear-gradient(rgb(65, 6, 6),white,rgb(71, 14, 14))";
        on.style.color="red";
        display.value = ""; 
        display.style.background="#2e2e2e";
        bracketflag=0;
        
        for(let i=0;i<12;i++){
            button2[i].style.animation="none";
            button2[i].style.boxShadow="none";
        }
        for(let i=0;i<5;i++){
            button3[i].style.animation="none";
        }
        for(let i=0;i<15;i++){
            button1[i].style.animation="none";
        }

     }
}

function fact( n){
    let factorial=1;
    for(let i=1;i<=n;i++){
        factorial=factorial*i;
    }
    return factorial;
}
let bracketflag=0;
let shifting1=0;

const addtodisplay =(myval)=>{
    let display = document.getElementById("display");
    if(check==1){
        
        if(myval=="AC"){
            display.value = ""; 
            bracketflag=0;
            display.style.color="black";
        }
        else if(myval =='Back'){
            display.value=display.value.slice(0,-1);
        }
        else if(myval == "()"){
            if(bracketflag==0){
                display.value+="(";
                bracketflag=1;
            }
            else if(bracketflag==1){
                display.value+=")";
                bracketflag=0;
            }
        }
        else if(myval=="sh"){
            if(shifting1==0){
                shifting1=1;
            }
            else if(shifting1==1){
                shifting1=0;
            }
            
            
            
        }
        else if(myval =="tan"){
            if(shifting1==0){
                display.value+="Math.tan";
            }
            else if(shifting1==1){
                display.value+="Math.tanh";
            }
           
            
        }
        else if(myval =="sin"){
            if(shifting1==0){
                display.value+="Math.sin";
            }
            else if(shifting1==1){
                display.value+="Math.sinh";
            }
            
            
        }
        else if(myval =="cos"){
            if(shifting1==0){
                display.value+="Math.cos";
            }
            else if(shifting1==1){
                display.value+="Math.cosh";
            }
            
            
        }
        else if(myval =="log10"){
            display.value+="Math.log10";
            
        }
        else if(myval =="pi"){
            display.value+="Math.PI";
            
        }
        else if(myval =="exp"){
            display.value+="Math.exp";
            
        }
        else if(myval =="sqrt"){
            display.value+="Math.sqrt";
            
        }
        else if(myval =="log"){
            display.value+="Math.log";
            
        }
        else if(myval =="n!"){
        
            display.value+="fact";
            
        }
        else if(myval=="="){
            try{
                display.value=eval(display.value);
                if(eval(display.value)==Infinity){
                    
                    display.style.color="red";
                    
                }
                
                
            }
            catch{
                display.value = "invalid format";
                display.style.color="red";
            }
        }
        else{
            display.value += myval; 
        }
    
    }
        
}
