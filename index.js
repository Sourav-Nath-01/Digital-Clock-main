const hourE1=document.getElementById("hour");
const minuteE1=document.getElementById("minutes");
const secondE1=document.getElementById("seconds");
const ampm=document.getElementById("ampm");
function updateClock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ap="AM";
    if(h>12){
        h=h-12;
        ap="PM";
    }
    h= h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;
    hourE1.innerHTML=h;
    minuteE1.innerHTML=m;
    secondE1.innerHTML=s;
    ampm.innerHTML=ap;
    setTimeout(()=>{
        updateClock();
    },1000);
}
updateClock();