let hour = document.getElementById('hour');
let min = document.getElementById('min');
let ss = document.getElementById('ss');


function getTime(){
    let date = new Date();
    //getting hour, min,sec
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let RotateHour = 30*h + m/2;
    let RotateMin = 6*m;
    let RotateSec = 6*s;

    hour.style.transform = `rotate(${RotateHour}deg)`;
    min.style.transform = `rotate(${RotateMin}deg)`;
    ss.style.transform = `rotate(${RotateSec}deg)`;
}
setInterval(getTime,1000);