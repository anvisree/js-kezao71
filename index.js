// Import stylesheets
import './style.css';

// Write Javascript code!
    let head=document.getElementById("demo");
    for(let a=1;a<=100;a++){
      let para=document.createElement("p");
      head.appendChild(para);
      if(a%3 === 0 && a%5 !== 0){
        para.innerHTML="google";
      }else if(a%5 === 0 && a%3 !== 0){
        para.innerHTML="facebook";
      } else if(a%3 === 0 && a%5 ===0){
         para.innerHTML="amazon";
      } else{
        para.innerHTML=a;
      }
      
    } 