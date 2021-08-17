const loadText= document.querySelector('.loading-text');
const bg=document.querySelector('.bg')
let load =0;
let counter =setInterval(blurring ,30);
 function blurring (){
     load++;
     if (load>99){
         clearInterval(counter);
     }
     loadText.innerText=`${load}%`
     bg.style.opacity=scale(load,0,100,0,1);
     loadText.style.opacity = scale(load,0,100,1,0);

     function scale (number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }

}