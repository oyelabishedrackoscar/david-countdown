const hour=document.getElementById('hour');
const minutes=document.getElementById('minutes');
const second =document.getElementById ('second');

const Start= document.getElementById('Start');
const Reset =document.getElementById('Reset');

const disp = document.getElementById('disp');

var interval=null;
var total=0;

totalvalue = () => {
    total = Number(hour.value)*3600 + Number(minutes.value)*60 + Number(second.value);
}

timer = ()=>{
    totalvalue(); 
    total--;

    if (total >=0) {
        var hr=Math.floor(total/3600)
        var mt= Math.floor((total/60) - (hr*60));
        var sc= total - ((hr*3600) + (mt*60));

        hour.value=hr
        minutes.value=mt;
        second.value=sc;
    }
    else{
        disp.innerText='The Time is over'
    }
}

Start.addEventListener("click", ()=>{
    clearInterval(interval);
    interval=setInterval(timer, 1000);

    disp.innerHTML="timer Strated"
})

Reset.addEventListener("click",() =>{
    clearInterval(interval)

    hour.value="0"
    minutes.value="0"
    second.value="0"

    disp.innerText='Timer'
})